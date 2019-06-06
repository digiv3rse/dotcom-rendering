import { validateRequestData, ValidationError } from './validate';
import { data as articleData } from '@root/fixtures/article';

describe('JSON Schema request data validation', () => {
    it('returns true if data is valid', () => {
        expect(validateRequestData(articleData, '/AMPArticle')).toBe(true);
    });

    it.skip('throws validation Error if data is invalid', () => {
        const testData = {
            ...articleData,
            page: { content: { headline: 1 } },
        };
        expect(() => {
            validateRequestData(testData, '/AMPArticle');
        }).toThrowError(ValidationError);
    });
});
