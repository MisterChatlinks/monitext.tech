import LoginFormIsland from "#islands/Components/LoginForm/index.tsx";

export default function Login() {
    return (
        <div class="flex items-center justify-center min-h-screen bg-background">
            <div class="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold mb-6 text-center">Login</h1>
                <LoginFormIsland />
                <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don't have an account? <a href="/register" class="text-blue-500 hover:underline">Register here</a>
                </p>
            </div>
        </div>      
    )
}