import Button from '../Button'
import { CardProduct, DescriptionProduct, TitleProduct } from './styles'

import Sushi from '../../assets/images/sushi.png'
import Pizza from '../../assets/images/pizza.png'

type Props = {
  loja: 'sushi' | 'pizza'
}

const Product = ({ loja }: Props) => {
  if (loja === 'sushi') {
    return (
      <CardProduct>
        <img src={Sushi} alt="" />
        <TitleProduct>Sushi</TitleProduct>
        <DescriptionProduct>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem saepe
          est illum! Vero, vitae deleniti. Culpa, expedita fuga. Nam deleniti at
          illum
        </DescriptionProduct>
        <Button type="button" title="Adicionar produto ao carrinho">
          Adicionar ao carrinho
        </Button>
      </CardProduct>
    )
  }
  return (
    <CardProduct>
      <img src={Pizza} alt="" />
      <TitleProduct>Pizza Marguerita</TitleProduct>
      <DescriptionProduct>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </DescriptionProduct>
      <Button type="button" title="Adicionar produto ao carrinho">
        Adicionar ao carrinho
      </Button>
    </CardProduct>
  )
}

export default Product
