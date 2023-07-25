import { HeaderContainer, HeaderText, CartButton } from './styles'

import CabecalhoImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderSub = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderContainer style={{ backgroundImage: `url(${CabecalhoImg})` }}>
        <HeaderText>Restaurantes</HeaderText>
        <Link to="/">
          <img src={Logo} alt="Logo da eFood" />
        </Link>
        <HeaderText>
          <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
        </HeaderText>
      </HeaderContainer>
    </>
  )
}

export default HeaderSub
