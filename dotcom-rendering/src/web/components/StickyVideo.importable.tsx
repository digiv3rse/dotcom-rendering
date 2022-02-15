import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getZIndex } from '../lib/getZIndex';
import { useStickyVideo } from '../lib/useStickyVideo';

interface Props {
	children: React.ReactNode;
}

const stuckStyles = css`
	@keyframes fade-in-up {
		from {
			transform: translateY(100%);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	height: 500px;
	position: fixed;
	bottom: 50px;
	right: 20px;
	width: 260px;
	height: 145px;
	z-index: ${getZIndex('sticky-video')};
	transform: translateY(100%);
	animation: fade-in-up 0.25s ease forwards;

	figcaption {
		display: none;
	}
`;

const unstuckStyles = css``;

export const StickyVideo = ({ children }: Props) => {
	const [stickyVideo, setStickyVideo] = useState(false);
	const [isIntersecting, setRef] = useStickyVideo({
		threshold: 0,
		debounce: true,
	});

	useEffect(() => {
		setStickyVideo(isIntersecting);
	}, [isIntersecting]);

	return (
		<div css={stickyVideo ? stuckStyles : unstuckStyles} ref={setRef}>
			{stickyVideo && (
				<button onClick={() => setStickyVideo(false)}>Unstick</button>
			)}
			{children}
		</div>
	);
};
