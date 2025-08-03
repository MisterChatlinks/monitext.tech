import { useSupabaseBrowserClient } from "#hooks/useSupabaseClient.tsx";
import { useSetUserAuthStateValue } from "#context/useUserContext.tsx";
import { useEffect } from "preact/hooks";

export function AuthStateManager() {
   
    const supabase = useSupabaseBrowserClient();
    
    useEffect(() => {

        const setAuthState = useSetUserAuthStateValue();

        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN") {
                console.log("User signed in:", session?.user);
                setAuthState(true);
            } else if (event === "SIGNED_OUT") {
                console.log("User signed out");
                setAuthState(false);
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [supabase]);

    return null; // This component does not render anything
}