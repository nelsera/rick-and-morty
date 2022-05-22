import axios from 'axios';

import {FetchCharacterParams, FetchCharactersParams} from './types';

export const baseUrl = 'https://rickandmortyapi.com/api';

export const fetchCharacters = ({page}: FetchCharactersParams) => axios.get(
	`${baseUrl}/character`,
	{params: {page}},
);

export const fetchCharacter = ({id}: FetchCharacterParams) => axios.get(
	`${baseUrl}/character/${id}`,
);
