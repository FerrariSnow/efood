import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
    grid-template-columns: 1fr 1fr;
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
