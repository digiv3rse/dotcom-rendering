import { useAuthStatus } from '../lib/useAuthStatus';
import type { Props as DiscussionProps } from './Discussion';
import { Discussion } from './Discussion';
import { DiscussionWhenSignedIn } from './DiscussionWhenSignedIn';

/**
 * DiscussionContainer
 *
 * A wrapper component that decides if the user is signed in or not.
 *
 * If they
 * are, it renders DiscussionWhenSignedIn which includes an api call to fetch
 * the user profile.
 *
 * If not, it simply renders Discussion
 *
 * We use component composition like this here because you cannot call react
 * hooks conditionally and we're using a hook to make the fetch request
 *
 * Note. We allow the ...props pattern here because it makes sense when we're
 * just passing them through
 *
 */

export const DiscussionContainer = (props: DiscussionProps) => {
	const authStatus = useAuthStatus();
	const isSignedIn =
		authStatus.kind === 'SignedInWithOkta' ||
		authStatus.kind === 'SignedInWithCookies';
	if (isSignedIn) {
		return <DiscussionWhenSignedIn authStatus={authStatus} {...props} />;
	}

	return <Discussion {...props} />;
};
