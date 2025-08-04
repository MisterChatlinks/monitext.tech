import { HeaderProps } from "../index.tsx";

export function HeaderCompenent( { handleThemeToggle, linksObj }: HeaderProps) {

    return (
        <header class="flex justify-between items-center p-4 bg-cerulean">
            <nav>
                <ul class="flex space-x-4">
                    {Object.entries(linksObj).map(([name, path]) => (
                        <li key={name} className="link button">
                            <a href={path} class="text-primary-text  hover:underline">
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <button type="button" onClick={handleThemeToggle} class="text-primary-text dark:text-secondary-text">
                Toggle Theme
            </button>
        </header>
    );
}
