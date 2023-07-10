import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StorePage from './pages/Store'

const RotasTEST = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store/:id" element={<StorePage />} />
    </Routes>
  )
}

export default RotasTEST
