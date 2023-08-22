import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import Insta from '../../assets/images/insta.svg'
import Facebook from '../../assets/images/face.svg'
import Twitter from '../../assets/images/twitter.svg'
import { FooterContainer, SocialMedias } from './styles'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Link title="Clique aqui para voltar para a página inicial" to="/">
        <img src={Logo} alt="Logo da eFood" />
      </Link>
      <SocialMedias>
        <Link title="Ícone do Instagram" to="#">
          <img
            src={Insta}
            alt="Botões sem redes sociais cadastradas, apenas para fins visuais"
          />
        </Link>
        <Link title="Ícone do Facebook" to="#">
          <img
            src={Facebook}
            alt="Botões sem redes sociais cadastradas, apenas para fins visuais"
          />
        </Link>
        <Link title="Ícone do Twitter" to="#">
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
