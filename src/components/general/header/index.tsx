import React, {FC} from 'react';
import {Link} from 'react-router-dom';

import {Container} from './styles';

export const Header: FC = () => (
	<Container>
		<Link to='/'>
			<img
				src={process.env.PUBLIC_URL + '/rick-and-morty-logo.png'}
				alt='Rick and Morty'
				height={60}
			/>
		</Link>
	</Container>
);
