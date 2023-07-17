import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreType } from '../Home'
import HeaderSub from '../../components/HeaderSub'
import { Banner } from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'

const StorePage = () => {
  const { id } = useParams()

  const [stores, setStores] = useState<StoreType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setStores(res))
  }, [id])

  if (!stores) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderSub />
      <Banner store={stores} />
      <ProductList cardapios={stores.cardapio} />

      <Footer />
    </>
  )
}

export default StorePage
