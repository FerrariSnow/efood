import { useParams } from 'react-router-dom'
import HeaderSub from '../../components/HeaderSub'
import { Banner } from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import { useGetStoreQuery } from '../../services/api'
import Loader from '../../components/Loader'

const StorePage = () => {
  const { id } = useParams()
  const { data: store } = useGetStoreQuery(id!)

  if (!store) {
    return <Loader />
  }

  return (
    <>
      <HeaderSub />
      <Banner store={store} />
      <ProductList cardapios={store.cardapio} />
      <Footer />
    </>
  )
}

export default StorePage
