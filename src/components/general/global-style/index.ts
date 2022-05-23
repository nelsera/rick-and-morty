import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #242221;
		font-family: 'Roboto';
		margin: 0;
		min-width: 320px;

		@media (min-width: 768px) {
			overflow-y: scroll;
		}
  }
`;

export const Container = styled.div`
	padding-top: 80px;
`;
