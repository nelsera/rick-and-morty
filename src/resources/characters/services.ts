import {AxiosResponse} from 'axios';

import {
	fetchCharacters as fetchCharactersRequest,
	fetchCharacter as fetchCharacterRequest,
} from './requests';
import {
	handleCharacterError,
	handleCharactersError,
	handleCharactersSuccess,
	handleCharacterSuccess,
} from './serializers';
import {FetchCharacterParams, FetchCharactersParams} from './types';

export const fetchCharacters = async ({name, page}: FetchCharactersParams) => {
	try {
		const characters: AxiosResponse = await fetchCharactersRequest({name, page});

		return handleCharactersSuccess(characters);
	} catch (error) {
		return handleCharactersError(error);
	}
};

export const fetchCharacter = async ({id}: FetchCharacterParams) => {
	try {
		const characters: AxiosResponse = await fetchCharacterRequest({id});

		return handleCharacterSuccess(characters);
	} catch (error) {
		return handleCharacterError(error);
	}
};
