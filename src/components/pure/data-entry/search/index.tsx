import React, {FC} from 'react';

export type SearchProps = {
	onChange: any
}

export const Search: FC<SearchProps> = ({onChange}) => (
	<input onChange={onChange} placeholder='Search name' type='search' />
);
