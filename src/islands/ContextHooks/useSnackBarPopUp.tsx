import { createGenericContext } from "#utils/createGenericContext.tsx";
import { JSX } from "preact/jsx-runtime";

const {
  Provider: SnackBarProvider,
  useValue: useSnackBarValue,
  useSetValue: useSetSnackBarValue,
  useAsState: useSnackBarCtxAsState,
} = createGenericContext<
  {
    type: "success" | "error" | "info";
    message: string | JSX.Element;
    auto_fade?: boolean;
    index: number;
  }[]
>([
  { type: "info", message: "Welcome to Monitext!", auto_fade: true, index: 0 },
]);

export { SnackBarProvider };

// Now, export a hook that just gives you the setter
export function useAddSnackBar() {
  const setSnackBar = useSetSnackBarValue(); // Get the setter from the context
  const snackValue = useSnackBarValue(); // Get the current value to check length

  // This hook returns a function that you can call to add a snackbar
  // The function returned is NOT a hook itself.
  return (
    type: "success" | "error" | "info",
    message: string | JSX.Element,
    auto_fade = true,
  ) => {
    console.log("Adding snack bar:", type, message, "Current snack count:", snackValue.length);
    console.log("Current snack bar state:", snackValue);
    
    setSnackBar([...snackValue, {
      type,
      message,
      auto_fade,
      index: snackValue.length,
    }]);
  };
}

export function useSnackBarPopUp() {
  const [snackBarValue, setSnackBarValue] = useSnackBarCtxAsState();

  const removeSnackBar = (index: number) => {
    setSnackBarValue(
      snackBarValue
        .filter((snack) => snack.index !== index)
        .map((snack, i) => ({
          ...snack,
          index: i,
        }))
    );
  };

  return { snackBarValue, removeSnackBar };
}
