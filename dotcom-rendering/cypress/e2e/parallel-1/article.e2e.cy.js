import { articles, AMPArticles } from '../../lib/articles.js';
import { disableCMP } from '../../lib/disableCMP.js';
import { setUrlFragment } from '../../lib/setUrlFragment.js';
import { setLocalBaseUrl } from '../../lib/setLocalBaseUrl.js';
import { mockApi } from '../../lib/mocks';

describe('E2E Page rendering', function () {
	beforeEach(function () {
		disableCMP();
		setLocalBaseUrl();
	});

	describe('for WEB', function () {
		it('It should load an article and make the expected ajax calls', function () {
			const url = setUrlFragment(
				'https://www.theguardian.com/commentisfree/2019/oct/16/impostor-syndrome-class-unfairness',
				{
					'ab-CuratedContainerTest2': 'control',
				},
			);
			cy.visit(`/Article/${url}`);
			const roughLoadPositionOfMostView = 1400;
			cy.scrollTo(0, roughLoadPositionOfMostView, { duration: 500 });
			cy.contains('Lifestyle');

			cy.intercept('GET', '**/most-read-geo**', (req) => {
				req.reply((res) => {
					expect(res.body).to.have.property('heading');
					expect(res.statusCode).to.be.equal(200);
				});
			});
			cy.contains('Most viewed');

			cy.scrollTo('bottom', { duration: 500 });

			cy.intercept('POST', '/sharecount/**', (req) => {
				req.reply((res) => {
					expect(res.statusCode).to.be.equal(200);
					expect(res.body).to.have.property('path');
					expect(res.body).to.have.property('refreshStatus');
					expect(res.body)
						.to.have.property('share_count')
						.that.is.a('number');
				});
			});

			cy.intercept('GET', '/embed/card/**', (req) => {
				req.reply((res) => {
					expect(res.statusCode).to.be.equal(200);
				});
			});
			cy.contains('Read more');

			// We scroll again here because not all the content at the bottom of the page loads
			// when you first touch bottom, you sometimes need to scroll once more to trigger
			// lazy loading Most Popular
			cy.scrollTo('bottom', { duration: 500 });

			cy.intercept('GET', '/most-read/**', (req) => {
				req.reply((res) => {
					expect(res.body).to.have.property('tabs');
					expect(res.statusCode).to.be.equal(200);
				});
			});
			cy.contains('Most commented');
		});
	});

	describe('for AMP', function () {
		it(`It should load designType articles under the pillar`, function () {
			AMPArticles.map((article, index) => {
				const { url, pillar, designType } = article;
				cy.log(`designType: ${designType}, pillar: ${pillar}`);
				// Prevent the Privacy consent banner from obscuring snapshots
				cy.setCookie('GU_TK', 'true');

				cy.visit(`/AMPArticle/${url}`);
				cy.contains('Opinion');
			});
		});
	});
});
