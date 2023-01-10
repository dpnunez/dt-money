import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		box-sizing: border-box;
		padding: 0;
	}

	*:focus {
		outline: 0;
		box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
	}

	body {
		background-color: ${(props) => props.theme['gray-800']};
		color: ${(props) => props.theme['gray-100']};
		-webkit-font-smoothing: antialiased;	
	}

	body, input, textarea, button {
		font: 400 1rem Roboto, sans-serif;
	}


`

export { GlobalStyles }
