import { useEffect, useState } from 'react'
import { Banner } from '../../components/Banner'
import HeaderMain from '../../components/HeaderMain'
import Footer from '../../components/Footer'
import StoreList from '../../components/StoreList'

export type StoreType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [stores, setStores] = useState<StoreType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setStores(res))
  }, [])

  return (
    <>
      <HeaderMain />
      <StoreList />
      <Footer />
    </>
  )
}

export default Home