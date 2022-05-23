import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import {render, screen} from '@testing-library/react';

import {Home} from '.';

describe('home component', () => {
	it('show main image', () => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>,
		);

		expect(
			screen.getByAltText('Rick and Morty symbol'),
		).toBeInTheDocument();
	});
});
