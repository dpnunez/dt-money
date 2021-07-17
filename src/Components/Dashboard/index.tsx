import { Summary, TransactionsTable } from 'Components'
import { Container } from "./styles"

const Dashboard = () => {
	return (
		<Container>
			<Summary />
			<TransactionsTable />
		</Container>
	)
}

export { Dashboard }