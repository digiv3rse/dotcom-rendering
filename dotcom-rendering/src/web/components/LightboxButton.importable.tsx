import { css } from '@emotion/react';
import { ArticleDisplay, log, storage } from '@guardian/libs';
import {
	from,
	neutral,
	space,
	visuallyHidden,
} from '@guardian/source-foundations';
import { SvgArrowExpand } from '@guardian/source-react-components';
import libDebounce from 'lodash.debounce';
import React, { useEffect } from 'react';
import screenfull from 'screenfull';
import type { RoleType } from '../../types/content';

type Props = {
	elementId: string;
	role: RoleType;
	format: ArticleFormat;
	isMainMedia?: boolean;
};

function decideSize(role: RoleType) {
	switch (role) {
		case 'halfWidth':
		case 'supporting': {
			return css`
				height: 32px;
				width: 32px;
			`;
		}
		case 'inline':
		case 'showcase':
		case 'immersive':
		default: {
			return css`
				height: 32px;
				width: 32px;
				${from.tablet} {
					height: 44px;
					width: 44px;
				}
			`;
		}
	}
}

function initialiseLightbox(lightbox: HTMLElement) {
	log('dotcom', '💡 Initialising lightbox');
	// Document selectors
	const lightboxButtons = document.querySelectorAll<HTMLButtonElement>(
		'button.open-lightbox',
	);
	const overlays =
		document.querySelectorAll<HTMLElement>('div.open-lightbox');

	// Lightbox selectors
	const nextButton = lightbox.querySelector<HTMLButtonElement>('button.next');
	const previousButton =
		lightbox.querySelector<HTMLButtonElement>('button.previous');
	const infoButton = lightbox.querySelector<HTMLButtonElement>('button.info');
	const closeButton =
		lightbox.querySelector<HTMLButtonElement>('button.close');
	const positionDisplay =
		lightbox.querySelector<HTMLElement>('nav .selected');
	const imageList = lightbox.querySelector<HTMLElement>('ul');
	const pictures = lightbox.querySelectorAll('li picture');
	const images = lightbox.querySelectorAll('li img');
	const captionLinks = lightbox.querySelectorAll('li aside a');

	try {
		if (storage.local.get('gu.prefs.lightbox-hideinfo') === true) {
			hideInfo();
		} else {
			showInfo();
		}
	} catch (error) {
		// Do nothing. Errors accessing local storage are common
	}

	// Functions

	/**
	 * Returns a list of all the html elements on the *active* page that can be tabbed to
	 *
	 * Any elements that are off screen, such as caption links for images that are not
	 * currently showing, are ignored
	 */
	function getTabableElements(): HTMLElement[] {
		function getElements(parent: HTMLElement): HTMLElement[] {
			return Array.from(
				parent.querySelectorAll(
					'button:not([disabled]), a:not([disabled]), input:not([disabled]), select:not([disabled])',
				),
			);
		}
		const currentPosition = getPosition();
		const currentPage = lightbox.querySelector<HTMLElement>(
			`li[data-index="${currentPosition}"]`,
		);
		const nav = lightbox.querySelector('nav');
		const elementsFromCaption = currentPage ? getElements(currentPage) : [];
		const elementsFromNav = nav ? getElements(nav) : [];
		if (lightbox.classList.contains('hide-info')) {
			// The caption is hidden
			return elementsFromNav;
		} else {
			return [...elementsFromCaption, ...elementsFromNav];
		}
	}

	function requestFullscreen() {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- it is needed
		if (screenfull.isEnabled) {
			return screenfull.request(lightbox);
		}
		return;
	}

	function exitFullscreen() {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- it is needed
		if (screenfull.isEnabled && screenfull.isFullscreen) {
			return screenfull.exit();
		}
		return;
	}

	function select(position: number): void {
		if (positionDisplay) {
			positionDisplay.innerHTML = position.toString();
		}
		if (window.location.hash !== `#img-${position}`) {
			// Update the url based on the fact we've selected (navigated
			// to) a new image
			window.history.replaceState({}, '', `#img-${position}`);
		}
		// Ensure the close button is always visible on the last slide
		if (position === images.length) {
			closeButton?.classList.add('reveal');
		} else {
			closeButton?.classList.remove('reveal');
		}
	}

	function pulseButton(button: HTMLButtonElement): void {
		button.classList.add('active');

		window.setTimeout(() => {
			button.classList.remove('active');
		}, 75);
	}

	function scrollTo(position: number): void {
		const liWidth = lightbox.querySelector('li')?.clientWidth;
		if (!imageList || !liWidth) return;
		switch (position) {
			case 0:
			case 1: {
				imageList.scrollLeft = 0;
				break;
			}
			default: {
				imageList.scrollLeft = (position - 1) * liWidth;
			}
		}
	}

	function getPosition(): number {
		const scrollPosition = imageList?.scrollLeft;
		const liWidth = lightbox.querySelector('li')?.clientWidth;
		if (liWidth && scrollPosition) {
			return Math.round(scrollPosition / liWidth) + 1;
		}
		return 1;
	}

	function getPreviousPosition(positionNow: number): number {
		if (positionNow === 1) {
			// Cycle around to the end
			return images.length;
		} else {
			return positionNow - 1;
		}
	}

	function getNextPosition(positionNow: number): number {
		if (positionNow === images.length) {
			// Cycle back to the start
			return 1;
		} else {
			return positionNow + 1;
		}
	}

	function loadAdjacentImages(currentPosition: number): void {
		function eagerLoad(position: number) {
			const allImages =
				lightbox.querySelectorAll<HTMLImageElement>('li img');
			const imgArray = Array.from(allImages);
			const imgElement = imgArray[position - 1];
			if (imgElement) imgElement.loading = 'eager';
		}
		const previousImage = getPreviousPosition(currentPosition);
		const nextImage = getNextPosition(currentPosition);
		eagerLoad(previousImage);
		eagerLoad(nextImage);
	}

	function goBack(): void {
		if (previousButton) pulseButton(previousButton);
		const positionNow = getPosition();
		const newPosition = getPreviousPosition(positionNow);
		select(newPosition);
		scrollTo(newPosition);
		loadAdjacentImages(newPosition);
	}

	function goForward(): void {
		if (nextButton) pulseButton(nextButton);
		const positionNow = getPosition();
		const newPosition = getNextPosition(positionNow);
		select(newPosition);
		scrollTo(newPosition);
		loadAdjacentImages(newPosition);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.ctrlKey || event.metaKey || event.altKey) return;
		switch (event.code) {
			case 'Tab': {
				event.preventDefault();
				const tabableElements = getTabableElements();
				const activeElement = tabableElements.find(
					(element) => element === document.activeElement,
				);
				const firstTabableElement = tabableElements[0];
				const lastTabableElement =
					tabableElements[tabableElements.length - 1];

				if (!activeElement) {
					// Start at the start
					firstTabableElement?.focus();
				} else {
					const currentPosition =
						tabableElements.indexOf(activeElement);
					const firstElementHasFocus = currentPosition === 0;
					const lastElementHasFocus =
						currentPosition === tabableElements.length - 1;

					if (event.shiftKey) {
						if (firstElementHasFocus) {
							lastTabableElement?.focus();
						} else {
							tabableElements[currentPosition - 1]?.focus();
						}
					} else {
						if (lastElementHasFocus) {
							firstTabableElement?.focus();
						} else {
							tabableElements[currentPosition + 1]?.focus();
						}
					}
				}

				break;
			}
			case 'ArrowLeft':
				goBack();
				break;
			case 'ArrowRight':
				goForward();
				break;
			case 'KeyI':
				toggleInfo();
				break;
			case 'KeyQ':
				void close();
				break;
			case 'ArrowUp':
				showInfo();
				break;
			case 'ArrowDown':
				hideInfo();
				break;
			case 'Escape':
				void close();
				break;
		}
	}

	let previouslyFocused: Element;
	async function open(position: number) {
		log('dotcom', '💡 Opening lightbox.');
		// Remember where we were so we can restore focus
		if (document.activeElement) previouslyFocused = document.activeElement;
		// We use this class to prevent the main page from scrolling
		document.documentElement.classList.add('lightbox-open');
		// Show lightbox
		lightbox.removeAttribute('hidden');
		// // Try to open the lightbox in fullscreen mode. This may fail
		try {
			await requestFullscreen();
		} catch {
			// Do nothing, requests to open fullscreen are just requests and can fail
		}
		// When opening the lightbox, if one doesn't exist already, add a history state referencing
		// the currently selected image. Doing this means the back action will take the reader back
		// to the article
		if (!window.location.hash.startsWith('#img-')) {
			window.history.pushState({}, '', `#img-${position}`);
		}
		// Now we have the index of the image that was clicked, show it
		// in the lightbox
		select(position);
		scrollTo(position);
		loadAdjacentImages(position);
		// We only want this listener active while the lightbox is open
		window.addEventListener('keydown', handleKeydown);
	}

	async function close(): Promise<void> {
		log('dotcom', '💡 Closing lightbox.');
		// Re-enable scrolling
		document.documentElement.classList.remove('lightbox-open');
		// The lightbox was closed by clicking the close button so we need
		// to exit fullscreen
		await exitFullscreen();
		// Restore focus
		// Okay, sure, it 👋 might not 👋 be an HTMLButtonElement but it *will* be
		// focusable because it came from activeElement
		(previouslyFocused as HTMLButtonElement).focus();
		// Hide lightbox
		lightbox.setAttribute('hidden', 'true');
		// When the lightbox is closed, remove any img hash has from the url
		if (window.location.hash.startsWith('#img-')) {
			history.replaceState(
				{},
				'',
				window.location.pathname + window.location.search,
			);
		}
		// Stop listening for keyboard shortcuts
		window.removeEventListener('keydown', handleKeydown);
	}

	function showInfo(): void {
		infoButton?.classList.add('active');
		lightbox.classList.remove('hide-info');
		try {
			storage.local.set('gu.prefs.lightbox-hideinfo', false);
		} catch (error) {
			// Do nothing. Errors accessing local storage are common
		}
	}

	function hideInfo(): void {
		infoButton?.classList.remove('active');
		lightbox.classList.add('hide-info');
		try {
			storage.local.set('gu.prefs.lightbox-hideinfo', true);
		} catch (error) {
			// Do nothing. Errors accessing local storage are common
		}
	}

	function toggleInfo(): void {
		if (lightbox.classList.contains('hide-info')) {
			showInfo();
		} else {
			hideInfo();
		}
	}

	// Event listeners
	lightboxButtons.forEach((button) => {
		button.addEventListener('click', () => {
			// Extract the element id for this image out of the button that was clicked on
			const elementId = button.dataset.elementId;
			// Find the image inside the lightbox and get its index
			const imageWrapper: HTMLLIElement | null = elementId
				? lightbox.querySelector(`li[data-element-id="${elementId}"]`)
				: null;
			const stringIndex: string = imageWrapper?.dataset.index ?? '1';
			const indexOfImageClicked = parseInt(stringIndex);
			void open(indexOfImageClicked);
		});
	});

	overlays.forEach((overlay) => {
		overlay.addEventListener('click', (event) => {
			(event.target as HTMLElement)
				.querySelector('button')
				?.dispatchEvent(new MouseEvent('click'));
		});
	});

	pictures.forEach((picture) => {
		picture.addEventListener('mousedown', (event) => {
			toggleInfo();
			// We want to maintain focus so halt all further actions
			event.preventDefault();
			event.stopPropagation();
		});
	});

	imageList?.addEventListener(
		'scroll',
		libDebounce(() => {
			const currentPosition = getPosition();
			select(currentPosition);
			loadAdjacentImages(currentPosition);
		}, 300),
	);

	closeButton?.addEventListener('click', close);
	previousButton?.addEventListener('click', goBack);
	nextButton?.addEventListener('click', goForward);
	infoButton?.addEventListener('click', toggleInfo);

	captionLinks.forEach((link) => {
		link.addEventListener('click', (event) => {
			// This prevents the event listener from this element's LI parent
			// from firing. That LI event listener would have tried to hide the
			// caption but the reader clicked a link inside the caption so they
			// want to navigate, not hide stuff, and if we did hide it it would
			// cause a weird flash
			event.stopPropagation();
		});
	});

	/**
	 * We listen for the fullscreenchange event here so that we can fire our
	 * close function in response to the reader closing fullscreen mode. Like
	 * this there's no need to press escape twice to exit the lightbox
	 */
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- it is needed
	if (screenfull.isEnabled) {
		screenfull.on('change', () => {
			if (screenfull.isFullscreen) {
				log('dotcom', `💡 entered fullscreen mode.`);
			} else {
				log('dotcom', `💡 leaving fullscreen mode.`);
				if (!lightbox.hasAttribute('hidden')) {
					// If lightbox is still showing then the escape key was probably pressed
					// which closes fullscreen mode but not the lightbox, so let's close it
					void close();
				}
			}
		});
	}

	/**
	 * popstate is fired when a user goes back or forward, either using buttons
	 * or the keyboard or via history.back() or history.forward()
	 *
	 * If this happens, and if the url has no img- hash, we close the lightbox.
	 * This means you can open the lightbox, navigate back, and the lightbox will
	 * be closed.
	 */
	window.addEventListener('popstate', () => {
		const hash = window.location.hash;
		if (!hash.startsWith('#img-')) {
			// There's no img hash so close the lightbox
			void close();
		} else {
			// The reader navigated to a url that does contain an img hash. If
			// the lightbox isn't already open, open it at that hash position.
			if (!lightbox.hasAttribute('open')) {
				const position = hash.substring(5);
				void open(parseInt(position));
			}
		}
	});
}

