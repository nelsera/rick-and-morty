import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {render, screen} from '@testing-library/react';

import {Header} from '.';

describe('header component', () => {
	it('show image alt', () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>,
		);

		expect(
			screen.getByAltText('Rick and Morty logo'),
		).toBeInTheDocument();
	});
});
