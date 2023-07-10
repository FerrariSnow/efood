import Store from '../Store'
import { ContainerStores } from './styles'
import { StoreType } from '../../pages/Home'

export type Props = {
  stores: StoreType[]
}

const StoreList = ({ stores }: Props) => {
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getStoreTags = (stores: StoreType) => {
    const tags = []

    if (stores.destacado) {
      tags.push('Destaque da semana')
    }
    if (stores.tipo) {
      tags.push(stores.tipo)
    }

    return tags
  }

  return (
    <ContainerStores className="container">
      {stores.map((stores) => (
        <Store
          key={stores.id}
          imagem={stores.capa}
          nome={stores.titulo}
          nota={stores.avaliacao}
          descricao={stores.descricao}
          tags={getStoreTags(stores)}
          to={`/store/${stores.id}`}
        />
      ))}
    </ContainerStores>
  )
}

export default StoreList
