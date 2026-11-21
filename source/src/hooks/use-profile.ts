import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAccount } from "@/components/studio/AccountProvider";

export function useProfile() {
  const { user } = useAccount();
  const queryClient = useQueryClient();
  const id = user?.id;
  const query = useQuery({
    queryKey: ["profile", id], enabled: !!id,
    queryFn: async () => {
      if (!id) throw new Error("سجّل الدخول أولاً.");
      const { data, error } = await supabase.from("profiles").select("id,display_name,avatar_path,preferences,updated_at").eq("id", id).single();
      if (error) throw error;
      let avatarUrl: string | null = null;
      if (data.avatar_path) {
        const signed = await supabase.storage.from("avatars").createSignedUrl(data.avatar_path, 3600);
        if (signed.error) throw signed.error;
        avatarUrl = signed.data.signedUrl;
      }
      return { ...data, avatarUrl };
    },
    staleTime: 30_000, refetchInterval: 30 * 60 * 1000,
  });
  useEffect(() => {
    if (!id) return;
    const channel = supabase.channel(`profile-${id}-${crypto.randomUUID()}`).on("postgres_changes", {
      event: "UPDATE", schema: "public", table: "profiles", filter: `id=eq.${id}`,
    }, () => { void queryClient.invalidateQueries({ queryKey: ["profile", id] }); }).subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [id, queryClient]);
  return query;
}