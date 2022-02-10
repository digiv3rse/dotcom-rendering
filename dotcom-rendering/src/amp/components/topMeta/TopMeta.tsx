import React from 'react';

import { ArticleDesign, ArticleSpecial } from '@guardian/libs';

import { ArticleModel } from '../../types/ArticleModel';
import { TopMetaNews } from './TopMetaNews';
import { TopMetaOpinion } from './TopMetaOpinion';
import { TopMetaPaidContent } from './TopMetaPaidContent';
import { TopMetaAnalysis } from './TopMetaAnalysis';

export const TopMeta: React.FunctionComponent<{
	data: ArticleModel;
	design: ArticleDesign;
	pillar: ArticleTheme;
	adTargeting?: AdTargeting;
}> = ({ data, design, pillar, adTargeting }) => {
	if (pillar === ArticleSpecial.Labs)
		return <TopMetaPaidContent articleData={data} pillar={pillar} />;
	switch (design) {
		case ArticleDesign.Comment:
		case ArticleDesign.Letter:
			return <TopMetaOpinion articleData={data} pillar={pillar} />;
		case ArticleDesign.Analysis:
			return <TopMetaAnalysis articleData={data} pillar={pillar} />;
		default:
			return (
				<TopMetaNews
					articleData={data}
					adTargeting={adTargeting}
					pillar={pillar}
				/>
			);
	}
};
