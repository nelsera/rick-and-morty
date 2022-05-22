import React, {FC, ReactNode} from 'react';

import {Container, Description, Info, Title} from './styles';

export type Composition = {
  Meta: FC<MetaProps>
}

export type CardProps = {
	children: ReactNode
	cover: ReactNode
	width: number
}

export const Card: Composition & FC<CardProps> = ({
	children,
	cover,
	width,
}: CardProps) => (
	<Container style={{width}}>
		{cover}
		{children}
	</Container>
);

export type MetaProps = {
	title: string
	description: string
}

export const Meta: FC<MetaProps> = ({title, description}) => (
	<Info>
		<Title>{title}</Title>
		<Description>{description}</Description>
	</Info>
);

Card.Meta = Meta;
