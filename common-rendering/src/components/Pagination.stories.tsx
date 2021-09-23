import { css } from "@emotion/react";

import { Pagination } from "./Pagination";

export default {
	component: Pagination,
	title: "Common/Components/Pagination",
};

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
			padding: 20px;
		`}
	>
		{children}
	</div>
);

export const defaultStory = () => {
	return (
		<Container>
			<Pagination currentPage={1} totalPages={6} />
		</Container>
	);
};
defaultStory.story = { name: "Pagination Icons" };
