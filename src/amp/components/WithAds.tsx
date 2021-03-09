import React from 'react';
import { Ad } from '@root/src/amp/components/Ad';
import { css } from 'emotion';

const clear = css`
	clear: both;
`;

interface AdInfo {
	edition: Edition;
	contentType: string;
	commercialProperties: CommercialProperties;
	switches: {
		ampPrebid: boolean;
		permutive: boolean;
	};
	section?: string;
}

type Props = {
	items: JSX.Element[];
	adSlots: number[];
	adCss: string;
	adInfo: AdInfo;
};

export const WithAds = ({ items, adSlots, adCss, adInfo }: Props) => {
	const commercialConfig = {
		usePrebid: adInfo.switches.ampPrebid,
		usePermutive: adInfo.switches.permutive,
	};

	const ad = (id: string): JSX.Element => (
		// data-sort-time and id needed for amp-live-list validation
		<div id={id} data-sort-time="1">
			<Ad
				adCss={adCss}
				edition={adInfo.edition}
				section={adInfo.section}
				contentType={adInfo.contentType}
				config={commercialConfig}
				commercialProperties={adInfo.commercialProperties}
			/>
		</div>
	);

	const withAds = items.map((item, i) => {
		if (adSlots.includes(i)) {
			return (
				<>
					{item}
					{ad(`ad-${i + 1}`)}
				</>
			);
		}

		return item;
	});

	return (
		<>
			{withAds}
			<div id="clean-blocks" data-sort-time="1" className={clear} />
		</>
	);
};
