import { createContext } from "preact";
import { useContext, useMemo } from "preact/hooks";
import { signal, Signal } from "@preact/signals";
import { ComponentChildren } from "preact";

/**
 * Creates a reactive context using `@preact/signals`
 */
export function createGenericContext<T>(defaultValue: T) {
  const ValueContext = createContext<Signal<T> | undefined>(undefined);

  const Provider = ({ children }: { children: ComponentChildren }) => {
    const state = useMemo(() => signal<T>(defaultValue), []);
    console.log("Creating context with default value:", defaultValue, "Current value:", state.value);

    return (
      <ValueContext.Provider value={state}>
        {children}
      </ValueContext.Provider>
    );
  };

  const useValue = (): T => {
    const ctx = useContext(ValueContext)
    if (!ctx) throw new Error("useValue must be used within its Provider");
    return ctx.value;
  };

  const useSetValue = (): ((v: T) => void) => {
    const ctx = useContext(ValueContext);
    if (!ctx) throw new Error("useSetValue must be used within its Provider");
    return (v: T) => {
      ctx.value = v;
    };
  };

  const useContextSignal = (): [T, (v: T) => void] => {
    const ctx = useContext(ValueContext);
    if (!ctx) throw new Error("useContextSignal must be used within its Provider");
    return [ctx.value, (v: T) => { ctx.value = v }];
  };

  return {
    Provider,
    useValue,
    useSetValue,
    useAsState: useContextSignal,
  };
}
