import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../.env_client.ts";

/**
 * Hook to create a Supabase client for the browser.
 * This client is used for client-side operations.
 */
export function useSupabaseBrowserClient() {
  const supabase = createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabase;
}
