import { HeadingThree, HeadingTwo } from 'bodyElement';
import { ElementKind } from 'bodyElementKind';
import { JSDOM } from 'jsdom';
import { Optional } from 'optional';
import { fromBodyElements } from 'outline';

const makeHeadingTwo = (text: string, id: string): HeadingTwo => {
	return {
		kind: ElementKind.HeadingTwo,
		id: Optional.some(id),
		doc: JSDOM.fragment(`<h2>${text}</h2>`).firstChild!,
	};
};

const makeHeadingThree = (text: string, id: string): HeadingThree => {
	return {
		kind: ElementKind.HeadingThree,
		id: Optional.some(id),
		doc: JSDOM.fragment(`<h3>${text}</h3>`).firstChild!,
	};
};

describe('outline', () => {
	test('it creates an outline', () => {
		const output = fromBodyElements([
			makeHeadingTwo('Interesting topic 1', 'interesting-topic-1'),
			makeHeadingTwo('Interesting topic 2', 'interesting-topic-2'),
			makeHeadingThree('Subtopic 1', 'subtopic-1'),
			makeHeadingThree('Subtopic 2', 'subtopic-2'),
			makeHeadingTwo('Interesting topic 3', 'interesting-topic-3'),
			makeHeadingThree('Subtopic 3', 'subtopic-3'),
		]);

		expect(output.length).toEqual(3);
		expect(output[0].id).toEqual('interesting-topic-1');
		expect(output[0].subheadings.length).toEqual(0);

		expect(output[1].id).toEqual('interesting-topic-2');
		expect(output[1].subheadings.length).toEqual(2);
		expect(output[1].subheadings[0].id).toEqual('subtopic-1');
		expect(output[1].subheadings[1].id).toEqual('subtopic-2');
		console.log(output);
	});
});
