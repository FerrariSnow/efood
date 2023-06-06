import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardLoja = styled.div`
  background-color: $fff;
  color: ${cores.principal};
  padding: 8px;
  max-width: 480px;
  width: 100%;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const InfosLoja = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  margin-top: 8px;
  margin-bottom: 16px;
`

export const DescricaoLoja = styled.p`
  color: ${cores.principal};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
export const TagsLoja = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
