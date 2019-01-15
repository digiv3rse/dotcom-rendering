declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
    interface Window {
        guardian: {
            update: any;
            app: {
                data: any;
                cssIDs: string[];
            };
            polyfilled: boolean;
            onPolyfilled: () => void;
        };
        GoogleAnalyticsObject: string;
        ga: UniversalAnalytics.ga;
    }
}
/*~ this line is required as per TypeScript's global-modifying-module.d.ts instructions */
export {};
