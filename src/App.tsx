import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes
} from 'react-router-dom'

import { Banner } from './components/Banner'
import HeaderMain from './components/HeaderMain'
import HeaderSub from './components/HeaderSub'
import { GlobalCSS } from './styles'

import ProductList from './components/ProductList'
import Footer from './components/Footer'

import RotasTEST from './routes'
import StoreList from './components/StoreList'

const RotasAntigas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderMain />
        <StoreList />
        <Footer />
      </>
    )
  },
  {
    path: '/store',
    element: (
      <>
        <HeaderSub />
        <Banner fundo="sushi" loja="Hioki Sushi" tipo="Japonesa" />
        <ProductList lojas="sushi" />
        <Footer />
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
        <Footer />
      </>
    )
  }
])

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      {/* <RouterProvider router={Rotas} /> */}
      {/* <HeaderSub /> */}
      <RotasTEST />
    </BrowserRouter>
  )
}

export default App
