import React, {FC} from 'react';
import {useParams} from 'react-router-dom';

import {Profile} from '~/components/pure/data-display/profile';
import {useCharacter} from '~/resources/characters/hooks';

export const Character: FC = () => {
	const {id} = useParams();

	const character = useCharacter({id: Number(id)});

	if (character.hasContent) {
		return <Profile dataSource={character.dataSource} />;
	}

	return <div />;
};
