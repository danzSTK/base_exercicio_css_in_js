import styled from 'styled-components'
import { Props } from '.'

export const Titulo = styled.h3<Props>`
  color: ${(props) =>
    props.tipo === 'principal' ? '#fff' : `${props.theme.corPrincipal}`};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  font-weight: bold;
  font-family: ${(props) => props.fontFamily || 'Lato, sans-serif'};
`
