import type { SignedInWithCookies } from '../../lib/useAuthStatus';
import { RecommendationCount } from './RecommendationCount';

export default { title: 'Discussion/RecommendationCount' };

const signedInStatus: SignedInWithCookies = { kind: 'SignedInWithCookies' };

export const NeverRecomended = () => (
	<RecommendationCount
		commentId={123}
		initialCount={383}
		alreadyRecommended={false}
		authStatus={signedInStatus}
		userMadeComment={false}
		isClosedForComments={false}
	/>
);

export const AlreadyRecomended = () => (
	<RecommendationCount
		commentId={123}
		initialCount={83}
		alreadyRecommended={true}
		authStatus={signedInStatus}
		userMadeComment={false}
		isClosedForComments={false}
	/>
);

export const NotSignedIn = () => (
	<RecommendationCount
		commentId={123}
		initialCount={83}
		alreadyRecommended={false}
		userMadeComment={false}
		isClosedForComments={false}
	/>
);

export const OwnPost = () => (
	<RecommendationCount
		commentId={123}
		initialCount={83}
		alreadyRecommended={false}
		authStatus={signedInStatus}
		userMadeComment={true}
		isClosedForComments={false}
	/>
);