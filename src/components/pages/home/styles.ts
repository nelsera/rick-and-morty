import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 1000px;

	.button{
		position: relative;
		display: inline-block;
		margin: auto;
		width: 300px;
	}

	.button a{
		color: white;
		font-family: Helvetica, sans-serif;
		font-weight: bold;
		font-size: 36px;
		text-align:  center;
		text-decoration: none;
		background-color: #6ebf23;
		display: block;
		position: relative;
		padding: 20px 40px;

		-webkit-tap-highlight-color:  rgba(0, 0, 0, 0);
		text-shadow:  0px 1px 0px #000;
		filter:  dropshadow(color=#000, offx=0px, offy=1px);

		-webkit-box-shadow: inset 0 1px 0 #8BC546, 0 10px 0 #0E8943;
		-moz-box-shadow: inset 0 1px 0 #8BC546, 0 10px 0 #0E8943;
		box-shadow: inset 0 1px 0 #8BC546, 0 10px 0 #0E8943;

		-webkit-border-radius:  5px;
		-moz-border-radius:  5px;
		border-radius:  5px;
	}

	.button a: active{
		top: 10px;
		background-color: #6ebf23;

		-webkit-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0E8943;
		-moz-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #0E8943;
		box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0E8943;
	}

	.button: after{
		content: "";
		height: 100%;
		width: 100%;
		padding: 4px;
		position:  absolute;
		bottom: -15px;
		left: -4px;
		z-index: -1;
		background-color: #ccc;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		border-radius: 5px;
	}
`;

export const Title = styled.h1`
	color: #6ebf23;
	font-size: 3.75rem;
	font-weight: 800;
	letter-spacing: -0.00833em;
	line-height: 1.2;
	text-align: center;
`;
