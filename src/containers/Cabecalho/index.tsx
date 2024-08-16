import Title from '../../components/Title'
import { Header } from './styles'

const Cabecalho = () => (
  <Header>
    <Title as="h1" fontSize={32} tipo="secundario">
      EBAC Jobs
    </Title>
  </Header>
)

export default Cabecalho
