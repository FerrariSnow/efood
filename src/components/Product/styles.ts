import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CardProduct = styled.div`
  background-color: ${colors.main};
  color: ${colors.secondary};
  padding: 8px;
  max-width: 320px;
  max-height: 340px;
  width: 100%;
  height: auto;
  cursor: pointer;

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
  height: 96px;

  @media (max-width: ${breakpoints.desktop}) {
    height: 66px;
    font-size: 12px;
    line-height: 20px;
  }
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
  z-index: 9999;

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
    color: ${colors.white};
    background-color: ${colors.main};

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  ${ButtonContainer} {
    margin-top: 16px;
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-height: 344px;
  height: 100%;

  @media (max-width: ${breakpoints.desktop}) {
    .modal-info {
      width: 50%;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    max-height: 550px;
    padding: 16px;
    height: 100%;
    justify-content: center;

    button {
      margin-bottom: 16px;
    }
  }

  .modal-img {
    display: block;
    max-width: 280px;
    max-height: 280px;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .modal-info {
    margin-left: 24px;
    height: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      height: 50%;
    }

    @media (max-width: ${breakpoints.celular}) {
      width: 100%;
      height: 60%;
      margin: 0 auto;
    }
  }

  ${TitleProduct} {
    margin-bottom: 16px;
  }

  ${DescriptionProduct} {
    height: auto;
    max-height: 280px;
    margin-bottom: 16px;
  }

  div {
    font-size: 14px;
  }

  ${ButtonContainer} {
    width: auto;
    padding: 8px;
    cursor: pointer;
    margin-top: 16px;
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`
