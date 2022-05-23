import React from 'react';

import {render, screen} from '@testing-library/react';

import {App} from './App';

describe('main component', () => {
	it('show main title', () => {
		render(<App />);

		expect(
			screen.getByText('Try & search for your favorite character and his status!'),
		).toBeInTheDocument();
	});

	it('show main button', () => {
		render(<App />);

		expect(
			screen.getByText('Characters'),
		).toBeInTheDocument();
	});
});
