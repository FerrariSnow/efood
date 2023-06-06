import { HeaderContainer, HeaderText } from './styles'

import CabecalhoImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderSub = () => (
  <>
    <HeaderContainer style={{ backgroundImage: `url(${CabecalhoImg})` }}>
      <HeaderText>Restaurantes</HeaderText>
      <Link to="/">
        <img src={Logo} alt="Logo da eFood" />
      </Link>
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </HeaderContainer>
  </>
)

export default HeaderSub
