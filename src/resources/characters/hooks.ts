import {useEffect, useState} from 'react';

import {fetchCharacter, fetchCharacters} from './services';
import {CharacterResponse, CharactersResponse, FetchCharacterParams, FetchCharactersParams} from './types';

export const useCharacters = ({name, page}: FetchCharactersParams) => {
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
			const params = {name, page};
			const characters: CharactersResponse = await fetchCharacters(params);

			setCharacters(characters);
		})();
	}, [name, page]);

	return characters;
};

export const useCharacter = ({id}: FetchCharacterParams) => {
	const [character, setCharacter] = useState<CharacterResponse>({
		dataSource: null,
		error: null,
		hasContent: false,
		hasError: false,
		isEmpty: true,
	});

	useEffect(() => {
		(async () => {
			const character: CharacterResponse = await fetchCharacter({id});

			setCharacter(character);
		})();
	}, [id]);

	return character;
};
