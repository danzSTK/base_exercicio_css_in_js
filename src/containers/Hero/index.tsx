import Title from '../../components/Title'
import { Container } from '../../styles'
import { Hero as HeroEstilizada } from './styles'

const Hero = () => (
  <HeroEstilizada>
    <Container>
      <Title
        fontFamily="Gloock, serif"
        as={'h2'}
        tipo="principal"
        fontSize={48}
      >
        As melhores vagas para tecnologia, design e artes visuais.
      </Title>
    </Container>
  </HeroEstilizada>
)

export default Hero
