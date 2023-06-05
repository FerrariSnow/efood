import { HeaderContainer, HeaderTitle } from './styles'

import CabecalhoImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'

const HeaderMain = () => (
  <HeaderContainer style={{ backgroundImage: `url(${CabecalhoImg})` }}>
    <img src={Logo} alt="Logo da eFood" />
    <HeaderTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderTitle>
  </HeaderContainer>
)

export default HeaderMain
