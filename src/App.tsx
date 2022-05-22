import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Container, GlobalStyle} from '~/components/general/global-style';
import {Header} from '~/components/general/header';
import {Characters} from '~/components/pages/characters';
import {Home} from '~/components/pages/home';

function App() {
	return (
		<>
			<GlobalStyle />

			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />

				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/characters' element={<Characters />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</>
	);
}

export {App};
