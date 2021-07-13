import { formatMoney } from 'Helpers'
import { ContainerData as Container } from './styles'

interface DataProps {
	iconSrc: string;
	title: string;
	amount: number;
	className?: string;
}

const Data = (props: DataProps) => (
	<Container {...props}>
		<header>
			<h3>{props.title}</h3>
			<img src={props.iconSrc} alt={props.title} />
		</header>
		<strong>{formatMoney(props.amount)}</strong>
	</Container>
)
export { Data }