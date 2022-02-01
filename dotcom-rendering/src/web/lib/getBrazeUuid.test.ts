import { getBrazeUuid } from '@root/src/web/lib/getBrazeUuid';
import { getIdapiUserIdentifiers } from '@root/src/web/lib/getIdapiUserData';

const userIdentifiers = {
	brazeUuid: 'brazeUuidValue',
	googleTagId: 'googleTagIdValue',
	id: 'idValue',
	puzzleId: 'puzzleIdValue',
};

jest.mock('@root/src/web/lib/getIdapiUserData', () => ({
	getIdapiUserIdentifiers: jest.fn(() => Promise.resolve(userIdentifiers)),
}));

describe('getBrazeUuid', () => {
	it('gets the braze uuid using Identity user identifiers api', async () => {
		const result = await getBrazeUuid('https://idapi-url.com');
		expect(result).toBe(userIdentifiers.brazeUuid);
		expect(getIdapiUserIdentifiers).toHaveBeenCalledWith(
			'https://idapi-url.com',
		);
	});
});
