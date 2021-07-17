import { Data } from './Data'
import { Container } from './styles'
import { useTransactions } from 'hooks/useTransaction'

import incomeImg from 'Assets/income.svg'
import outcomeImg from 'Assets/outcome.svg'
import totalImg from 'Assets/total.svg'

const Summary = () => {
	const { transactions } = useTransactions()


	const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });

	return (
		<Container>
			<Data title="Entradas" iconSrc={incomeImg} amount={summary.deposits} />
			<Data title="Saídas" iconSrc={outcomeImg} amount={summary.withdraws} />
			<Data title="Total" iconSrc={totalImg} amount={summary.total} className="highlight-background" />
		</Container>
	)
}

export { Summary }