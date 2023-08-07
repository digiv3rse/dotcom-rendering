import { secondsToDuration } from './MediaDuration.tsx';

describe(`MediaText`, () => {
	it(`converts from a number of seconds to a duration string`, () => {
		const secss = [undefined, 0, 59, 599, 3599, 35999, 3601];
		const expected = [
			``,
			``,
			`0:59`,
			`9:59`,
			`59:59`,
			`9:59:59`,
			`1:00:01`,
		];
		secss.forEach((secs, i) => {
			const result = secondsToDuration(secs);
			expect(result).toBe(expected[i]);
		});
	});
});
