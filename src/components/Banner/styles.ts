import styled from 'styled-components'

import { Props } from '.'

import Sushi from '../../assets/images/bannerSushi.png'
import Pizzaria from '../../assets/images/bannerPizza.png'

export const Container = styled.div<Omit<Props, 'loja' | 'tipo'>>`
  background-image: ${(props) =>
    props.fundo === 'sushi' ? `url(${Sushi})` : `url(${Pizzaria})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  width: 100%;
  display: block;
  color: #fff;
  position: relative;
  margin-bottom: 80px;
`

export const TituloLoja = styled.h2`
  position: absolute;
  bottom: 32px;
  width: 676px;
  height: 33.25px;
  font-size: 32px;
  line-height: 38px;
`
export const TipoLoja = styled.p`
  position: absolute;
  width: 101px;
  height: 33.25px;
  top: 25px;

  font-weight: 100;
  font-size: 32px;
  line-height: 38px;
`
