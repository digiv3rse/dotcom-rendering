import { ArticleDesign, ArticleDisplay, ArticlePillar } from '@guardian/libs';
import { decideDesign } from './decideDesign';
import { decideTheme } from './decideTheme';
import { decideDisplay } from './decideDisplay';
import { decidePalette } from './decidePalette';

export const decideTrail = (trail: CAPITrailType): TrailType => {
	const format: ArticleFormat = trail.format
		? {
				display: decideDisplay(trail.format),
				theme: decideTheme(trail.format),
				design: decideDesign(trail.format),
		  }
		: {
				display: ArticleDisplay.Standard,
				theme: ArticlePillar.News,
				design: ArticleDesign.Standard,
		  };

	const palette = decidePalette(format);

	return {
		...trail,
		format,
		palette,
	};
};
