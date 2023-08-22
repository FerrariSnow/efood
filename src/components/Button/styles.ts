import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  background-color: ${colors.secondary};
  color: ${colors.main};
  width: 100%;
  cursor: pointer;
  padding: 4px 0;
  border: none;
`

export const ButtonLink = styled(Link)`
  width: 70px;
  height: 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  background-color: ${colors.main};
  color: ${colors.secondary};
  text-decoration: none;
  padding: 4px 6px;
`
