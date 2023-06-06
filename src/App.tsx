import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Banner } from './components/Banner'
import HeaderMain from './components/HeaderMain'
import HeaderSub from './components/HeaderSub'
import { GlobalCSS } from './styles'
import StoreList from './components/StoreList'
import ProductList from './components/ProductList'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderMain />
        <StoreList />
      </>
    )
  },
  {
    path: '/sushi',
    element: (
      <>
        <HeaderSub />
        <Banner fundo="sushi" loja="Hioki Sushi" tipo="Japonesa" />
        <ProductList lojas="sushi" />
      </>
    )
  },
  {
    path: '/pizza',
    element: (
      <>
        <HeaderSub />
        <Banner
          fundo="italiana"
          loja="La Dolce Vita Trattoria"
          tipo="Italiana"
        />
        <ProductList lojas="pizza" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <RouterProvider router={Rotas} />
      {/* <HeaderSub /> */}
    </>
  )
}

export default App
