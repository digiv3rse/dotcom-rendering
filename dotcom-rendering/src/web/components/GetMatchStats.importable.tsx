import { useApi } from '../lib/useApi';

import { Placeholder } from './Placeholder';

import { MatchStats } from './MatchStats';

type Props = {
	matchUrl: string;
	format: ArticleFormat;
};

const Loading = () => <Placeholder height={800} />;

export const GetMatchStats = ({ matchUrl, format }: Props) => {
	const { data, error, loading } = useApi<{
		id: string;
		homeTeam: TeamType;
		awayTeam: TeamType;
	}>(matchUrl);

	if (loading) return <Loading />;
	if (error) {
		// Send the error to Sentry and then prevent the element from rendering
		window.guardian.modules.sentry.reportError(error, 'match=stats');

		return null;
	}
	if (data) {
		return (
			<MatchStats
				home={data.homeTeam}
				away={data.awayTeam}
				format={format}
			/>
		);
	}

	return null;
};
