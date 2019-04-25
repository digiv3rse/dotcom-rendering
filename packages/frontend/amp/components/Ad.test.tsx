import React from 'react';
import { render } from 'react-testing-library';
import { Ad } from '@frontend/amp/components/Ad';

describe('AdComponent', () => {
    const edition = 'UK';
    const section = '';
    const contentType = '';
    const commercialConfig = {
        useKrux: true,
        usePrebid: true,
    };
    const commercialProperties = {
        UK: { adTargeting: [] },
        US: { adTargeting: [] },
        AU: { adTargeting: [] },
        INT: { adTargeting: [] },
    };
    const kruxURL =
        'https://cdn.krxd.net/userdata/v2/amp/2196ddf0-947c-45ec-9b0d-0a82fb280cb8?segments_key=x&kuid_key=kuid';
    const usPrebidURL =
        'https://prebid.adnxs.com/pbs/v1/openrtb2/amp?tag_id=7&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF';
    const auPrebidURL =
        'https://prebid.adnxs.com/pbs/v1/openrtb2/amp?tag_id=6&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF';
    const rowPrebidURL =
        'https://prebid.adnxs.com/pbs/v1/openrtb2/amp?tag_id=4&w=ATTR(width)&h=ATTR(height)&ow=ATTR(data-override-width)&oh=ATTR(data-override-height)&ms=ATTR(data-multi-size)&slot=ATTR(data-slot)&targeting=TGT&curl=CANONICAL_URL&timeout=TIMEOUT&adcid=ADCID&purl=HREF';

    beforeEach(() => {
        commercialConfig.useKrux = true;
        commercialConfig.usePrebid = true;
    });

    it('rtc-config returns correctly formed Krux and PreBid URLs when useKrux and usePrebid flags are set to true', () => {
        const { container } = render(
            <Ad
                edition={edition}
                section={section}
                contentType={contentType}
                config={commercialConfig}
                commercialProperties={commercialProperties}
            />,
        );

        const ampAdElement = container.querySelectorAll('amp-ad');

        expect(ampAdElement).not.toBeNull();

        if (ampAdElement) {
            const usRtcAttribute = ampAdElement[0].getAttribute('rtc-config');
            const auRtcAttribute = ampAdElement[1].getAttribute('rtc-config');
            const rowRtcAttribute = ampAdElement[2].getAttribute('rtc-config');

            expect(usRtcAttribute).not.toBeNull();
            expect(auRtcAttribute).not.toBeNull();
            expect(rowRtcAttribute).not.toBeNull();

            if (usRtcAttribute) {
                expect(JSON.parse(usRtcAttribute).urls).toMatchObject([
                    kruxURL,
                    usPrebidURL,
                ]);
            }
            if (auRtcAttribute) {
                expect(JSON.parse(auRtcAttribute).urls).toMatchObject([
                    kruxURL,
                    auPrebidURL,
                ]);
            }
            if (rowRtcAttribute) {
                expect(JSON.parse(rowRtcAttribute).urls).toMatchObject([
                    kruxURL,
                    rowPrebidURL,
                ]);
            }
        }
    });

    it('rtc-config returns only the correctly formed PreBid URL when useKrux flag is set to false and usePrebid flag is set to true', () => {
        commercialConfig.useKrux = false;

        const { container } = render(
            <Ad
                edition={edition}
                section={section}
                contentType={contentType}
                config={commercialConfig}
                commercialProperties={commercialProperties}
            />,
        );

        const ampAdElement = container.querySelectorAll('amp-ad');

        expect(ampAdElement).not.toBeNull();

        if (ampAdElement) {
            const usRtcAttribute = ampAdElement[0].getAttribute('rtc-config');
            const auRtcAttribute = ampAdElement[1].getAttribute('rtc-config');
            const rowRtcAttribute = ampAdElement[2].getAttribute('rtc-config');

            expect(usRtcAttribute).not.toBeNull();
            expect(auRtcAttribute).not.toBeNull();
            expect(rowRtcAttribute).not.toBeNull();

            if (usRtcAttribute) {
                expect(JSON.parse(usRtcAttribute).urls).toMatchObject([
                    usPrebidURL,
                ]);
            }
            if (auRtcAttribute) {
                expect(JSON.parse(auRtcAttribute).urls).toMatchObject([
                    auPrebidURL,
                ]);
            }
            if (rowRtcAttribute) {
                expect(JSON.parse(rowRtcAttribute).urls).toMatchObject([
                    rowPrebidURL,
                ]);
            }
        }
    });

    it('rtc-config returns only the Krux URL when useKrux flag is set to true and usePrebid flag is set to false', () => {
        commercialConfig.usePrebid = false;

        const { container } = render(
            <Ad
                edition={edition}
                section={section}
                contentType={contentType}
                config={commercialConfig}
                commercialProperties={commercialProperties}
            />,
        );

        const ampAdElement = container.querySelectorAll('amp-ad');

        expect(ampAdElement).not.toBeNull();

        if (ampAdElement) {
            const usRtcAttribute = ampAdElement[0].getAttribute('rtc-config');
            const auRtcAttribute = ampAdElement[1].getAttribute('rtc-config');
            const rowRtcAttribute = ampAdElement[2].getAttribute('rtc-config');

            expect(usRtcAttribute).not.toBeNull();
            expect(auRtcAttribute).not.toBeNull();
            expect(rowRtcAttribute).not.toBeNull();

            if (usRtcAttribute) {
                expect(JSON.parse(usRtcAttribute).urls).toMatchObject([
                    kruxURL,
                ]);
            }
            if (auRtcAttribute) {
                expect(JSON.parse(auRtcAttribute).urls).toMatchObject([
                    kruxURL,
                ]);
            }
            if (rowRtcAttribute) {
                expect(JSON.parse(rowRtcAttribute).urls).toMatchObject([
                    kruxURL,
                ]);
            }
        }
    });

    it('rtc-config returns no URLs when useKrux and usePrebid flags are set to false', () => {
        commercialConfig.useKrux = false;
        commercialConfig.usePrebid = false;

        const { container } = render(
            <Ad
                edition={edition}
                section={section}
                contentType={contentType}
                config={commercialConfig}
                commercialProperties={commercialProperties}
            />,
        );

        const ampAdElement = container.querySelectorAll('amp-ad');

        expect(ampAdElement).not.toBeNull();

        if (ampAdElement) {
            const usRtcAttribute = ampAdElement[0].getAttribute('rtc-config');
            const auRtcAttribute = ampAdElement[1].getAttribute('rtc-config');
            const rowRtcAttribute = ampAdElement[2].getAttribute('rtc-config');

            expect(usRtcAttribute).not.toBeNull();
            expect(auRtcAttribute).not.toBeNull();
            expect(rowRtcAttribute).not.toBeNull();

            if (usRtcAttribute) {
                expect(JSON.parse(usRtcAttribute).urls).toMatchObject([]);
            }
            if (auRtcAttribute) {
                expect(JSON.parse(auRtcAttribute).urls).toMatchObject([]);
            }
            if (rowRtcAttribute) {
                expect(JSON.parse(rowRtcAttribute).urls).toMatchObject([]);
            }
        }
    });
});
