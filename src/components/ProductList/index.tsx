import Product from '../Product'
import { ContainerProducts } from './styles'
import { Foods } from '../../pages/Home'

export type Props = {
  cardapios: Foods[]
}

const ProductList = ({ cardapios }: Props) => (
  <ContainerProducts className="container">
    {cardapios.map((store) => (
      <Product
        pratos={store}
        // descricao={store.descricao}
        key={store.id}
        // foto={store.foto}
        // id={store.id}
        // nome={store.nome}
        // porcao={store.porcao}
        // preco={store.preco}
      />
    ))}
  </ContainerProducts>
)

export default ProductList
