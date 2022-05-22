import React from 'react';

import {Card} from '~/components/data-display/card';
import GlobalStyle from '~/components/general/global-style';

function App() {
	return (
		<>
			<GlobalStyle />

			<Card
				width={240}
				cover={
					<img
						alt='example'
						src='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
					/>
				}
			>
				<Card.Meta title='Rick Sanchez' description='Alive, Human' />
			</Card>
		</>
	);
}

export {App};
