import React from 'react';

import GlobalStyle from '~/components/general/global-style';

import {Characters} from './components/signatures/characters';

function App() {
	return (
		<>
			<GlobalStyle />

			<Characters />
		</>
	);
}

export {App};
