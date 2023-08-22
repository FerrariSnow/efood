import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  padding: 40px;
  text-align: center;
  color: ${colors.main};
  margin-top: 120px;

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
