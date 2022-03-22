import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

import { joinUrl } from '@guardian/libs';
import { space } from '@guardian/source-foundations';
import { App as Comments } from '@guardian/discussion-rendering';
import { SignedInAs } from './SignedInAs';
import { Hide } from './Hide';
import { getCommentContext } from '../lib/getCommentContext';
import { useDiscussion } from '../lib/useDiscussion';
import { decidePalette } from '../lib/decidePalette';

export type Props = {
	format: ArticleFormat;
	discussionApiUrl: string;
	shortUrlId: string;
	discussionD2Uid: string;
	discussionApiClientHeader: string;
	enableDiscussionSwitch: boolean;
	user?: UserProfile;
};

const commentIdFromUrl = () => {
	if (typeof window === 'undefined') return;
	const { hash } = window.location;
	if (!hash) return;
	if (!hash.includes('comment')) return;
	if (!hash.split('-')[1]) return;
	return parseInt(hash.split('-')[1], 10);
};

export const Discussion = ({
	format,
	discussionApiUrl,
	shortUrlId,
	discussionD2Uid,
	discussionApiClientHeader,
	enableDiscussionSwitch,
	user,
}: Props) => {
	const [commentPage, setCommentPage] = useState<number>();
	const [commentPageSize, setCommentPageSize] = useState<25 | 50 | 100>();
	const [commentOrderBy, setCommentOrderBy] = useState<
		'newest' | 'oldest' | 'recommendations'
	>();
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [hashCommentId, setHashCommentId] = useState<number | undefined>(
		commentIdFromUrl(),
	);

	const { commentCount, isClosedForComments } = useDiscussion(
		joinUrl(discussionApiUrl, 'discussion', shortUrlId),
	);

	const palette = decidePalette(format);

	const hasCommentsHash =
		typeof window !== 'undefined' &&
		window.location &&
		window.location.hash === '#comments';

	const handlePermalink = (commentId: number) => {
		if (typeof window === 'undefined') return false;
		window.location.hash = `#comment-${commentId}`;
		// Put this comment id into the hashCommentId state which will
		// trigger an api call to get the comment context and then expand
		// and reload the discussion based on the resuts
		setHashCommentId(commentId);
		return false;
	};

	// Check the url to see if there is a comment hash, e.g. ...crisis#comment-139113120
	// If so, make a call to get the context of this comment so we know what page it is
	// on.
	useEffect(() => {
		if (hashCommentId) {
			getCommentContext(discussionApiUrl, hashCommentId)
				.then((context) => {
					setCommentPage(context.page);
					setCommentPageSize(context.pageSize);
					setCommentOrderBy(context.orderBy);
					setIsExpanded(true);
				})
				.catch((e) => console.error(`getCommentContext - error: ${e}`));
		}
	}, [discussionApiUrl, hashCommentId]);

	useEffect(() => {
		if (hasCommentsHash) {
			setIsExpanded(true);
		}
	}, [hasCommentsHash]);

	return (
		<>
			<Hide when="above" breakpoint="leftCol">
				<div
					data-cy="discussion"
					css={css`
						padding-bottom: ${space[2]}px;
					`}
				>
					<SignedInAs
						palette={palette}
						enableDiscussionSwitch={enableDiscussionSwitch}
						user={user}
						commentCount={commentCount}
						isClosedForComments={isClosedForComments}
					/>
				</div>
			</Hide>
			<Comments
				user={user}
				baseUrl={discussionApiUrl}
				pillar={format.theme}
				initialPage={commentPage}
				pageSizeOverride={commentPageSize}
				isClosedForComments={
					isClosedForComments || !enableDiscussionSwitch
				}
				orderByOverride={commentOrderBy}
				shortUrl={shortUrlId}
				additionalHeaders={{
					'D2-X-UID': discussionD2Uid,
					'GU-Client': discussionApiClientHeader,
				}}
				expanded={isExpanded}
				commentToScrollTo={hashCommentId}
				onPermalinkClick={handlePermalink}
				apiKey="dotcom-rendering"
			/>
		</>
	);
};
