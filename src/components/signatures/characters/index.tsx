import React from 'react';

import {Card} from '~/components/pures/data-display/card';
import {useCharacters} from '~/resources/characters/hooks';
import {Character, CharactersResponse} from '~/resources/characters/types';

import {Container} from './styles';

export const Characters = () => {
	const characters: CharactersResponse = useCharacters();

	const renderCards = (characters: Character[]) => (
		characters.map((character: Character) => (
			<Card
				key={character.id}
				cover={
					<img
						alt={character.name}
						src={character.image}
					/>
				}
			>
				<Card.Meta
					title={character.name}
					description={`${character.species}, ${character.status}`}
				/>
			</Card>
		))
	);

	if (characters.hasContent) {
		return (
			<Container>
				{renderCards(characters.dataSource)}
			</Container>
		);
	}

	return <div />;
};
