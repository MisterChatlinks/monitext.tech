import { useTheme, useToggleTheme } from "#context/useThemeContext.tsx";
import { createVariableComponent } from "#utils/createVariableComponent.ts";
import { HeaderCompenent } from "./varient/v1.tsx";
import { HeaderCompenentV2 } from "./varient/v2.tsx";
import { HeaderComponentV3 } from "./varient/v3.tsx";

export function useHeader() {
    
    const currentTheme = useTheme();

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
        handleThemeToggle, currentTheme,  linksObj, links
    };
}

export type HeaderProps = ReturnType<typeof useHeader>;

 const HeaderIsland = createVariableComponent(useHeader, { 
    default: HeaderCompenent, 
    v2: HeaderCompenentV2,
    v3: HeaderComponentV3
 });
 
export default HeaderIsland;