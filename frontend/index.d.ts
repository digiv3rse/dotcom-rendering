// shared type declarations
interface LinkType {
    title: string;
    longTitle: string;
    url: string;
    children?: Array<LinkType>;
    mobileOnly?: boolean;
    isPillar?: boolean;
}
interface NavType {
    pillars: Array<LinkType>;
    otherLinks: Array<LinkType>;
    brandExtensions: Array<LinkType>;
    subNavSections?: {
        parentLink: LinkType;
        links: Array<LinkType>;
    };
}
interface CAPIType {
    headline: string;
    standfirst: string;
    main: string;
    body: string;
    author: string;
    webPublicationDate: Date;
    sectionName: string;
}

// 3rd party type declarations
declare module 'emotion-server' {
    export const extractCritical: any;
}
declare module 'dompurify' {
    const createDOMPurify: any;
    export default createDOMPurify;
}
declare module 'compose-function' {
    const compose: any;
    export default compose;
}
