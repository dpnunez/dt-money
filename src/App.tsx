import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <h1>Hello</h1>
    </ThemeProvider>
  )
}

export { App }
