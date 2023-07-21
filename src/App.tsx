import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'

import Rotas from './routes'
import { storeRedux } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={storeRedux}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
