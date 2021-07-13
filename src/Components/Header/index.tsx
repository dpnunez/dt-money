import { Container, Content } from "./styles";

import logoImg from 'Assets/logo.svg'

const Header = () => (
	<Container>
		<Content>
			<img src={logoImg} alt="dt money" />
			<button>Nova transação</button>
		</Content>
	</Container>
)

export { Header }