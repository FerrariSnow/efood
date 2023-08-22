import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  padding: 40px;
  height: 186px;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

export const HeaderText = styled.p`
  width: auto;
  height: 21px;
  font-size: 18px;
  font-weight: bold;
  line-height: 21px;
  text-align: center;

  color: ${colors.main};

  @media (max-width: 550px) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`
export const CartButton = styled.span`
  display: flex;
  cursor: pointer;
`
