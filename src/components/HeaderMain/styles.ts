import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px;
  height: 384px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 80px;
`

export const HeaderTitle = styled.h1`
  position: absolute;
  width: 539px;
  height: 84px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${cores.principal};
  padding-top: 144px;
`
