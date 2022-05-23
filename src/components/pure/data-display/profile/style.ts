import styled from 'styled-components';

export const Container = styled.div`
	background-color: #1E1E1E;
	border: 1px solid #6ebf23;
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
		0px 1px 1px 0px rgb(0 0 0 / 14%),
		0px 1px 3px 0px rgb(0 0 0 / 12%);
	color: white;
	margin: 24px auto;
	padding: 24px;
	max-width: 600px;

	h1 {
		margin: 0;
		margin-bottom: 16px;
		text-align: center;
	}
`;

export const Row = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		align-items: initial;
		flex-direction: row;
	}
`;

export const Avatar = styled.div`
	display: flex;
	justify-content: center;
`;

export const Items = styled.div`
	width: 275px;

	@media (min-width: 768px) {
		margin-left: 24px;
	}
`;

export const Item = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	padding: 16px;
`;

export const Label = styled.div`
	color: #ffffff73;
	font-size: 14px;
	margin-bottom: 8px;
`;
