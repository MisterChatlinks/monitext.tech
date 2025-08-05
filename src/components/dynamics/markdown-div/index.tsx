
import { isValidElement } from 'preact';
import { PreactNode } from "../../../types/preact.ts";
import { markdown } from "./markdown.ts";

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export type MarkdownDivProps = {
    className?: string;
    children: PreactNode;
};

export const Markdown = ({ className, children }: MarkdownDivProps) => {
    const elements: PreactNode[] = [];

    // Flatten children and interleave <br /> with markdown chunks
    (typeof children === "object" && Array.isArray(children) ? children : [children]).forEach((child) => {
        if (typeof child === 'string') {
            // Parse markdown from string and push as HTML
            const html = markdown.render(
                child
                    .split('\n')
                    .map((c) => c.trimStart())
                    .join('\n')
            );
            elements.push(<span dangerouslySetInnerHTML={{ __html: html }} />);
        } 
        else if (isValidElement(child)) {
            
            let result: PreactNode = child;
            
            if (child?.type === 'code') {              
                const language = child.props.className.split(" ") as string[]
                console.log(child.props.children, "land", language)
                const code = child.props.children as string;
                const html = markdown.render(['```', language[0] || '', '\n', code, '\n', '```'].join(''));            
                result = <span dangerouslySetInnerHTML={{ __html: html }} className={language.slice(1).join(" ") || ""} />;
            }

            elements.push(result);
        } 
    });

    return <div className={className}>
        {elements}
    </div>;
};
