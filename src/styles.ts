import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body{
    padding-bottom: 120px;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
