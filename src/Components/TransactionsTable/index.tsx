import { useTransactions } from "hooks/useTransaction"
import { Container } from "./styles"

import { formatDate, formatMoney } from "Helpers"

const TransactionsTable = () => {
	const { transactions } = useTransactions()

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Valor</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>
	
				<tbody>
					{transactions.map(transaction => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{formatMoney(transaction.amount)}
							</td>				
							<td>{transaction.category}</td>
							<td>
								{formatDate(new Date(transaction.createdAt))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	)
	
}

export { TransactionsTable }