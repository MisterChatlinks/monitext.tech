import { useTheme, useToggleTheme } from "#context/useThemeContext.tsx";
import { PrefRecord, usePreference } from "#hooks/usePreference.tsx";
import { useEffect } from "preact/hooks";

export function ThemeManager() {

  const theme = useTheme();
  const pref = usePreference()
  const toggleTheme = useToggleTheme()

  useEffect(() => {
    const storedTheme = pref.get(PrefRecord.theme)
    const systemPreference = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme) {
      storedTheme != theme && toggleTheme()
    }
    else if (systemPreference) {
      theme != "dark" && toggleTheme()
    } 
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      // Ajoute la classe 'dark' à l'élément <html>
      document.documentElement.classList.add("dark");
      console.log("theme dark");
    } else {
      // Retire la classe 'dark' de l'élément <html>
      document.documentElement.classList.remove("dark");
      console.log("theme light");
    }
    pref.set(PrefRecord.theme, theme)
  }, [theme]);

  return null;
}
