import { useEffect } from "react"
import { Container } from "./styles"
import { formatMoney } from "Helpers"
import { fetchClient } from "Services/fetchClient"

const TransactionsTable = () => {

	useEffect(() => {
		fetchClient.get('/transactions').then(response => console.log(response)).catch(e => console.log(e))
	}, [])

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
					<tr>
						<td>Lorem ipsum</td>
						<td>{formatMoney(200)}</td>				
						<td>Ipsum</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Lorem ipsum</td>
						<td className="">{formatMoney(230)}</td>				
						<td>Ipsum</td>
						<td>20</td>
					</tr>
				</tbody>
			</table>
		</Container>
	)
	
}

export { TransactionsTable }