import { JSX } from "preact/jsx-runtime";
import { createVariableComponent } from "#utils/createVariableComponent.ts";
import { GlassMorph } from "./variants/GlassMorph.tsx";

function useContainer({
    spacingX = "px-4",
    spacingY = "py-8",
    className = "",
    children
}:{
    spacingX?: string;
    spacingY?: string;
    className?: string;
    children?: JSX.Element | JSX.Element[];
} = {}) {
    return {
        spacingX,
        spacingY,
        className,
        children
    };
}

export type ContainerProps = ReturnType<typeof useContainer>;

function Container({
    children,
    className = "",
    spacingX = "px-4",
    spacingY = "py-8",
}: ContainerProps) {
    return (
        <div class={`container mx-auto ${spacingX} ${spacingY} ${className}`}>
            <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
}

const ContainerComponent = createVariableComponent(useContainer, {
    default: Container,
    glassMorph: GlassMorph,
});

export default ContainerComponent;