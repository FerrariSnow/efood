import styled from 'styled-components'
import { cores } from '../../styles'

import trash from '../../assets/images/trash.svg'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.principal};
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  height: 100px;
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  margin-bottom: 16px;
  padding: 8px;

  h3 {
    font-weight: 900;
    font-size: 18px;
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
  }

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  button {
    background-image: url(${trash});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const PriceCart = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  margin-top: 40px;
  margin-bottom: 16px;
`
