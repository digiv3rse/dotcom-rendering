import { joinUrl } from '@guardian/libs';
import type {
	AdditionalHeadersType,
	CommentResponse,
	CommentType,
	DiscussionOptions,
	DiscussionResponse,
	OrderByType,
	ThreadsType,
	UserNameResponse,
} from '../discussionTypes';

const options = {
	// Defaults
	baseUrl: 'https://discussion.theguardian.com/discussion-api',
	apiKey: 'discussion-rendering',
	headers: {},
	idApiUrl: 'https://idapi.theguardian.com',
};

const defaultParams = {
	'api-key': options.apiKey,
};

export const initialiseApi = ({
	baseUrl,
	additionalHeaders,
	apiKey,
	idApiUrl,
}: {
	baseUrl: string;
	additionalHeaders: AdditionalHeadersType;
	apiKey: string;
	idApiUrl: string;
}) => {
	options.baseUrl = baseUrl || options.baseUrl;
	options.headers = additionalHeaders;
	options.apiKey = apiKey || options.apiKey;
	options.idApiUrl = idApiUrl || options.idApiUrl;

	defaultParams['api-key'] = options.apiKey;
};

const objAsParams = (obj: any): string => {
	const params = Object.keys(obj)
		.map((key) => {
			// TODO: Refactor this for better typesafety. See https://github.com/guardian/dotcom-rendering/pull/8057/commits/da4667399d4a7726589f1944ac60380f1f3f36e1
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/restrict-template-expressions -- type issues here cannot be avoided with this implementation
			return `${key}=${obj[key]}`;
		})
		.join('&');

	return '?' + params;
};

//todo: figure out the different return types and consider error handling
export const getDiscussion = (
	shortUrl: string,
	opts: {
		orderBy: OrderByType;
		pageSize: number;
		threads: ThreadsType;
		page: number;
	},
): Promise<DiscussionResponse | undefined> => {
	const apiOpts: DiscussionOptions = {
		...defaultParams,
		...{
			// Frontend uses the 'recommendations' key to store this options but the api expects
			// 'mostRecommended' so we have to map here to support both
			orderBy:
				opts.orderBy === 'recommendations'
					? 'mostRecommended'
					: opts.orderBy,
			pageSize: opts.pageSize,
			displayThreaded: opts.threads !== 'unthreaded',
			maxResponses: opts.threads === 'collapsed' ? 3 : 100,
			page: opts.page,
		},
	};
	const params = objAsParams(apiOpts);

	const url = joinUrl(options.baseUrl, 'discussion', shortUrl) + params;

	return fetch(url, {
		headers: {
			...options.headers,
		},
	})
		.then((resp) => resp.json())
		.then((json) => {
			if (
				// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
				json.errorCode === 'DISCUSSION_ONLY_AVAILABLE_IN_LINEAR_FORMAT'
			) {
				// We need force a refetch with unthreaded set, as we don't know
				// that this discussion is only available in linear format until
				// we get the response to tell us
				return getDiscussion(shortUrl, {
					...opts,
					...{ threads: 'unthreaded' },
				});
			}
			return json;
		})
		.catch((error) => console.error(`Error fetching ${url}`, error));
};

export const preview = (body: string): Promise<string> => {
	const url =
		joinUrl(options.baseUrl, 'comment/preview') +
		objAsParams(defaultParams);
	const data = new URLSearchParams();
	data.append('body', body);

	return (
		fetch(url, {
			method: 'POST',
			body: data.toString(),
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				...options.headers,
			},
		})
			.then((resp) => resp.json())
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			.then((json) => json.commentBody)
			.catch((error) => console.error(`Error fetching ${url}`, error))
	);
};

export const comment = (
	shortUrl: string,
	body: string,
): Promise<CommentResponse> => {
	const url =
		joinUrl(options.baseUrl, 'discussion', shortUrl, 'comment') +
		objAsParams(defaultParams);
	const data = new URLSearchParams();
	data.append('body', body);

	return fetch(url, {
		method: 'POST',
		body: data.toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			...options.headers,
		},
		credentials: 'include',
	}).then((resp) => resp.json());
};

