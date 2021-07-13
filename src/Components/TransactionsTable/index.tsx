import { formatMoney } from "Helpers"
import { Container } from "./styles"

const TransactionsTable = () => (
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


export { TransactionsTable }