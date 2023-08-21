import { HeaderContainer, HeaderTitle } from './styles'

import HeaderImg from '../../assets/images/cabecalho.png'
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const HeaderMain = () => (
  <HeaderContainer style={{ backgroundImage: `url(${HeaderImg})` }}>
    <Link title="Logo da loja" to="/">
      <img src={Logo} alt="Logo da eFood" />
    </Link>
    <HeaderTitle>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderTitle>
  </HeaderContainer>
)

export default HeaderMain
