import React from 'react';

import {render, screen} from '@testing-library/react';

import {Profile} from '.';

describe('profile component', () => {
	it('show status text', () => {
		render(
			<Profile
				dataSource={{
					created: '',
					episode: [],
					gender: '',
					id: 1,
					image: '',
					location: {
						name: '',
						url: '',
					},
					name: '',
					origin: {
						name: '',
						url: '',
					},
					species: '',
					status: 'Alive',
					type: '',
					url: '',
				}}
			/>,
		);

		expect(
			screen.getByText('Alive'),
		).toBeInTheDocument();
	});
});
