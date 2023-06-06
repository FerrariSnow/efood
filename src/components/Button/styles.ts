import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  background-color: ${cores.secundaria};
  color: ${cores.principal};
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
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  text-decoration: none;
  padding: 4px 6px;
`
