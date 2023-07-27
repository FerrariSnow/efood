import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;
  width: 100%;
  display: block;
  color: #fff;
  position: relative;
  margin-bottom: 56px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`

export const TituloLoja = styled.h2`
  position: absolute;
  display: block;
  bottom: 32px;
  width: auto;
  height: 33.25px;
  font-size: 32px;
  line-height: 38px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 32px;
  }
`
export const TipoLoja = styled.p`
  position: absolute;
  width: 101px;
  height: 33.25px;
  top: 25px;

  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
`
