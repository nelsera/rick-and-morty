import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #242221;
		font-family: 'Roboto';
		margin: 0;
		overflow-y: scroll;
  }
`;

export const Container = styled.div`
	padding-top: 80px;
`;
