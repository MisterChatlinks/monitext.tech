import { useSupabaseBrowserClient } from "#hooks/useSupabaseClient.tsx";
import { useCallback } from "preact/hooks";
import { useAddSnackBar } from "#context/useSnackBarPopUp.tsx";
import { createVariableComponent } from "#utils/createVariableComponent.ts";
import * as V from "validator"

function useLogin() {

    const supabase = useSupabaseBrowserClient();
    const addSnackBar = useAddSnackBar();

    const handleLogin = useCallback(async ({ email, password }: { email: string, password: string }) => {

        if (!email || !password) {
            addSnackBar("error", "Email and password are required.");
            return;
        }

        if (!V.isEmail(email)) {
            addSnackBar("error", "Invalid email format.");
            return;
        }

        if (!V.isLength(password, { min: 8 })) {
            addSnackBar("error", "Password must be at least 8 characters long.");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            addSnackBar("error", `Login failed: ${error.message}`);
            console.error("Login failed:", error);
        }
        else {
            addSnackBar("success", "Login successful!");
            console.log("Login successful");
        }
    }, []);

    return { handleLogin };
}

export type LoginFormProps = ReturnType<typeof useLogin>;


function LoginForm({ handleLogin }: LoginFormProps) {

    const onSubmit = (event: Event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        handleLogin({ email, password });
    };

    return (
        <form onSubmit={onSubmit} class="login-form">
            <div class="flex flex-col space-y-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>
            <button
                type="submit"
                class="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
            >
                Login
            </button>
        </form>
    );
}

const LoginFormIsland = createVariableComponent(useLogin,
    {
        default: LoginForm
    },
) 

export default LoginFormIsland;