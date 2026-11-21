import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

const AccountContext = createContext<{ user: User | null; ready: boolean; recovery: boolean }>({ user: null, ready: false, recovery: false });
export const useAccount = () => useContext(AccountContext);
export function AccountProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);
  const [recovery, setRecovery] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();
  useEffect(() => {
    let alive = true;
    let revision = 0;
    const refresh = async () => {
      const current = ++revision;
      const { data } = await supabase.auth.getUser();
      if (alive && current === revision) { setUser(data.user); setReady(true); }
    };
    void refresh();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
      if (!["SIGNED_IN", "SIGNED_OUT", "USER_UPDATED", "PASSWORD_RECOVERY"].includes(event)) return;
      if (event === "SIGNED_OUT") { ++revision; setUser(null); setRecovery(false); queryClient.clear(); }
      else queueMicrotask(() => { void refresh(); });
      void router.invalidate();
      if (event !== "SIGNED_OUT") void queryClient.invalidateQueries();
    });
    return () => { alive = false; subscription.unsubscribe(); };
  }, [router, queryClient]);
  return <AccountContext.Provider value={{ user, ready, recovery }}>{children}</AccountContext.Provider>;
}