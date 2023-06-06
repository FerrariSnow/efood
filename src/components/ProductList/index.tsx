import Product from '../Product'
import { Container } from './styles'

type Props = {
  lojas: 'sushi' | 'pizza'
}

const ProductList = ({ lojas }: Props) => (
  <Container className="container">
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
    <Product loja={lojas} />
  </Container>
)

export default ProductList
