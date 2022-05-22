import {useEffect, useState} from 'react';

import {fetchCharacter, fetchCharacters} from './services';
import {CharacterResponse, CharactersResponse, FetchCharacterParams} from './types';

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
