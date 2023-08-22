import { HeaderContainer, HeaderText, CartButton } from './styles'

import HeaderImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderSub = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${HeaderImg})` }}>
        <HeaderText>Restaurantes</HeaderText>
        <Link title="Clique aqui para ir para a página inicial" to="/">
          <img src={Logo} alt="Logo da eFood" />
        </Link>
        <HeaderText>
          <CartButton role="button" onClick={openCart}>
            {items.length} produto(s) no carrinho
          </CartButton>
        </HeaderText>
      </HeaderContainer>
    </>
  )
}

export default HeaderSub