/**
 * This overlay makes it possible to click anywhere on an image and the lightbox
 * will hydrate/appear.
 *
 * How?
 * ----
 * ```html
 * <gu-island deferUntil="onInteraction">
 *   <ClickOverlay>
 *     <button>Open lightbox</button>
 *   </ClickOverlay>
 * </gu-island>
 * ```
 *
 * Both gu-island and ClickOverlay have click event listeners that will replay any
 * click event to their children using synthetic events. The gu-island listener is
 * set on page load which in turn triggers hydration for this file, adding event
 * listeners to the ClickOverlay and button.
 *
 * The flow is:
 *
 * 1) Page loads, gu-island has a click event listener set
 * 2) User clicks on the island (which wraps both button and overlay)
 * 3) This file is hydrated, setting listeners on both the ClickOverlay and the button
 * 4) gu-island fires a synthetic click event to the element originally clicked
 * 5) If that was ClickOverlay, another synthetic event is sent to the button
 * 6) If it was the button then the lightbox is opened
 *
 * Why?
 * ----
 * This approach means that it is possible for images to be clickable without the
 * requirement to hydrate images - we never want to serialize images into the page! It
 * also means we keep the feature where the lightbox code is only downloaded on
 * interaction.
 *
 * What about accessibility?
 * -------------------------
 * The child button element is still the primary method for opening
 * the lightbox and this is the element that we want assitive technologies like
 * screen readers to interact with. This overlay is intentionally hidden from
 * keyboards and screen readers and can be thought of as progressive enhancement
 * for mouse and touch users.
 *
 */
