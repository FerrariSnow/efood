import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Banner } from './components/Banner'
import HeaderMain from './components/HeaderMain'
import HeaderSub from './components/HeaderSub'
import { GlobalCSS } from './styles'
import StoreList from './components/StoreList'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeaderMain />
        <StoreList />
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
      {/* <Banner fundo="sushi" loja="Hioki Sushi" tipo="Japonesa" /> */}
    </>
  )
}

export default App
