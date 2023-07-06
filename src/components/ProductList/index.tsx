import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Product'
import { ContainerProducts } from './styles'
import { StoreType } from '../../pages/Home'

const ProductList = () => {
  const { id } = useParams()

  const [storeProducts, setStoreProducts] = useState<StoreType[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setStoreProducts(res))
  }, [id])

  return (
    <>
      <ContainerProducts className="container">
        {/* TODO FAZER O PRODUCT LIST FUNCIONAR */}
      </ContainerProducts>
    </>
  )
}

export default ProductList
