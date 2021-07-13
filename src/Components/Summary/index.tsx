import { Data } from './Data'
import { Container } from './styles'

import incomeImg from 'Assets/income.svg'
import outcomeImg from 'Assets/outcome.svg'
import totalImg from 'Assets/total.svg'

const Summary = () => (
	<Container>
		<Data title="Entradas" iconSrc={incomeImg} amount={200} />
		<Data title="Saídas" iconSrc={outcomeImg} amount={200} />
		<Data title="Total" iconSrc={totalImg} amount={200} className="highlight-background" />
	</Container>
)

export { Summary }