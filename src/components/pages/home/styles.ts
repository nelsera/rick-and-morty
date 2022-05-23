import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	max-width: 1000px;
	min-width: 320px;

	@-webkit-keyframes Pulse {
		0% { -webkit-box-shadow: 0 0 1000px rgba(110, 191, 35,0.2); }
		50% { -webkit-box-shadow: 0 0 1000px rgba(110, 191, 35,0.99); }
		100% { -webkit-box-shadow: 0 0 1000px rgba(110, 191, 35,0.2); }
	}

	@keyframes Pulse {
		0% { box-shadow: 0 0 1000px rgba(110, 191, 35,0.2); }
		50% { box-shadow: 0 0 1000px rgba(110, 191, 35,0.99); }
		100% { box-shadow: 0 0 1000px rgba(110, 191, 35,0.2); }
	}
`;

export const Title = styled.h1`
	color: #6ebf23;
	font-weight: 800;
	letter-spacing: -0.00833em;
	padding: 24px;
	text-align: center;

	@media (min-width: 768px) {
		font-size: 3.75rem;
		line-height: 1.2;
	}
`;

export const BlackHole = styled.div`
	width: 275px;
	height: 275px;

	@media (min-width: 768px) {
		width: 550px;
		height: 550px;
	}

	border-radius: 100%;
	margin: 100px auto;

	-webkit-animation: Pulse 3s infinite ease-in-out;
	-o-animation: Pulse 3s infinite ease-in-out;
	-ms-animation: Pulse 3s infinite ease-in-out;
	-moz-animation: Pulse 3s infinite ease-in-out;
	animation: Pulse 3s infinite ease-in-out;

	img {
		margin: -10px -21px;
    width: 300px;

		@media (min-width: 768px) {
			margin: -63px -90px;
			min-width: 200px;
			width: auto;
		}
	}
`;

export const Button = styled.div`
	display: inline-block;
	margin: auto;
	position: relative;
	width: 250px;

	a {
		background-color: #6ebf23;
		color: white;
		display: block;
		font-family: Helvetica, sans-serif;
		font-size: 30px;
		font-weight: bold;
		text-align:  center;
		text-decoration: none;
		padding: 20px 40px;
		position: relative;

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

	a: active {
		top: 10px;
		background-color: #6ebf23;

		-webkit-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0E8943;
		-moz-box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 #0E8943;
		box-shadow: inset 0 1px 0 #FFE5C4, inset 0 -3px 0 #0E8943;
	}

	&:after {
		border-radius: 5px;
		background-color: #ccc;
		-webkit-border-radius: 5px;
		-moz-border-radius: 5px;
		bottom: -15px;
		content: "";
		height: 100%;
		padding: 4px;
		position:  absolute;
		left: -4px;
		width: 100%;
		z-index: -1;
	}
`;
