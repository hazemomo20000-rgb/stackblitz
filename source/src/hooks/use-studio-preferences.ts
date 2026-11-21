import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAccount } from "@/components/studio/AccountProvider";
import { useProfile } from "./use-profile";
import { DEFAULT_PREFS, applyPrefs, loadPrefs, savePrefs, type Prefs } from "@/lib/preferences";
import { parsePreferences, preferencesSchema } from "@/lib/account-rules";

export function useStudioPreferences() {
  const { user, ready } = useAccount();
  const profile = useProfile();
  const queryClient = useQueryClient();
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);
  const [sync, setSync] = useState<"local" | "loading" | "saving" | "saved" | "error">("loading");
  const identity = useRef<string | undefined>(undefined);
  const pending = useRef(0);
  const queue = useRef<Promise<void>>(Promise.resolve());
  const latest = useRef<Prefs>(DEFAULT_PREFS);
  const unsaved = useRef(false);
  useEffect(() => {
    identity.current = user?.id;
    pending.current = 0;
    unsaved.current = false;
    if (!ready) return;
    const next = user ? DEFAULT_PREFS : loadPrefs();
    latest.current = next; setPrefs(next); applyPrefs(next); setSync(user ? "loading" : "local");
  }, [user?.id, ready]);
  useEffect(() => {
    if (!user || pending.current > 0 || unsaved.current) return;
    if (profile.isError) { setSync("error"); return; }
    if (profile.data?.id === user.id) {
      const next = parsePreferences(profile.data.preferences);
      latest.current = next; setPrefs(next); applyPrefs(next); setSync("saved");
    }
  }, [profile.data, profile.isError, user?.id]);
  function updatePrefs(input: Prefs) {
    const next = preferencesSchema.parse(input);
    latest.current = next; setPrefs(next); applyPrefs(next);
    const id = user?.id;
    if (!id) { savePrefs(next); setSync("local"); return; }
    unsaved.current = true; pending.current++; setSync("saving");
    queue.current = queue.current.catch(() => {}).then(async () => {
      if (identity.current !== id) return;
      const { data, error } = await supabase.from("profiles").update({ preferences: next }).eq("id", id).select("id").single();
      if (identity.current !== id) return;
      pending.current--;
      if (error || !data) { setSync("error"); return; }
      if (pending.current === 0) { unsaved.current = false; setSync("saved"); void queryClient.invalidateQueries({ queryKey: ["profile", id] }); }
    }).catch(() => { if (identity.current === id) { pending.current = Math.max(0, pending.current - 1); setSync("error"); } });
  }
  return { prefs, updatePrefs, sync, retry: () => user && profile.data ? updatePrefs(latest.current) : void profile.refetch() };
}