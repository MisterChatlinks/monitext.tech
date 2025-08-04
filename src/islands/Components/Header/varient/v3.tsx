import { JSX } from "preact/jsx-runtime";
import { HeaderProps } from "../index.tsx"
import { Sun, Moon } from "lucide-preact"

export function HeaderComponentV3({ handleThemeToggle, currentTheme }: HeaderProps) {
    return (
        <div className="
            w-full border-b
            border-border-neutral 
            bg-background-lighter dark:bg-background-nightly
            text-text-dark  dark:text-text-light
          ">
            <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* <!-- Logo --> */}
                <h1 className="text-2xl font-semibold tracking-tight">Moni<span className="text-accent-lighter">Text</span></h1>

                {/* <!-- Navigation --> */}
                <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
                    <a href="#" className="transition-colors accent-text-effects">Home</a>
                    <a href="#" className="transition-colors accent-text-effects">Docs</a>
                    <a href="#" className="transition-colors accent-text-effects">GitHub</a>
                    <a href="#" className="transition-colors accent-text-effects">About</a>
                </nav>

                {/* <!-- CTA Button --> */}

                <div className="ml-4">
                    <button type="button" className="px-4 py-2" onClick={handleThemeToggle}>
                        {/* @ts-ignore */}
                        {currentTheme === "dark" ? <Moon /> : <Sun />}
                    </button>
                    <a href="#" className="btn-primary"> Dashboard </a>
                </div>
            </header>
        </div>
    )
}