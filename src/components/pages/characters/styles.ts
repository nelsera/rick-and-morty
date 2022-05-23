import styled from 'styled-components';

export const Container = styled.div``;

export const Search = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
	margin-top: 24px;
	max-width: 1420px;

	input {
		background-color: #5B5959;
		border: 1px solid #5B5959;
		outline: none;
		margin: 32px;
		padding: 16px 24px;
		transition: box-shadow .3s,border-color .3s;
		width: 100%;

		&:hover {
			border: 1px solid #6ebf23;
		}
	}
`;

export const Characters = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: auto;
	max-width: 1400px;

	a {
		text-decoration: none;
	}
`;
