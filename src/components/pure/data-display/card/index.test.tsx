import React from 'react';

import {render, screen} from '@testing-library/react';

import {Card} from '.';

describe('card component', () => {
	it('show title text', () => {
		render(
			<Card
				cover={
					<img
						alt='Rick Sanches image'
						src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					/>
				}
			>
				<Card.Meta
					title='Rick Sanches'
					description={'Human, alive'}
				/>
			</Card>,
		);

		expect(
			screen.getByText('Rick Sanches'),
		).toBeInTheDocument();
	});
});
