import { disableCMP } from '../../lib/disableCMP';
import { setLocalBaseUrl } from '../../lib/setLocalBaseUrl.js';
import { Standard } from '../../../fixtures/generated/articles/Standard';
/* eslint-disable no-undef */
/* eslint-disable func-names */

describe('Sign In Gate Tests', function () {
	beforeEach(function () {
		setLocalBaseUrl();
	});

	const setArticleCount = (n) => {
		// set article count for today to be n
		localStorage.setItem(
			'gu.history.dailyArticleCount',
			JSON.stringify({
				value: [
					{
						day: Math.floor(Date.now() / 86400000),
						count: n,
					},
				],
			}),
		);
	};

	const setMvtCookie = (str) => {
		cy.setCookie('GU_mvt_id', str, {
			log: true,
		});
	};

	const setGuCOCompleteCookie = (userType, productType) => {
		cy.setCookie(
			'GU_CO_COMPLETE',
			encodeURIComponent(
				`{"userType":"${userType}","product":"${productType}"}`,
			),
		);
	};
	// helper method over the cypress visit method to avoid having to repeat the same url by setting a default
	// can override the parameter if required
	const visitArticle = (
		url = 'https://www.theguardian.com/games/2018/aug/23/nier-automata-yoko-taro-interview',
	) => {
		cy.visit(`/Article/${url}`);
	};

	const postArticle = ({ switchOverride } = {}) => {
		const articleJson = {
			...Standard,
			config: {
				...Standard.config,
				switches: {
					...Standard.switches,
					...switchOverride,
				},
			},
		};
		cy.visit(`/Article`, {
			method: 'POST',
			body: JSON.stringify(articleJson),
			headers: {
				'Content-Type': 'application/json',
			},
		});
	};
	// as the sign in gate is lazy loaded, we need to scroll to the rough position where it
	// will be inserted to make it visible
	// can override position if required
	const scrollToGateForLazyLoading = (roughPosition = 1000) => {
		cy.scrollTo(0, roughPosition, { duration: 500 });
	};

	// we call visit and scroll for most test, so this wrapper combines the two
	// while preserving the ability to set the parameters if required
	const visitArticleAndScrollToGateForLazyLoad = ({
		url,
		roughPosition,
	} = {}) => {
		visitArticle(url);
		scrollToGateForLazyLoading(roughPosition);
	};

	const postArticleAndScrollToGateForLazyLoad = ({
		roughPosition,
		switchOverride,
	} = {}) => {
		postArticle({ switchOverride });
		scrollToGateForLazyLoading(roughPosition);
	};

	describe('SignInGateMain', function () {
		beforeEach(function () {
			disableCMP();
			// sign in gate main runs from 0-900000 MVT IDs, so 500 forces user into test
			setMvtCookie('500000');

			// set article count to be min number to view gate
			setArticleCount(3);
		});

		it('should load the sign in gate', function () {
			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
		});

		it('should not load the sign in gate if the user has not read at least 3 article in a day', function () {
			setArticleCount(1);

			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should not load the sign in gate if the user is signed in', function (done) {
			// use GU_U cookie to determine if user is signed in
			cy.setCookie(
				'GU_U',
				'MCwCFHbDHWevL_GqgH0CcbeDWp4N9kR5AhQ2lD3zMjjbKJAgC7FUDtc18Ac8BA',
				{ log: true },
			);

			visitArticleAndScrollToGateForLazyLoad();

			// when using GU_U cookie, there is an issue with the commercial.dcr.js bundle
			// causing a URI Malformed error in cypress
			// we use this uncaught exception in this test to catch this and continue the rest of the test
			cy.on('uncaught:exception', () => {
				done();
				return false;
			});

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should not load the sign in gate if the user has already dismissed the gate', function () {
			localStorage.setItem(
				'gu.prefs.sign-in-gate',
				`{
                    "value": {
                        "SignInGateMain-main-variant-4": "2020-07-22T08:25:05.567Z",
                        "gate-dismissed-count-SignInGateMain-main-variant-4": 6
                    }
                }`,
			);

			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should not load the sign in gate if the article is not a valid section (membership)', function () {
			visitArticleAndScrollToGateForLazyLoad({
				url: 'https://www.theguardian.com/membership/2018/nov/15/support-guardian-readers-future-journalism',
			});

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should not load the sign in gate if the article is a paid article', function () {
			visitArticleAndScrollToGateForLazyLoad({
				url: 'https://www.theguardian.com/defining-moment/2016/jun/29/challenges-opportunities-life-coach-goals-empower-proactive',
			});

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should not load the sign in gate on a device with an ios9 user agent string', function () {
			// can't use visitArticleAndScrollToGateForLazyLoad for this method as overriding user agent
			cy.visit(
				'/Article/https://www.theguardian.com/games/2018/aug/23/nier-automata-yoko-taro-interview',
				{
					onBeforeLoad: (win) => {
						Object.defineProperty(win.navigator, 'userAgent', {
							value: 'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.17 (KHTML, like Gecko) Version/8.0 Mobile/13A175 Safari/600.1.4',
						});
					},
				},
			);
			scrollToGateForLazyLoading();

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('should remove gate when the dismiss button is clicked', function () {
			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('be.visible');

			cy.get('[data-cy=sign-in-gate-main_dismiss]').click();

			cy.get('[data-cy=sign-in-gate-main]').should('not.exist');
		});

		it('register button should contain profile.theguardian.com href', function () {
			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('be.visible');

			cy.get('[data-cy=sign-in-gate-main_register]')
				.invoke('attr', 'href')
				.should('contains', 'profile.theguardian.com');
		});

		it('sign in link should contain profile.theguardian.com href', function () {
			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('be.visible');

			cy.get('[data-cy=sign-in-gate-main_signin]')
				.invoke('attr', 'href')
				.should('contains', 'profile.theguardian.com');
		});

		it('should show cmp ui when privacy settings link is clicked', function () {
			visitArticleAndScrollToGateForLazyLoad();

			cy.get('[data-cy=sign-in-gate-main]').should('be.visible');

			cy.get('[data-cy=sign-in-gate-main_privacy]').click();

			cy.contains('privacy settings');
		});

		describe('Sign in gate should personalise based on the GU_CO_COMPLETE cookie', function () {
			it('should show the main sign in gate if GU_CO_COMPLETE if not present', function () {
				postArticleAndScrollToGateForLazyLoad({
					switchOverride: {
						personaliseSignInGateAfterCheckout: true,
					},
				});

				cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
				cy.get('[data-cy=sign-in-gate-main]').contains(
					'You need to register to keep reading',
				);
				cy.get('[data-cy=sign-in-gate-main]').contains(
					'It’s still free to read – this is not a paywall',
				);
				cy.get('[data-cy=sign-in-gate-main]').contains(
					'We’re committed to keeping our quality reporting open.',
				);
				cy.get('[data-cy=sign-in-gate-main_register]').contains(
					'Register for free',
				);
			});

			it('should show the main sign in gate if GU_CO_COMPLETE is present but flag is false', function () {
				setGuCOCompleteCookie('new', 'SupporterPlus');

				postArticleAndScrollToGateForLazyLoad({
					switchOverride: {
						personaliseSignInGateAfterCheckout: false,
					},
				});

				cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
				cy.get('[data-cy=sign-in-gate-main]').contains(
					'You need to register to keep reading',
				);
				cy.get('[data-cy=sign-in-gate-main_register]')
					.should('have.attr', 'href')
					.and('contains', '/signin?returnUrl=')
					.and('match', /componentId%3Dmain_variant_\d/)
					.and('not.contains', 'personalised_new_SupporterPlus');
			});

			describe('Sign in gate should show personalised copy if GU_CO_COMPLETE is present', function () {
				// HEADER TEXT
				const SUBSCRIPTION_HEADER = 'Thank you for subscribing';
				const SUPPORTER_HEADER = 'Thank you for your support';

				// SUBHEADER TEXT
				const SIGN_IN_PROMPT =
					'Remember to sign in for a better experience.';

				// BODY TEXT
				const SIGN_IN_INCENTIVES_DIGITAL = [
					'Supporter rewards – unlock the benefits of your support',
					'Incisive analysis and original reporting direct to your inbox, with our newsletters',
					'Get involved in the discussion – comment on stories',
				];

				const SIGN_IN_INCENTIVES_NON_DIGITAL = [
					'Fewer interruptions',
					'Incisive analysis and original reporting direct to your inbox, with our newsletters',
					'Get involved in the discussion – comment on stories',
				];
				// BUTTON TEXT
				const COMPLETE_REGISTRATION_BUTTON = 'Complete registration';
				const SIGN_IN_BUTTON = 'Sign in';

				it('user is new and has a digital subscription', function () {
					setGuCOCompleteCookie('new', 'SupporterPlus');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUBSCRIPTION_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						COMPLETE_REGISTRATION_BUTTON,
					);
					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/register?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_new_SupporterPlus/,
						);
				});

				it('user is new and has a paper subscription', function () {
					setGuCOCompleteCookie('guest', 'Paper');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUBSCRIPTION_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_NON_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						COMPLETE_REGISTRATION_BUTTON,
					);
					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/register?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_guest_Paper/,
						);
				});

				it('user is new and is a contributor', function () {
					setGuCOCompleteCookie('new', 'Contribution');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUPPORTER_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_NON_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						COMPLETE_REGISTRATION_BUTTON,
					);

					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/register?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_new_Contribution/,
						);
				});

				it('user is existing and has a digital subscription', function () {
					setGuCOCompleteCookie('current', 'SupporterPlus');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUBSCRIPTION_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						SIGN_IN_BUTTON,
					);
					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/signin?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_current_SupporterPlus/,
						);
				});

				it('user is existing and has a paper subscription', function () {
					setGuCOCompleteCookie('current', 'Paper');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUBSCRIPTION_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_NON_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						SIGN_IN_BUTTON,
					);
					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/signin?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_current_Paper/,
						);
				});

				it('user is existing and is a contributor', function () {
					setGuCOCompleteCookie('current', 'Contribution');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SUPPORTER_HEADER,
					);
					cy.get('[data-cy=sign-in-gate-main]').contains(
						SIGN_IN_PROMPT,
					);
					SIGN_IN_INCENTIVES_NON_DIGITAL.forEach((item) => {
						cy.get('[data-cy=sign-in-gate-main]').contains(item);
					});
					cy.get('[data-cy=sign-in-gate-main_register]').contains(
						SIGN_IN_BUTTON,
					);

					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/signin?returnUrl=')
						.and(
							'match',
							/componentId%3Dmain_variant_\d_personalised_current_Contribution/,
						);
				});
			});

			describe('GU_CO_COMPLETE is present, with invalid contents should show the main sign in gate', function () {
				it('invalid userType', function () {
					setGuCOCompleteCookie('invalid', 'Contribution');

					postArticleAndScrollToGateForLazyLoad({
						switchOverride: {
							personaliseSignInGateAfterCheckout: true,
						},
					});

					cy.get('[data-cy=sign-in-gate-main]').should('be.visible');
					cy.get('[data-cy=sign-in-gate-main]').contains(
						'You need to register to keep reading',
					);
					cy.get('[data-cy=sign-in-gate-main_register]')
						.should('have.attr', 'href')
						.and('contains', '/signin?returnUrl=')
						.and(
							'not.match',
							/componentId%3Dmain_variant_\d_personalised/,
						);
				});
			});
		});
	});
});
