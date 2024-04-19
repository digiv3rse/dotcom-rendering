import '@testing-library/jest-dom';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { reportAbuse } from '../../lib/discussionApi';
import { mockRESTCalls } from '../../lib/mockRESTCalls';
import { ok } from '../../lib/result';
import { AbuseReportForm } from './AbuseReportForm';

const fetchMock = mockRESTCalls();

describe('Dropdown', () => {
	it('Should show the expected label names', () => {
		const { getByLabelText } = render(
			<AbuseReportForm
				toggleSetShowForm={() => undefined}
				commentId="123"
				reportAbuse={() => Promise.resolve(ok(true))}
			/>,
		);

		expect(getByLabelText('Category')).toBeInTheDocument();
		expect(getByLabelText('Reason Optional')).toBeInTheDocument();
		expect(getByLabelText('Email Optional')).toBeInTheDocument();
	});

	it('Should show the category error message if not chosen on submit', () => {
		const { getByText } = render(
			<AbuseReportForm
				toggleSetShowForm={() => undefined}
				commentId="123"
				reportAbuse={() => Promise.resolve(ok(true))}
			/>,
		);

		fireEvent.click(getByText('Report'));
		expect(
			getByText('You must select a category before submitting'),
		).toBeInTheDocument();
	});

	it('Should show the success message category is selected', async () => {
		const user = userEvent.setup();
		const { getByText, getByLabelText, getByRole } = render(
			<AbuseReportForm
				toggleSetShowForm={() => undefined}
				commentId="123"
				reportAbuse={reportAbuse(undefined)}
			/>,
		);

		await user.selectOptions(getByLabelText('Category'), 'Trolling');
		await user.click(getByRole('button', { name: 'Report' }));

		await waitFor(() => {
			expect(fetchMock.lastOptions(/reportAbuse/)?.body).toBe(
				'categoryId=4',
			);
		});

		await waitFor(() => {
			expect(getByText('Report submitted')).toBeInTheDocument();
		});
	});
});
