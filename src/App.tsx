import { ThemeProvider } from 'styled-components'
import Hero from './containers/Hero'
import Cabecalho from './containers/Cabecalho'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
