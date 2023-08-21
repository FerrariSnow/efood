import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'

export const StoreCard = styled.div`
  background-color: #fff;
  border: 1px solid ${colors.main};
  color: ${colors.main};
  max-width: 472px;
  width: 100%;
  position: relative;
  padding-bottom: 12px;

  img {
    max-height: 217px;
    width: 100%;
    height: 100%;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    border: 8px solid #fff;
  }
`

export const StoreInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  padding: 8px;

  div {
    display: flex;
    gap: 5px;
  }
`

export const StoreDescription = styled.p`
  color: ${colors.main};
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  padding: 0 8px 10px 8px;
`
export const StoreTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
