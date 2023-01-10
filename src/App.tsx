import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'
import { Transactions } from './pages/transactions'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
    </ThemeProvider>
  )
}

export { App }
