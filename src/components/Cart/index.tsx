import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, PriceCart } from './styles'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src="https://via.placeholder.com/80x80" alt="" />
            <div>
              <h3>Nome do produto</h3>
              <p>R$ 18,00</p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <ul>
          <CartItem>
            <img src="https://via.placeholder.com/80x80" alt="" />
            <div>
              <h3>Nome do produto</h3>
              <p>R$ 18,00</p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <ul>
          <CartItem>
            <img src="https://via.placeholder.com/80x80" alt="" />
            <div>
              <h3>Nome do produto</h3>
              <p>R$ 18,00</p>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <PriceCart>
          <p>Valor total</p>
          <p>R$ 180,00</p>
        </PriceCart>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          <>Continuar com a entrega</>
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
