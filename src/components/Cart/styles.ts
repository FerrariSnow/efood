import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import trash from '../../assets/images/trash.svg'
import { ButtonContainer } from '../Button/styles'

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
  background-color: ${colors.main};
  padding: 32px 16px 0 16px;
  max-width: 360px;
  width: 100%;
  z-index: 1;

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }

  @media (max-width: ${breakpoints.celular}) {
    max-width: 70%;
  }

  &.deliveryInfos, &.paymentInfos {
    display: flex;

    .form {
      margin: 0 auto;

        label {
        font-size: 14px;
        line-height: 16px;
        font-weight: 700;
        color: ${colors.secondary};
        margin-top: 8px;
        display: block;
        margin-bottom: 8px;
      }

      input {
        background-color: ${colors.secondary};
        height: 32px;
        width: 100%;
        padding: 0 8px;
        border: 2px; solid ${colors.secondary}
        font-size: 14px;

        &.error {
          border: 2px solid red;
        }
      }

      h3 {
        font-size: 16px;
        line-height: 18px;
        color: ${colors.secondary};
        margin-bottom: 16px;
      }

      .twoInputs {
        display: flex;
        width: auto;

        .cardNumberClass {
          width: 70%;
        }

        .cvv {
          width: 30%;
          margin-left: 30px;
        }

        input {
          width: 100%;

          &.error {
            border: 2px solid red;
          }
        }

            @media (max-width: ${breakpoints.celular}) {
              width: 100%;
            }
          }

        }

        .twoInputCenter {
          display: flex;
          justify-content: space-between;

          >div {
            max-width: 150px;
            width: 100%;
            display: inline-block;
          }

          @media (max-width: ${breakpoints.celular}) {
            display: block;
          }

      }
      .buttons {
        margin-top: 24px;

        ${ButtonContainer} {
          margin-bottom: 8px;
        }
      }
    }

  &.confirmText {
    color: ${colors.white};

    h3 {
      font-size: 16px;
      line-height: 18px;
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
      font-weight: 400;
      margin-bottom: 30px;
    }
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  height: 100px;
  background-color: ${colors.secondary};
  color: ${colors.main};
  margin-bottom: 16px;
  padding: 8px;

  h3 {
    font-weight: 900;
    font-size: 18px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
    }
  }

  img {
    max-height: 80px;
    max-width: 80px;
    height: 100%;
    width: 100%;
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
