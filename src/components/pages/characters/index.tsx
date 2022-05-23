import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {Card} from '~/components/pure/data-display/card';
import {Search} from '~/components/pure/data-entry/search';
import {useCharacters} from '~/resources/characters/hooks';
import {
	Character,
	CharactersFilter,
	CharactersResponse,
} from '~/resources/characters/types';

import {
	Characters as CharactersStyle,
	Container,
	Search as SearchStyle,
} from './styles';

export const Characters = () => {
	const [filters, setFilters] = useState<CharactersFilter>({
		lastPages: [],
		name: '',
		page: 1,
	});

	const characters: CharactersResponse = useCharacters({
		name: filters.name,
		page: filters.page,
	});

	const handleCharactersChange = ({target}: ChangeEvent<HTMLSelectElement>) => {
		setFilters((state: CharactersFilter) => ({
			...state,
			lastPages: [],
			name: target.value,
			page: 1,
		}));
	};

	const handleScroll = useCallback(() => {
		const bottom = Math.ceil(
			window.innerHeight + window.scrollY,
		) >= document.documentElement.scrollHeight;

		if (bottom) {
			setFilters((state: CharactersFilter) => ({
				...state,
				lastPages: [...state.lastPages, ...characters.dataSource],
				page: ++filters.page,
			}));
		}
	}, [filters.page, characters.dataSource]);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, {passive: true});

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const renderCharacters = (characters: Character[]) => (
		characters.map((character: Character) => (
			<Link
				key={`character-${character.id}`}
				to={`/characters/${character.id}`}>
				<Card
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
			</Link>
		))
	);

	return (
		<Container>
			<SearchStyle>
				<Search onChange={handleCharactersChange} />
			</SearchStyle>

			<CharactersStyle>
				{renderCharacters([...filters.lastPages, ...characters.dataSource])}
			</CharactersStyle>
		</Container>
	);
};
