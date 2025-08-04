import { useState } from "preact/hooks";
import { HeaderProps } from "../index.tsx";
import { Github, LucideMenu, Moon, Sun, X } from "lucide-preact";
import cx from "npm:classnames";

export function HeaderComponentV3({
  handleThemeToggle,
  currentTheme,
}: HeaderProps) {
  const [mobileOpen, handleMobileToggle] = useState(false);
  return (
    <div
      className="
            w-full border-b
            border-border-neutral 
            bg-background-lighter dark:bg-background-nightly
            text-text-dark  dark:text-text-light
          "
    >
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* <!-- Logo --> */}
        <h1 className="text-2xl font-semibold text-center tracking-tight">
          Moni<span className="text-accent-lighter">Text</span>
        </h1>

        {/* <!-- Navigation --> */}
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#" className="transition-colors hover:text-brand">
            Home
          </a>
          <a href="#" className="transition-colors hover:text-brand">
            Docs
          </a>
          <a href="#" className="transition-colors hover:text-brand">
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-brand">
            About
          </a>
        </nav>

        <nav className="md:hidden flex items-center">
          {/* @ts-ignore */}
          <button
            type="button"
            onClick={() => handleMobileToggle(!mobileOpen)}
            className="p-2 cursor-pointer"
          >
            {/* @ts-ignore */}
            <LucideMenu />
          </button>

          <div
            className={cx(
              "absolute top-0 h-full left-0 w-1/2 border-r border-brand transition-transform duration-300 bg-surface-light dark:bg-surface-dark",
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <ul className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
              <li className="self-center py-4">
                <button
                  type="button"
                  onClick={() => handleMobileToggle(!mobileOpen)}
                >
                  {/* @ts-ignore */}
                  <X />
                </button>
              </li>
              <li>
                <a href="#" className="block px-4 py-3">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-3">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-3">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 py-3">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- CTA Button --> */}

        <div className="ml-4 flex items-center gap-2">
          <button
            type="button"
            className="p-2 hover:text-brand"
            onClick={handleThemeToggle}
          >
            {/* @ts-ignore */}
            {currentTheme === "dark" ? <Moon /> : <Sun />}
          </button>{" "}
          <a href="#" className="p-2 hover:text-brand">
            {/* @ts-ignore */}
            <Github />
          </a>
          <a href="#" className="btn-primary px-4 py-2">
            Dashboard
          </a>
        </div>
      </header>
    </div>
  );
}
