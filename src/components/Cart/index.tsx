import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, PriceCart } from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { formataPreco } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <PriceCart>
          <p>Valor total</p>
          <p>{formataPreco(getTotalPrice())}</p>
        </PriceCart>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          <>Continuar com a entrega</>
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
