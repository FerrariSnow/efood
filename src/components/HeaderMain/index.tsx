import { HeaderContainer, HeaderTitle } from './styles'

import CabecalhoImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderMain = () => (
  <HeaderContainer style={{ backgroundImage: `url(${CabecalhoImg})` }}>
    <Link to="/">
      <img src={Logo} alt="Logo da eFood" />
    </Link>
    <HeaderTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderTitle>
  </HeaderContainer>
)

export default HeaderMain
