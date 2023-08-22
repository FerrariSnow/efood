import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderContainer = styled.header`
  padding-top: 40px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 72px;
`

export const HeaderTitle = styled.h1`
  position: absolute;
  top: 40px;
  max-width: 80%;
  height: 84px;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  color: ${colors.main};
  padding-top: 144px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
    line-height: 36px;
  }
`
