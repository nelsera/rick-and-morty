import mockAxios from 'jest-mock-axios';

import {fetchCharacter} from './requests';

describe('fetchCharacter', () => {
	afterEach(() => {
		mockAxios.reset();
	});

	describe('when API call is successful', () => {
		it('should return users list', async () => {
			const character = {
				created: '',
				episode: [],
				gender: '',
				id: 1,
				image: '',
				location: {
					name: '',
					url: '',
				},
				name: '',
				origin: {
					name: '',
					url: '',
				},
				species: '',
				status: 'Alive',
				type: '',
				url: '',
			};

			mockAxios.get.mockResolvedValueOnce(character);

			const result = await fetchCharacter({id: 1});

			expect(mockAxios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1');
			expect(result).toEqual(character);
		});
	});
});
