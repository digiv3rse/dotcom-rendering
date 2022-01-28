import { LiveBlock } from '../components/LiveBlock';

type Props = {
	format: ArticleFormat;
	blocks: Block[];
	adTargeting: AdTargeting;
	host?: string;
	pageId: string;
	webTitle: string;
	ajaxUrl: string;
};

export const LiveBlogRenderer = ({
	format,
	blocks,
	adTargeting,
	host,
	pageId,
	webTitle,
	ajaxUrl,
}: Props) => {
	return (
		<>
			{blocks.map((block) => {
				return (
					<LiveBlock
						format={format}
						block={block}
						pageId={pageId}
						webTitle={webTitle}
						adTargeting={adTargeting}
						host={host}
						ajaxUrl={ajaxUrl}
					/>
				);
			})}
		</>
	);
};
