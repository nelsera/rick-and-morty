import {useEffect, useState} from 'react';

import {fetchCharacters} from './services';
import {CharactersResponse} from './types';

export const useCharacters = () => {
	const [characters, setCharacters] = useState<CharactersResponse>({
		dataSource: [],
		dataMeta: null,
		error: null,
		hasContent: false,
		hasError: false,
		isEmpty: true,
	});

	useEffect(() => {
		(async () => {
			const characters: CharactersResponse = await fetchCharacters({page: 1});

			setCharacters(characters);
		})();
	}, []);

	return characters;
};
