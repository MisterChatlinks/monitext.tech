import type { ContainerProps } from "../Container.tsx";

export function GlassMorph({
    children,
    className = "",
    spacingX = "px-4",
    spacingY = "py-8",
}: ContainerProps) {
    return (
        <>
            <style>
                {`
                .glass-morph-card {
                    /* Default (light theme) styles */
                    background-color: rgba(255, 255, 255, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.18);
                    backdrop-filter: blur(10px);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
                }

                /* Dark mode styles */
                .dark .glass-morph-card {
                    background-color: rgba(0, 0, 0, 0.25);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(15px);
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                }
                `}
            </style>
            
            <div class={`container mx-auto ${spacingX} ${spacingY} ${className}`}>
                <div class="max-w-screen-sm mx-auto p-6 rounded-3xl flex flex-col items-center justify-center glass-morph-card">
                    {children}
                </div>
            </div>
        </>
    );
}