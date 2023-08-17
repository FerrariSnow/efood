import HeaderMain from '../../components/HeaderMain'
import Footer from '../../components/Footer'
import StoreList from '../../components/StoreList'

import { useGetStoresQuery } from '../../services/api'

export type StoreType = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  cardapio: Array<Foods>
  descricao: string
  capa: string
}

export type ExtendedStoreType = StoreType[] & {
  length: number
  pop(): StoreType | undefined
  push(...items: StoreType[]): number
  concat(...items: ConcatArray<StoreType>[]): StoreType[]
}

export type Foods = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Home = () => {
  const { data: stores } = useGetStoresQuery()

  if (!stores) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderMain />
      <StoreList stores={stores} />
      <Footer />
    </>
  )
}

export default Home
