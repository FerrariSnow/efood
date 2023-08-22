import Product from '../Product'
import { ContainerProducts } from './styles'

export type Props = {
  cardapios: Foods[]
}

const ProductList = ({ cardapios }: Props) => (
  <ContainerProducts className="container">
    {cardapios.map((store) => (
      <Product key={store.id} pratos={store} />
    ))}
  </ContainerProducts>
)

export default ProductList
