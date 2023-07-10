import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StoreType } from '../Home'
import HeaderSub from '../../components/HeaderSub'
import { Banner } from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Footer from '../../components/Footer'
import Product from '../../components/Product'

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

  // const teste = stores.cardapio
  // {
  //   console.log(`id da pagina:${id}`)
  // }

  // const testete = Object.entries(teste)

  // const agoravai = Object.values(testete)

  return (
    <>
      <HeaderSub />
      <Banner store={stores} />
      <ProductList stores={stores.cardapio} />

      <Footer />
    </>
  )
}

export default StorePage

// produto.map((item) => {
//   const valores = Object.values(item)
//   valores.map((valor) => (
//     // console.log(valores)

//     <Product
//       id={valores[2]}
//       descricao={valores[4]}
//       foto={valores[0]}
//       nome={valores[3]}
//       porcao={valores[5]}
//       preco={valores[1]}
//       key={valores[2]}
//     />
//   ))
// })
