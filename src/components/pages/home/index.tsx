import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Container, Title} from './styles';

export const Home: FC = () => (
	<Container>
		<Title>Try & search for your favorite character and his status!</Title>

		<div className='button'>
			<Link to='/characters'>Characters</Link>
		</div>

		<img
			src={process.env.PUBLIC_URL + '/rick-and-morty-symbol.png'}
			alt='Rick and Morty'
			style={{minWidth: '200px'}}
		/>
	</Container>
);