const ClickOverlay = ({ children }: { children: React.ReactNode }) => {
	return (
		<div
			css={css`
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
				cursor: pointer;
			`}
			className="open-lightbox"
		>
			{children}
		</div>
	);
};

export const LightboxButton = ({
	elementId,
	role,
	format,
	isMainMedia,
}: Props) => {
	useEffect(() => {
		/**
		 * We only want to run this code once so we first check if there are any other
		 * islands on the page that have already been hydrated (marked with gu-ready)
		 */
		const allIslands = document.querySelectorAll<HTMLElement>(
			'gu-island[name="LightboxButton"]',
		);
		const alreadyHydrated = Array.from(allIslands).find((island) => {
			// The island we're clicking on has already been marked as ready
			const isIslandClickedOn =
				island.querySelector('button')?.dataset.elementId === elementId;
			return !isIslandClickedOn && island.dataset.guReady;
		});
		if (alreadyHydrated) return;

		const lightbox = document.querySelector<HTMLElement>('#gu-lightbox');
		if (!lightbox) return;
		initialiseLightbox(lightbox);
	}, [elementId]);

	return (
		<ClickOverlay>
			<button
				data-element-id={elementId}
				type="button"
				className="open-lightbox"
				aria-haspopup="dialog"
				css={[
					css`
						position: absolute;
						right: 0;
						svg {
							margin-top: 4px;
							fill: ${neutral[100]};
						}
						margin: ${space[2]}px;
						border-radius: 50%;
						border: none;
						cursor: pointer;
						background-color: ${neutral[46]};
						/* Don't show the button over thumbnails; they're too small */
						opacity: ${role === 'thumbnail' ? '0' : '0.7'};
						:hover {
							filter: brightness(85%);
							opacity: 0.8;
						}
					`,
					decideSize(role),
					isMainMedia &&
						format.display === ArticleDisplay.Immersive &&
						visuallyHidden,
				]}
			>
				<SvgArrowExpand />
				<span
					css={css`
						${visuallyHidden}
					`}
				>
					View in fullscreen
				</span>
			</button>
		</ClickOverlay>
	);
};
