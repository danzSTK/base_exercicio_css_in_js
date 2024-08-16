import { Titulo as TituloEstilizado } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontFamily?: string
  tipo: 'principal' | 'secundario'
  as?: React.ElementType
}

const Title = ({
  children,
  tipo = 'principal',
  fontSize,
  as,
  fontFamily
}: Props) => (
  <TituloEstilizado
    fontFamily={fontFamily}
    as={as}
    fontSize={fontSize}
    tipo={tipo}
  >
    {children}
  </TituloEstilizado>
)

export default Title
