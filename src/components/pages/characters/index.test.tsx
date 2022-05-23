import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {render, screen} from '@testing-library/react';

import {Characters} from '.';

describe('characters component', () => {
	it('show search field', () => {
		render(
			<BrowserRouter>
				<Characters />
			</BrowserRouter>,
		);

		expect(
			screen.getByPlaceholderText('Search name'),
		).toBeInTheDocument();
	});
});
