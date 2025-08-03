import { useToggleTheme } from "#context/useThemeContext.tsx";
import { AppLinks } from "../../../.env_client.ts";
import { createVariableComponent } from "#utils/createVariableComponent.ts";
import { link } from "node:fs";

export function useHeader() {
    const toggleTheme = useToggleTheme();

    const handleThemeToggle = () => {
        toggleTheme();
    };


    const links = {
        "home": "",
        "login": "login",
        "register": "register",
    }

    const defaultLinks = Object.entries(links).map(([name, path]) => [name, `/${path}`] as [string, `/${string}`]);
    const linksObj = Object.fromEntries([...defaultLinks]);

    return {
        handleThemeToggle, linksObj, links
    };
}

type HeaderProps = ReturnType<typeof useHeader>;

function HeaderCompenent( { handleThemeToggle, linksObj }: HeaderProps) {

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

function HeaderCompenentMtxt (param: HeaderProps  ){
    return(
        <div className="container w-full bg-primary-bg flex justify-around items-center">
            <div>
                Moni<span className="text-accent hover:text-accent-hover">Text</span>
            </div>
            <div className="flex flex-wrap flex-row sm:flex-col md:flex-row text-primary-text">
                {
                    Object.entries(param.links).map(
                        ([label, href], i) =>  <a href={href} key={i} className="btn border border-secondary-bg">{label}</a>
                    )
                }
            </div>
        </div>
    )
}


 const HeaderIsland = createVariableComponent(useHeader, { 
    default: HeaderCompenent, 
    v2: HeaderCompenentMtxt
 });
 
export default HeaderIsland;