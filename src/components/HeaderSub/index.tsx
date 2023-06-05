import { HeaderContainer, HeaderText } from './styles'

import CabecalhoImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'

const HeaderSub = () => (
  <>
    <HeaderContainer style={{ backgroundImage: `url(${CabecalhoImg})` }}>
      <HeaderText>Restaurantes</HeaderText>
      <img src={Logo} alt="Logo da eFood" />
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </HeaderContainer>
  </>
)

export default HeaderSub
