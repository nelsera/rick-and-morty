import React, {FC} from 'react';

import {Character} from '~/resources/characters/types';

import {Avatar, Container, Item, Items, Label, Row} from './style';

export type ProfileProps = {
	dataSource: Character
}

export const Profile: FC<ProfileProps> = ({dataSource}) => (
	<Container>
		<h1>{dataSource.name}</h1>

		<Row>
			<Avatar>
				<img
					alt=''
					src={dataSource.image}
					height={275}
				/>
			</Avatar>

			<Items>
				<Item>
					<Label>Status</Label>
					<div>{dataSource.status}</div>
				</Item>

				<Item>
					<Label>Species</Label>
					<div>{dataSource.species}</div>
				</Item>

				<Item>
					<Label>Gender</Label>
					<div>{dataSource.gender}</div>
				</Item>

				<Item>
					<Label>Location</Label>
					<div>{dataSource.location.name}</div>
				</Item>

				<Item>
					<Label>Origin</Label>
					<div>{dataSource.origin.name}</div>
				</Item>
			</Items>
		</Row>
	</Container>
);
