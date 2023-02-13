import { decideDesign } from './decideDesign';
import { decideDisplay } from './decideDisplay';
import { decideTheme } from './decideTheme';

export const decideFormat = (format: Partial<FEFormat>): ArticleFormat => ({
	display: decideDisplay(format),
	theme: decideTheme(format),
	design: decideDesign(format),
});
