import { Summary, TransactionsTable } from 'Components'
import { Container } from "./styles"

const Dashboard = () => (
	<Container>
		<Summary />
		<TransactionsTable />
	</Container>
)

export { Dashboard }