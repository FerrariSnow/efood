import Store from '../Store'
import { ContainerStores } from './styles'
import { getDescricao } from '../Product'

export type Props = {
  stores: ExtendedStoreType
}

const StoreList = ({ stores }: Props) => {
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
          descricao={getDescricao(stores.descricao)}
          tags={getStoreTags(stores)}
          to={`/store/${stores.id}`}
        />
      ))}
    </ContainerStores>
  )
}

export default StoreList
