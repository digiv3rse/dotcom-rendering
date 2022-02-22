// ----- Imports ----- //

import { background } from '@guardian/common-rendering/src/editorialPalette';
import {
	Column,
	Columns,
	Container,
	Hide,
} from '@guardian/source-react-components';
import Headline from 'components/headline';
import Standfirst from 'components/standfirst';
import type { DeadBlog, LiveBlog } from 'item';
import { getFormat } from 'item';
import type { FC } from 'react';
import LiveDateline from './liveDateline';
import Series from './series';

// ----- Component ----- //

interface Props {
	item: LiveBlog | DeadBlog;
}

const LiveblogHeader: FC<Props> = ({ item }) => {
	const format = getFormat(item);

	return (
		<header>
			<Container
				element="div"
				backgroundColor={background.headline(format)}
			>
				<Columns collapseUntil="desktop">
					<Column span={3}>
						<Series item={item} />
					</Column>
					<Column span={8}>
						<Headline item={item} />
					</Column>
				</Columns>
			</Container>
			<Container
				element="div"
				backgroundColor={background.standfirst(format)}
			>
				<Columns collapseUntil="desktop">
					<Column span={3}>
						<Hide below="desktop">
							<LiveDateline
								date={item.publishDate}
								format={format}
							/>
						</Hide>
					</Column>
					<Column span={8}>
						<Standfirst item={item} />
					</Column>
				</Columns>
			</Container>
		</header>
	);
};

// ----- Exports ----- //

export default LiveblogHeader;
