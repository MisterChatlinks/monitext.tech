import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "../.env_client.ts";

export function useSupabaseServerClient() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabase;
}

export function useSupabaseAsService() {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") || "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
  );
  return supabase;
}
