import Product from '../Product'
import { ContainerProducts } from './styles'

type Props = {
  lojas: 'sushi' | 'pizza'
}

const ProductList = ({ lojas }: Props) => (
  <ContainerProducts className="container">
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
  </ContainerProducts>
)

export default ProductList
