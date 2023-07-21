import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px;
  height: 186px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const HeaderText = styled.p`
  width: auto;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;

  color: ${cores.principal};
`
