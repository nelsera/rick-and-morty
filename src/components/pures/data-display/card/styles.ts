import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid #6ebf23;
	color: white;
	margin: 24px;
	transition: box-shadow .3s,border-color .3s;
	width: 300px;

	img {
		display: block;
		width: 100%;
	}

	&:hover {
    box-shadow: 0 1px 2px -2px #ffffff29, 0 3px 6px #ffffff1f, 0 5px 12px 4px #ffffff17;
		cursor: pointer;
	}
`;

export const Info = styled.div`
	padding: 24px;
`;

export const Title = styled.div`
	overflow: hidden;
	color: #ffffffd9;
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 8px;
	white-space: nowrap;
	text-overflow: ellipsis;
`;

export const Description = styled.div`
	overflow: hidden;
	color: #ffffff73;
	font-weight: 400;
	font-size: 14px;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
