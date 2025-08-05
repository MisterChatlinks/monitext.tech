import markdownIt from 'markdown-it';
import hljs from 'highlight.js/lib/core';

import javascript from 'npm:highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';
import { type LanguageFn } from "highlight.js"

// Register languages with highlight.js
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('bash', bash as unknown as LanguageFn);


//@ts-ignore, i just gave up on this one
const markdown: { render: (str: string) => string } = new markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: (str: string, lang: string) => {
    if (lang && hljs.getLanguage(lang)) {
        console.log('Highlighting code:', str, lang);
      try {
        return `<pre class="hljs  markdown-code"><span class="lang-name">${lang}</span><code class="hljs">${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value}</code></pre>`;
      } catch (__) {
        console.error('Error highlighting code:', __);
        //@ts-ignore, this one too
        return `<pre class="hljs"><code>${markdownIt.utils.escapeHtml(str)}</code></pre>`;
      }
    } 
}});

export function makeEscapedCodeBlock(code: string, language = "bash"): string {
  return `\`\`\`${language}\n${code}\n\`\`\``;
}


export { markdown, hljs };


