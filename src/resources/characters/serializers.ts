import {AxiosResponse} from 'axios';

import {
	CharacterError,
	CharactersError,
	CharactersSuccess,
	CharacterSuccess,
} from './types';

export const handleCharactersError = (error: unknown): CharactersError => ({
	dataSource: [],
	dataMeta: null,
	error,
	hasContent: false,
	hasError: true,
	isEmpty: true,
});

export const handleCharactersSuccess = (
	characters: AxiosResponse,
): CharactersSuccess => ({
	dataSource: characters.data.results,
	dataMeta: characters.data.info,
	error: null,
	hasContent: characters.data.results.length > 0,
	hasError: false,
	isEmpty: characters.data.results.length === 0,
});

export const handleCharacterError = (error: unknown): CharacterError => ({
	dataSource: null,
	error,
	hasContent: false,
	hasError: true,
	isEmpty: true,
});

export const handleCharacterSuccess = (
	character: AxiosResponse,
): CharacterSuccess => ({
	dataSource: character.data,
	error: null,
	hasContent: true,
	hasError: false,
	isEmpty: false,
});
