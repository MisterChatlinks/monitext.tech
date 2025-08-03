import RegistrationFormIsland from "#islands/Components/RegisterForm/index.tsx";

export default function Register() {
    return (
        <div class="flex items-center justify-center min-h-screen bg-background">
            <div class="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h1 class="text-2xl font-bold mb-6 text-center">Register</h1>
                <RegistrationFormIsland />
                <p class="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account? <a href="/login" class="text-blue-500 hover:underline">Login here</a>
                </p>
            </div>
        </div>      
    );
}