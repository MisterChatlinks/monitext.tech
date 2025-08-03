import { useSnackBarPopUp } from "#context/useSnackBarPopUp.tsx";
import { useEffect } from "preact/hooks";

export function SnackBarManager() {
    
    const { snackBarValue, removeSnackBar } = useSnackBarPopUp();

    // Effect for auto-suppress
    useEffect(() => {
        // Find the snack bars that need to be auto-suppressed
        const autoSuppressedSnacks = snackBarValue.filter(snack => snack.auto_fade);
        
        const timers = autoSuppressedSnacks.map(snack => {
            return setTimeout(() => {
                removeSnackBar(snack.index);
            }, 3000); // 3 seconds (3000ms)
        });

        // Cleanup function
        return () => {
            timers.forEach(timer => clearTimeout(timer));
        };
    }, [snackBarValue]);

    return (
        <div class="snack-bar-manager fixed top-4 right-4 z-50 flex flex-col items-end space-y-2">
            {snackBarValue.map((snack) => (
                <div
                    className={`snack-bar
                        max-w-xs p-3 rounded-lg shadow-md text-white transition-all duration-300
                        ${snack.type === "success" ? "bg-green-500" : ""}
                        ${snack.type === "error" ? "bg-red-500" : ""}
                        ${snack.type === "info" ? "bg-blue-500" : ""}`}
                    key={snack.index}
                >
                    <div className="flex items-center justify-between">
                        <span className="snack-bar-message flex-grow pr-4">{snack.message}</span>
                        <button
                            type="button"
                            className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-current focus:ring-white"
                            onClick={() => removeSnackBar(snack.index)}
                            aria-label="Close"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}