import Button from "./components/Button"
import {ThemeProvider} from 'styled-components'
import { defaultTheme } from "./styles/theme/default"
import { GlobalStyle } from "./styles/global"


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary'/>
      <Button variant='secondary'/>
      <Button variant='success'/>
      <Button variant='danger'/>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App