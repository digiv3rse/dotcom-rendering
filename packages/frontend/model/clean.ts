import compose from 'compose-function';
import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { minify } from 'html-minifier';

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

export const clean = compose(
    (s: string) =>
        minify(s, {
            collapseWhitespace: true,
            removeEmptyElements: true,
            minifyCSS: true,
            minifyJS: true,
        }),
    DOMPurify.sanitize,
);
