import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerStores = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 48px 80px;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    grid-gap: 48px 20px;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