export const reply = (
	shortUrl: string,
	body: string,
	parentCommentId: number,
): Promise<CommentResponse> => {
	const url =
		joinUrl(
			options.baseUrl,
			'discussion',
			shortUrl,
			'comment',
			parentCommentId.toString(),
			'reply',
		) + objAsParams(defaultParams);
	const data = new URLSearchParams();
	data.append('body', body);

	return fetch(url, {
		method: 'POST',
		body: data.toString(),
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			...options.headers,
		},
		credentials: 'include',
	}).then((resp) => resp.json());
};

//todo: come back and parse the response properly and set a proper return type for the error case
export const getPicks = (
	shortUrl: string,
): Promise<CommentType[] | undefined> => {
	const url =
		joinUrl(options.baseUrl, 'discussion', shortUrl, 'topcomments') +
		objAsParams(defaultParams);

	return (
		fetch(url, {
			headers: {
				...options.headers,
			},
		})
			.then((resp) => resp.json())
			// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
			.then((json) => json.discussion.comments)
			.catch((error) => console.error(`Error fetching ${url}`, error))
	);
};

//todo - at some point in the future: would be nice to have a signed in with user, signed in anonymous and signed out options
export const reportAbuse = ({
	commentId,
	categoryId,
	email,
	reason,
}: {
	commentId: number;
	categoryId: number;
	reason?: string;
	email?: string;
}): Promise<CommentResponse> => {
	const url =
		joinUrl(
			options.baseUrl,
			'comment',
			commentId.toString(),
			'reportAbuse',
		) + objAsParams(defaultParams);

	const data = new URLSearchParams();
	data.append('categoryId', categoryId.toString());
	email && data.append('email', email.toString());
	reason && data.append('reason', reason);

	return fetch(url, {
		method: 'POST',
		body: data.toString(),
		credentials: 'include',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			...options.headers,
		},
	}).then((resp) => resp.json());
};

export const recommend = (commentId: number): Promise<boolean> => {
	const url =
		joinUrl(options.baseUrl, 'comment', commentId.toString(), 'recommend') +
		objAsParams(defaultParams);

	return fetch(url, {
		method: 'POST',
		credentials: 'include',
		headers: {
			...options.headers,
		},
	}).then((resp) => resp.ok);
};

//todo: adjust this when the endpoint is ready
export const addUserName = (userName: string): Promise<UserNameResponse> => {
	const url = options.idApiUrl + `/user/me` + objAsParams(defaultParams);

	return fetch(url, {
		method: 'POST',
		credentials: 'include',
		body: JSON.stringify({
			publicFields: {
				username: userName,
				displayName: userName,
			},
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((resp) => resp.json())
		.catch((error) => console.error(`Error fetching ${url}`, error));
};

export const pickComment = (commentId: number): Promise<CommentResponse> => {
	const url =
		joinUrl(options.baseUrl, 'comment', commentId.toString(), 'highlight') +
		objAsParams(defaultParams);

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			...options.headers,
		},
		credentials: 'include',
	})
		.then((resp) => resp.json())
		.catch((error) => console.error(`Error fetching ${url}`, error));
};

export const unPickComment = (commentId: number): Promise<CommentResponse> => {
	const url =
		joinUrl(
			options.baseUrl,
			'comment',
			commentId.toString(),
			'unhighlight',
		) + objAsParams(defaultParams);

	return fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			...options.headers,
		},
		credentials: 'include',
	})
		.then((resp) => resp.json())
		.catch((error) => console.error(`Error fetching ${url}`, error));
};

export const getMoreResponses = (
	commentId: number,
): Promise<{
	status: 'ok' | 'error';
	comment: CommentType;
}> => {
	const url =
		joinUrl(options.baseUrl, 'comment', commentId.toString()) +
		objAsParams({
			...defaultParams,
			...{
				displayThreaded: true,
				displayResponses: true,
			},
		});

	return fetch(url, {
		headers: {
			...options.headers,
		},
	})
		.then((resp) => resp.json())
		.catch((error) => console.error(`Error fetching ${url}`, error));
};
