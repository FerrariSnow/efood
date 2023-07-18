import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'

import Rotas from './routes'
import { storeRedux } from './store'

function App() {
  return (
    <Provider store={storeRedux}>
      <BrowserRouter>
        <GlobalCSS />
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
