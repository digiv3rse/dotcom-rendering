import { submitComponentEvent } from '../../client/ophan/ophan.ts';
import { Body } from '../ExpandableAtom/Body.tsx';
import { Container } from '../ExpandableAtom/Container.tsx';
import { Footer } from '../ExpandableAtom/Footer.tsx';

export type GuideAtomProps = {
	id: string;
	label?: string;
	title: string;
	image?: string;
	html: string;
	credit?: string;
	format: ArticleFormat;
	expandForStorybook?: boolean;
	likeHandler?: () => void;
	dislikeHandler?: () => void;
	expandCallback?: () => void;
};

export const GuideAtom = ({
	id,
	title,
	image,
	html,
	credit,
	format,
	expandForStorybook,
	likeHandler,
	dislikeHandler,
	expandCallback,
}: GuideAtomProps): JSX.Element => {
	return (
		<Container
			id={id}
			title={title}
			format={format}
			atomType="guide"
			atomTypeTitle="Quick Guide"
			expandForStorybook={expandForStorybook}
			expandCallback={
				expandCallback ??
				(() =>
					submitComponentEvent({
						component: {
							componentType: 'GUIDE_ATOM',
							id,
							products: [],
							labels: [],
						},
						action: 'EXPAND',
					}))
			}
		>
			<Body html={html} image={image} credit={credit} format={format} />
			<Footer
				format={format}
				dislikeHandler={
					dislikeHandler ??
					(() =>
						submitComponentEvent({
							component: {
								componentType: 'GUIDE_ATOM',
								id,
								products: [],
								labels: [],
							},
							action: 'DISLIKE',
						}))
				}
				likeHandler={
					likeHandler ??
					(() =>
						submitComponentEvent({
							component: {
								componentType: 'GUIDE_ATOM',
								id,
								products: [],
								labels: [],
							},
							action: 'LIKE',
						}))
				}
			></Footer>
		</Container>
	);
};
