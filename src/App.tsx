import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import Router from './Router'
import { CyclesContextProvider } from './contexts/CycleContext'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>

        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
