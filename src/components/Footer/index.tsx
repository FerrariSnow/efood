import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import Insta from '../../assets/images/insta.svg'
import Facebook from '../../assets/images/face.svg'
import Twitter from '../../assets/images/twitter.svg'
import { FooterContainer, SocialMedias } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link to="/">
        <img src={Logo} alt="Logo da eFood" />
      </Link>
      <SocialMedias>
        <Link to="#">
          <img
            src={Insta}
            alt="Botões sem redes sociais cadastradas, apenas para fins visuais"
          />
        </Link>
        <Link to="#">
          <img
            src={Facebook}
            alt="Botões sem redes sociais cadastradas, apenas para fins visuais"
          />
        </Link>
        <Link to="#">
          <img
            src={Twitter}
            alt="Botões sem redes sociais cadastradas, apenas para fins visuais"
          />
        </Link>
      </SocialMedias>
      <p>
        A eFood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </div>
  </FooterContainer>
)

export default Footer
