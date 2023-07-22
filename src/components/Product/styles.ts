import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardProduct = styled.div`
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  padding: 8px;
  max-width: 320px;
  max-height: 340px;
  width: 100%;
  height: auto;

  img {
    max-width: 320px;
    max-height: 167px;
    width: 100%;
    height: 100%;
  }
`

export const TitleProduct = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height 18px;
  margin-top: 8px;
  margin-bottom: 8px;
`

export const DescriptionProduct = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-indent: 18px;
  height: 96px;
  // margin-bottom: 16px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000000ba;
    opacity: 0.4;
  }

  .container {
    position: relative;
    z-index: 1;
    display: flex;
    padding: 32px;
    color: ${cores.fundo};
    background-color: ${cores.principal};
  }

  ${ButtonContainer} {
    margin-top: 16px;
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;

  .modal-img {
    display: block;
    width: 100%;
    max-width: 360px;
    height: 100%;
    max-height: 360px;
  }

  .modal-info {
    margin-left: 24px;
  }

  ${TitleProduct} {
    margin-bottom: 16px;
  }

  ${DescriptionProduct} {
    margin-bottom: 16px;
  }

  ${ButtonContainer} {
    width: auto;
    padding: 8px;
    cursor: pointer;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`
