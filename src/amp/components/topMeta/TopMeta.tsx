import { Design, Special } from '@guardian/types';

import { ArticleModel } from '@root/src/amp/types/ArticleModel';
import { TopMetaNews } from '@root/src/amp/components/topMeta/TopMetaNews';
import { TopMetaOpinion } from '@root/src/amp/components/topMeta/TopMetaOpinion';
import { TopMetaPaidContent } from '@root/src/amp/components/topMeta/TopMetaPaidContent';

export const TopMeta: React.FunctionComponent<{
	data: ArticleModel;
	design: Design;
	pillar: Theme;
	adTargeting?: AdTargeting;
}> = ({ data, design, pillar, adTargeting }) => {
	if (pillar === Special.Labs)
		return <TopMetaPaidContent articleData={data} pillar={pillar} />;
	switch (design) {
		case Design.Comment:
			return <TopMetaOpinion articleData={data} pillar={pillar} />;
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
