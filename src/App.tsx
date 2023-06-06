import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Banner } from './components/Banner'
import HeaderMain from './components/HeaderMain'
import HeaderSub from './components/HeaderSub'
import { GlobalCSS } from './styles'

const Rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <Banner fundo="italiana" loja="La Dolce Vita Trattoria" tipo="Italiana" />
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
