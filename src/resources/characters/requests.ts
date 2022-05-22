import axios from 'axios';

type FetchParams = {
	page: number
}

export const fetchCharacters = ({page}: FetchParams) => axios.get(
	'https://rickandmortyapi.com/api/character',
	{params: {page}},
);
