import { JSX } from "preact";

// Factory type
type ComponentView<T> = (props: T) => JSX.Element;

// Record of view renderers
type ViewMap<T> = Record<string, ComponentView<T>>;

/**
 * Generic headless constructor
 * 
 * @param useComponent - The hook/data provider
 * @param views - A record of possible renderers
 * @param defaultViewKey - Which view to use by default
 */
export function createVariableComponent<T, S>(
  useComponent: (param?: S ) => T,
  views: ViewMap<T>,
  defaultViewKey: string = "default"
) {
  return function Component({ view, ...param }: { view?: keyof typeof views | string } & S) {
    const props = useComponent(param as S);
    const Renderer = views[view as keyof typeof views] ?? views[defaultViewKey];
    return Renderer(props);
  };
}