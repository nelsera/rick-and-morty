import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {BlackHole, Button, Container, Title} from './styles';

export const Home: FC = () => (
	<Container>
		<Title>Try & search for your favorite character and his status!</Title>

		<Button>
			<Link to='/characters'>Characters</Link>
		</Button>

		<BlackHole>
			<img
				src={process.env.PUBLIC_URL + '/rick-and-morty-symbol.png'}
				alt='Rick and Morty'
			/>
		</BlackHole>

	</Container>
);
