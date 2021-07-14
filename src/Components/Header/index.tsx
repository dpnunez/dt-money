import { Container, Content } from "./styles";

import logoImg from 'Assets/logo.svg'

interface HeaderProps {
	onOpenTrasactionForm: () => void
}

const Header = ({onOpenTrasactionForm }: HeaderProps) => (
	<Container>
		<Content>
			<img src={logoImg} alt="dt money" />
			<button aria-label="Nova transação" onClick={onOpenTrasactionForm}>Nova transação</button>
		</Content>
	</Container>
)

export { Header }