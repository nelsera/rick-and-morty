import {AxiosResponse} from 'axios';

import {fetchCharacters as fetchCharactersRequest} from './requests';
import {handleCharactersError, handleCharactersSuccess} from './serializers';
import {Params} from './types';

export const fetchCharacters = async ({page}: Params) => {
	try {
		const characters: AxiosResponse = await fetchCharactersRequest({page});

		return handleCharactersSuccess(characters);
	} catch (error) {
		return handleCharactersError(error);
	}
};
