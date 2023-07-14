import { css } from '@emotion/react';
import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { AudioAtom } from './AudioAtom';

export default {
	title: 'Components/AudioAtom',
	component: AudioAtom,
};

export const SportStory = (): JSX.Element => {
	return (
		<div
			css={css`
				width: 700px;
				padding: 15px;
			`}
		>
			<AudioAtom
				id="d6d509cf-ca10-407f-8913-e16a3712f415"
				trackUrl="https://audio.guim.co.uk/2020/05/05-61553-gnl.fw.200505.jf.ch7DW.mp3"
				kicker="Football Weekly Extra Extra"
				title="Q&A and Detective Wilson"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Sport,
				}}
				duration={849}
			/>
		</div>
	);
};

export const NewsStory = (): JSX.Element => {
	return (
		<div
			css={css`
				width: 700px;
				padding: 15px;
			`}
		>
			<AudioAtom
				id="d6d509cf-ca10-407f-8913-e16a3712f415"
				trackUrl="https://audio.guim.co.uk/2020/05/05-61553-gnl.fw.200505.jf.ch7DW.mp3"
				kicker="Football Weekly Extra Extra"
				title="Q&A and Detective Wilson"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.News,
				}}
				duration={849}
			/>
		</div>
	);
};

export const CultureStory = (): JSX.Element => {
	return (
		<div
			css={css`
				width: 700px;
				padding: 15px;
			`}
		>
			<AudioAtom
				id="d6d509cf-ca10-407f-8913-e16a3712f415"
				trackUrl="https://audio.guim.co.uk/2020/05/05-61553-gnl.fw.200505.jf.ch7DW.mp3"
				kicker="Football Weekly Extra Extra"
				title="Q&A and Detective Wilson"
				format={{
					display: ArticleDisplay.Standard,
					design: ArticleDesign.Standard,
					theme: ArticlePillar.Culture,
				}}
				duration={849}
			/>
		</div>
	);
};
