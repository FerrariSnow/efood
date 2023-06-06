import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardProduct = styled.div`
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  padding: 8px;
  max-width: 320px;
  width: 100%;

  ${ButtonContainer} {
    margin-top: 8px;
  }
`

export const TitleProduct = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height 18px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const DescriptionProduct = styled.p`
  font-size: 14px;
  line-height: 22px;
`
