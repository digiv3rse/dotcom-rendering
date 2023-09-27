import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import type { SignedInWithCookies } from '../../lib/useAuthStatus';
import type { CommentType } from '../../types/discussion';
import { TopPicks } from './TopPicks';

export default { component: TopPicks, title: 'Discussion/TopPicks' };

const format = {
	display: ArticleDisplay.Standard,
	design: ArticleDesign.Standard,
	theme: Pillar.News,
};

const comment: CommentType = {
	id: 25488498,
	body: '<p>Quisque feugiat odio nibh, ac congue lectus interdum nec. Maecenas ut elit ut turpis fringilla dignissim. Sed molestie vehicula ullamcorper. Cras vulputate augue vel diam tempus pellentesque. Etiam aliquam erat nec imperdiet semper. </p>',
	date: '26 July 2013 4:35pm',
	isoDateTime: '2013-07-26T15:13:20Z',
	status: 'visible',
	webUrl: 'https://discussion.theguardian.com/comment-permalink/25488498',
	apiUrl: 'https://discussion.guardianapis.com/discussion-api/comment/25488498',
	numRecommends: 0,
	isHighlighted: false,
	responseTo: {
		displayName: 'FrankDeFord',
		commentApiUrl:
			'https://discussion.guardianapis.com/discussion-api/comment/25487686',
		isoDateTime: '2013-07-26T15:13:20Z',
		date: '26 July 2013 4:13pm',
		commentId: '25487686',
		commentWebUrl:
			'https://discussion.theguardian.com/comment-permalink/25487686',
	},
	userProfile: {
		userId: '3150446',
		displayName: 'AndyPietrasik',
		webUrl: 'https://profile.theguardian.com/user/id/3150446',
		apiUrl: 'https://discussion.guardianapis.com/discussion-api/profile/3150446',
		avatar: 'https://avatar.guim.co.uk/user/3150446',
		secureAvatarUrl: 'https://avatar.guim.co.uk/user/3150446',
		badge: [
			{
				name: 'Staff',
			},
		],
	},
};

const commentWithLongBody: CommentType = {
	...comment,
	body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales metus magna, et molestie diam gravida quis. Ut ligula libero, condimentum quis elit at, dignissim pulvinar enim. Phasellus mattis felis in mi facilisis, ut vulputate ipsum rhoncus. Proin elit sem, venenatis vitae molestie id, posuere non justo. Morbi ac felis quis diam elementum tempus. Suspendisse efficitur consectetur sapien eleifend rhoncus. Aenean tempor leo pharetra, venenatis elit non, porta arcu. Maecenas tempus tellus sit amet iaculis molestie. Praesent id lobortis dolor. Nullam et ipsum ut leo accumsan vehicula vitae a augue. Integer vitae massa a tellus porta tincidunt ac sed tellus. Etiam ac semper lectus. Quisque et dui libero. Maecenas et lobortis nulla. Ut elementum egestas hendrerit.</p>',
};

const commentWithShortBody: CommentType = {
	...comment,
	body: "<p>It's still there FrankDeFord - and thanks, I will pass that on</p>",
};
const signedInStatus: SignedInWithCookies = { kind: 'SignedInWithCookies' };

export const SingleComment = () => (
	<TopPicks
		format={format}
		comments={[commentWithShortBody]}
		authStatus={signedInStatus}
		onPermalinkClick={() => {}}
		isClosedForComments={false}
	/>
);
SingleComment.storyName = 'Single Comment';

export const MulitColumn = () => (
	<TopPicks
		format={{
			...format,
			theme: Pillar.Culture,
		}}
		comments={[
			commentWithLongBody,
			commentWithShortBody,
			commentWithShortBody,
			commentWithShortBody,
		]}
		authStatus={signedInStatus}
		onPermalinkClick={() => {}}
		isClosedForComments={false}
	/>
);
MulitColumn.storyName = 'Mulitple Columns Comments';

export const SingleColumn = () => (
	<TopPicks
		format={{
			...format,
			theme: Pillar.Sport,
		}}
		comments={[
			commentWithLongBody,
			commentWithShortBody,
			commentWithShortBody,
			commentWithShortBody,
		]}
		authStatus={signedInStatus}
		onPermalinkClick={() => {}}
		isClosedForComments={false}
	/>
);
SingleColumn.storyName = 'Single Column Comments';
SingleColumn.story = {
	parameters: {
		viewport: { defaultViewport: 'phablet' },
	},
};
