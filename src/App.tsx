import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'

import { defaultTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'

import { Transactions } from './pages/Transactions'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <GlobalStyles />
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export { App }
