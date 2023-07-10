import Product from '../Product'
import { ContainerProducts } from './styles'
import { StoreType } from '../../pages/Home'

export type Props = {
  stores: StoreType[]
}

const ProductList = ({ stores }: Props) => (
  <ContainerProducts className="container">
    {stores.map((store) => (
      <Product
        descricao={store.cardapio.descricao}
        key={store.cardapio.id}
        foto={store.cardapio.foto}
        id={store.cardapio.id}
        nome={store.cardapio.nome}
        porcao={store.cardapio.porcao}
        preco={store.cardapio.preco}
      />
    ))}
  </ContainerProducts>
)

export default ProductList
