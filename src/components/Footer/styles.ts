import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.secundaria};
  padding: 40px;
  text-align: center;
  color: ${cores.principal};

  img {
    margin-bottom: 32px;
  }
`

export const SocialMedias = styled.div`
  img {
    margin-left: 8px;
  }

  margin-bottom: 80px;
`
