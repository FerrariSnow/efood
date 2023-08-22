import HeaderMain from '../../components/HeaderMain'
import Footer from '../../components/Footer'
import StoreList from '../../components/StoreList'

import { useGetStoresQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: stores } = useGetStoresQuery()

  if (!stores) {
    return <Loader />
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
