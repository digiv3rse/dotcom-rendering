import { ArticleDesign, ArticleDisplay, Pillar } from '@guardian/libs';
import { splitTheme } from '../../../.storybook/decorators/splitThemeDecorator';
import type { CommentType, SignedInUser } from '../../types/discussion';
import { Comment } from './Comment';

export default { title: 'Discussion/Comment' };

const commentData: CommentType = {
	id: 25487686,
	body: `<p>Beau Jos pizza in Idaho Springs is a great place for <a href="https://www.theguardian.com">mountain pizza pies</a>. Order one with extra thick crust and drizzle it with honey. Y'all can try the Challenge if you fancy, and sketch on your napkins so your art can join their walls. This was 15 years ago, but I hope it's still there! As for music, anything from Boulder's own Big Head Todd &amp; the Monsters - 'Broken Hearted Savior' is a good start, with 'Bittersweet' a good road track. I'm jealous!!!</p>`,
	date: '26 July 2013 4:13pm',
	isoDateTime: '2013-07-26T15:13:20Z',
	status: 'visible',
	webUrl: 'https://discussion.theguardian.com/comment-permalink/25487686',
	apiUrl: 'https://discussion.guardianapis.com/discussion-api/comment/25487686',
	numRecommends: 0,
	isHighlighted: false,
	userProfile: {
		userId: '2762428',
		displayName: 'FrankDeFord',
		webUrl: 'https://profile.theguardian.com/user/id/2762428',
		apiUrl: 'https://discussion.guardianapis.com/discussion-api/profile/2762428',
		avatar: 'https://avatar.guim.co.uk/user/2762428',
		secureAvatarUrl: 'https://avatar.guim.co.uk/user/2762428',
		badge: [],
	},
	responses: [],
	metaData: {
		commentCount: 2,
		staffCommenterCount: 1,
		editorsPickCount: 0,
		blockedCount: 0,
		responseCount: 1,
	},
};

const commentStaffData: CommentType = {
	...commentData,
	userProfile: {
		...commentData.userProfile,
		badge: [
			{
				name: 'Staff',
			},
		],
	},
};

const commentContributorData: CommentType = {
	...commentData,
	userProfile: {
		...commentData.userProfile,
		badge: [
			{
				name: 'Contributor',
			},
		],
	},
};

const blockedCommentData = {
	...commentData,
	status: 'blocked',
	body: "This comment was removed by a moderator because it didn't abide by our <a href='http://www.theguardian.com/community-standards'>community standards</a>. Replies may also be deleted. For more detail see <a href='http://www.guardian.co.uk/community-faqs'>our FAQs</a>.",
};

const replyCommentData: CommentType = {
	...commentData,
	responseTo: {
		displayName: 'ArtVandelay',
		commentApiUrl: '',
		isoDateTime: '',
		date: '',
		commentId: '123456',
		commentWebUrl: '',
	},
};

const longReplyCommentData: CommentType = {
	...commentData,
	responseTo: {
		displayName: 'ArtVandelayWithAVeryLongUserName',
		commentApiUrl: '',
		isoDateTime: '',
		date: '',
		commentId: '123456',
		commentWebUrl: '',
	},
};

const longBothReplyCommentData: CommentType = {
	...commentData,
	userProfile: {
		...commentData.userProfile,
		displayName: 'AVeryLongUserNameForThisUserToo',
	},
	responseTo: {
		displayName: 'ArtVandelayWithAVeryLongUserName',
		commentApiUrl: '',
		isoDateTime: '',
		date: '',
		commentId: '123456',
		commentWebUrl: '',
	},
};

const user: SignedInUser = {
	profile: {
		userId: 'abc123',
		displayName: 'Jane Smith',
		webUrl: '',
		apiUrl: '',
		avatar: '',
		secureAvatarUrl: '',
		badge: [],
		privateFields: {
			canPostComment: true,
			isPremoderated: false,
			hasCommented: true,
		},
	},
	authStatus: { kind: 'SignedInWithCookies' },
};

const staffUser: SignedInUser = {
	profile: {
		userId: 'abc123',
		displayName: 'Jane Smith',
		webUrl: '',
		apiUrl: '',
		avatar: '',
		secureAvatarUrl: '',
		badge: [{ name: 'Staff' }],
		privateFields: {
			canPostComment: true,
			isPremoderated: false,
			hasCommented: true,
		},
	},
	authStatus: { kind: 'SignedInWithCookies' },
};

const defaultFormat = {
	design: ArticleDesign.Standard,
	display: ArticleDisplay.Standard,
	theme: Pillar.News,
};

export const Root = () => (
	<Comment
		comment={commentData}
		format={defaultFormat}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
Root.storyName = 'A root comment on desktop view';
Root.story = {
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		chromatic: { viewports: [1300] },
	},
};
Root.decorators = [splitTheme([defaultFormat], { orientation: 'vertical' })];

