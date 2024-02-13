import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { comment } from '../../../fixtures/manual/comment';
import type {
	CommentType,
	SignedInUser,
	TopLevelCommentType,
} from '../../lib/discussion';
import { mockedMessageID, mockRESTCalls } from '../../lib/mockRESTCalls';
import { error, ok } from '../../lib/result';
import { CommentContainer } from './CommentContainer';

mockRESTCalls();

const firstCommentResponse = comment.responses[0];

const commentWithReply = {
	...comment,
	responses: [firstCommentResponse],
};

const commentWithoutReply = {
	...comment,
	responses: [],
} satisfies TopLevelCommentType;

const commentResponseError = error<'NetworkError', number>('NetworkError');

const commentResponseSuccess = ok<'NetworkError', number>(
	Number(mockedMessageID),
);

const aUser: SignedInUser = {
	kind: 'Reader',
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
	onComment: () => Promise.resolve(commentResponseError),
	onReply: () => Promise.resolve(commentResponseSuccess),
	onRecommend: () => Promise.resolve(true),
	addUsername: () => Promise.resolve(ok(true)),
	reportAbuse: () => Promise.resolve(ok(true)),
};

describe('CommentContainer', () => {
	it('Post a comment to a root comment', async () => {
		const newCommentText = 'A brand new comment';

		// a workaround to emulating hooks outside of render
		let commentBeingRepliedTo:
			| TopLevelCommentType
			| CommentType
			| undefined = commentWithoutReply;
		const mockSetCommentBeingRepliedTo = jest.fn(
			(newCommentBeingRepliedTo?: TopLevelCommentType | CommentType) => {
				commentBeingRepliedTo = newCommentBeingRepliedTo;
			},
		);

		// https://stackoverflow.com/a/52335414
		Element.prototype.scrollIntoView = () => {};

		const { getByTestId, queryByText, getByText, rerender } = render(
			<CommentContainer
				shortUrl=""
				comment={commentWithoutReply}
				user={aUser}
				threads="collapsed"
				commentBeingRepliedTo={commentBeingRepliedTo}
				setCommentBeingRepliedTo={mockSetCommentBeingRepliedTo}
				isClosedForComments={false}
				mutes={[]}
				toggleMuteStatus={() => {}}
				onPermalinkClick={() => {}}
				error={''}
				setError={() => {}}
				pickError={''}
				setPickError={() => {}}
				userNameMissing={false}
				setUserNameMissing={() => {}}
				previewBody=""
				setPreviewBody={() => {}}
				reportAbuse={() => Promise.resolve(ok(true))}
				expandCommentReplies={(id, responses) => {
					if (commentBeingRepliedTo?.id !== id) return;
					if (!('responses' in commentBeingRepliedTo)) return;
					commentBeingRepliedTo.responses = responses;
				}}
			/>,
		);

		// expect Comment Form to be present
		expect(getByText('Post your comment')).toBeInTheDocument();

		// add comment to textarea
		fireEvent.change(getByTestId('comment-input'), {
			target: { value: newCommentText },
		});

		// Submit form
		fireEvent.click(getByText('Post your comment'));

		// make sure mock function has been called
		await waitFor(() =>
			expect(mockSetCommentBeingRepliedTo).toHaveBeenCalledTimes(1),
		);

		// rerender with updated commentBeingRepliedTo
		rerender(
			<CommentContainer
				shortUrl=""
				comment={commentWithoutReply}
				user={aUser}
				threads="collapsed"
				commentBeingRepliedTo={commentBeingRepliedTo}
				setCommentBeingRepliedTo={mockSetCommentBeingRepliedTo}
				isClosedForComments={false}
				mutes={[]}
				toggleMuteStatus={() => {}}
				onPermalinkClick={() => {}}
				error={''}
				setError={() => {}}
				pickError={''}
				setPickError={() => {}}
				userNameMissing={false}
				setUserNameMissing={() => {}}
				previewBody=""
				setPreviewBody={() => {}}
				reportAbuse={() => Promise.resolve(ok(true))}
				expandCommentReplies={() => {}}
			/>,
		);

		// make sure the new comment appears
		await waitFor(() => {
			expect(getByTestId(mockedMessageID)).toBeInTheDocument();
		});

		// make sure the comment form submit button does not appear anymore
		// note: we need to use queryByText or else we get an error
		const commentFormSubmitButton = queryByText('Post your comment');
		expect(commentFormSubmitButton).toBeNull();
	});

	it('Post a comment to a reply comment', async () => {
		const newCommentText = 'A brand new comment';

		// a workaround to emulating hooks outside of render
		let commentBeingRepliedTo: CommentType | undefined =
			firstCommentResponse;
		const mockSetCommentBeingRepliedTo = jest.fn(
			(newCommentBeingRepliedTo?: CommentType) => {
				commentBeingRepliedTo = newCommentBeingRepliedTo;
			},
		);

		// https://stackoverflow.com/a/52335414
		Element.prototype.scrollIntoView = () => {};

		const { getByTestId, queryByText, getByText, rerender } = render(
			<CommentContainer
				shortUrl=""
				comment={commentWithReply}
				user={aUser}
				threads="collapsed"
				commentBeingRepliedTo={commentBeingRepliedTo}
				setCommentBeingRepliedTo={mockSetCommentBeingRepliedTo}
				isClosedForComments={false}
				mutes={[]}
				toggleMuteStatus={() => {}}
				onPermalinkClick={() => {}}
				error={''}
				setError={() => {}}
				pickError={''}
				setPickError={() => {}}
				userNameMissing={false}
				setUserNameMissing={() => {}}
				previewBody=""
				setPreviewBody={() => {}}
				reportAbuse={() => Promise.resolve(ok(true))}
				expandCommentReplies={(id, responses) => {
					if (commentBeingRepliedTo?.id !== id) return;
					if (!('responses' in commentBeingRepliedTo)) return;
					commentBeingRepliedTo.responses = responses;
				}}
			/>,
		);

		// expect Comment Form to be present
		expect(getByText('Post your comment')).toBeInTheDocument();

		// add comment to textarea
		fireEvent.change(getByTestId('comment-input'), {
			target: { value: newCommentText },
		});

		// Submit form
		fireEvent.click(getByText('Post your comment'));

		// make sure mock function has been called
		await waitFor(() =>
			expect(mockSetCommentBeingRepliedTo).toHaveBeenCalledTimes(1),
		);

		// rerender with updated commentBeingRepliedTo
		rerender(
			<CommentContainer
				shortUrl=""
				comment={commentWithoutReply}
				user={aUser}
				threads="collapsed"
				commentBeingRepliedTo={commentBeingRepliedTo}
				setCommentBeingRepliedTo={mockSetCommentBeingRepliedTo}
				isClosedForComments={false}
				mutes={[]}
				toggleMuteStatus={() => {}}
				onPermalinkClick={() => {}}
				error={''}
				setError={() => {}}
				pickError={''}
				setPickError={() => {}}
				userNameMissing={false}
				setUserNameMissing={() => {}}
				previewBody=""
				setPreviewBody={() => {}}
				reportAbuse={() => Promise.resolve(ok(true))}
				expandCommentReplies={() => {}}
			/>,
		);

		// make sure the new comment appears
		await waitFor(() => {
			expect(getByTestId(mockedMessageID)).toBeInTheDocument();
		});

		// make sure the comment form submit button does not appear anymore
		// note: we need to use queryByText or else we get an error
		const commentFormSubmitButton = queryByText('Post your comment');
		expect(commentFormSubmitButton).toBeNull();
	});
});
