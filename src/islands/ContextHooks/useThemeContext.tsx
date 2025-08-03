import { createGenericContext } from "#utils/createGenericContext.tsx";

export type Theme = "light" | "dark";

const {
  Provider: ThemeProvider,
  useValue: useTheme,
  useSetValue: useSetTheme,
  useAsState: useThemeCtxAsState,
} = createGenericContext<Theme>("dark");

export const useToggleTheme = () => {
  const [
    theme,
    setTheme,
  ] = useThemeCtxAsState();
  
  return () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
};

export { ThemeProvider, useSetTheme, useTheme };