export const RootMobile = () => (
	<Comment
		comment={commentData}
		format={{
			...defaultFormat,
			theme: Pillar.Sport,
		}}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isClosedForComments={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
RootMobile.storyName = 'A root comment on mobile view';
RootMobile.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
RootMobile.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Sport,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const ReplyComment = () => (
	<Comment
		comment={replyCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Lifestyle,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={true}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
ReplyComment.storyName = 'A reply on desktop view';
ReplyComment.story = {
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		chromatic: { viewports: [1300] },
	},
};
ReplyComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Lifestyle,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const MobileReply = () => (
	<Comment
		comment={replyCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Culture,
		}}
		setCommentBeingRepliedTo={() => {}}
		isReply={true}
		isClosedForComments={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
MobileReply.storyName = 'A reply on mobile view';
MobileReply.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
MobileReply.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Culture,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const LongMobileReply = () => (
	<Comment
		comment={longReplyCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Culture,
		}}
		setCommentBeingRepliedTo={() => {}}
		isReply={true}
		isClosedForComments={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
LongMobileReply.storyName = 'A long username reply on mobile view';
LongMobileReply.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
LongMobileReply.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Culture,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const LongBothMobileReply = () => (
	<Comment
		comment={longBothReplyCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Culture,
		}}
		setCommentBeingRepliedTo={() => {}}
		isReply={true}
		isClosedForComments={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
LongBothMobileReply.storyName = 'Both long usernames replying on mobile view';
LongBothMobileReply.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
LongBothMobileReply.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Culture,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const PickedComment = () => (
	<Comment
		comment={{
			...commentData,
			isHighlighted: true,
		}}
		format={defaultFormat}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
PickedComment.storyName = 'Picked Comment';
PickedComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Culture,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const StaffUserComment = () => (
	<Comment
		comment={commentStaffData}
		format={{
			...defaultFormat,
			theme: Pillar.Opinion,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
StaffUserComment.storyName = 'Staff User Comment';
StaffUserComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Opinion,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const ContributorUserComment = () => (
	<Comment
		comment={commentContributorData}
		format={{
			...defaultFormat,
			theme: Pillar.Opinion,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
ContributorUserComment.storyName = 'Contributor User Comment';
ContributorUserComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Opinion,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const PickedStaffUserComment = () => (
	<Comment
		comment={{
			...commentStaffData,
			isHighlighted: true,
		}}
		format={defaultFormat}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
PickedStaffUserComment.storyName = 'with staff and picked badges on desktop';
PickedStaffUserComment.story = {
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		chromatic: { viewports: [1300] },
	},
};
PickedStaffUserComment.decorators = [
	splitTheme([defaultFormat], { orientation: 'vertical' }),
];

export const PickedStaffUserCommentMobile = () => (
	<Comment
		comment={{
			...commentStaffData,
			isHighlighted: true,
		}}
		format={{
			...defaultFormat,
			theme: Pillar.Sport,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
PickedStaffUserCommentMobile.storyName =
	'with staff and picked badges on mobile';
PickedStaffUserCommentMobile.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
PickedStaffUserCommentMobile.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Sport,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const ContributorUserCommentDesktop = () => (
	<Comment
		comment={{
			...commentContributorData,
			isHighlighted: true,
		}}
		format={defaultFormat}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
ContributorUserCommentDesktop.storyName =
	'with contributor and picked badges on desktop';
ContributorUserCommentDesktop.story = {
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		chromatic: { viewports: [1300] },
	},
};
ContributorUserCommentDesktop.decorators = [
	splitTheme([defaultFormat], { orientation: 'vertical' }),
];

export const ContributorUserCommentMobile = () => (
	<Comment
		comment={{
			...commentContributorData,
			isHighlighted: true,
		}}
		format={{
			...defaultFormat,
			theme: Pillar.Sport,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
ContributorUserCommentMobile.storyName =
	'with contributor and picked badges on mobile';
ContributorUserCommentMobile.story = {
	parameters: {
		viewport: { defaultViewport: 'mobileMedium' },
		chromatic: { viewports: [375] },
	},
};
ContributorUserCommentMobile.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Sport,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const LoggedInAsModerator = () => (
	<Comment
		comment={commentData}
		format={{
			...defaultFormat,
			theme: Pillar.Lifestyle,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		user={staffUser}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
LoggedInAsModerator.storyName = 'Logged in as moderator';
LoggedInAsModerator.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Lifestyle,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const LoggedInAsUser = () => (
	<Comment
		comment={commentData}
		format={{
			...defaultFormat,
			theme: Pillar.Lifestyle,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		user={user}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
LoggedInAsUser.storyName = 'Logged in as normal user';
LoggedInAsUser.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Lifestyle,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const BlockedComment = () => (
	<Comment
		comment={blockedCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Culture,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
BlockedComment.storyName = 'Blocked comment';
BlockedComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Culture,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const MutedComment = () => (
	<Comment
		comment={blockedCommentData}
		format={{
			...defaultFormat,
			theme: Pillar.Sport,
		}}
		isClosedForComments={false}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={true}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
MutedComment.storyName = 'Muted comment';
MutedComment.decorators = [
	splitTheme(
		[
			{
				...defaultFormat,
				theme: Pillar.Sport,
			},
		],
		{ orientation: 'vertical' },
	),
];

export const ClosedForComments = () => (
	<Comment
		comment={commentData}
		format={defaultFormat}
		isClosedForComments={true}
		setCommentBeingRepliedTo={() => {}}
		isReply={false}
		isMuted={false}
		toggleMuteStatus={() => {}}
		onPermalinkClick={() => {}}
	/>
);
ClosedForComments.storyName = 'A closed comment on desktop view';
ClosedForComments.story = {
	parameters: {
		viewport: { defaultViewport: 'desktop' },
		chromatic: { viewports: [1300] },
	},
};
ClosedForComments.decorators = [
	splitTheme([defaultFormat], { orientation: 'vertical' }),
];
