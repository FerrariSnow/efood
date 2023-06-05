import { Banner } from './components/Banner'
import HeaderMain from './components/HeaderMain'
import HeaderSub from './components/HeaderSub'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <HeaderMain />
      {/* <HeaderSub /> */}
      <Banner fundo="italiana" loja="La Dolce Vita Trattoria" tipo="Italiana" />
      <Banner fundo="sushi" loja="Hioki Sushi" tipo="Japonesa" />
    </>
  )
}

export default App
