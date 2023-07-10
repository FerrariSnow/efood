import { StoreType } from '../../pages/Home'
import { Container, TipoLoja, TituloLoja } from './styles'

// export type Props = {
//   fundo: string
//   loja: string
//   tipo: string
// }

export type Props = {
  store: StoreType
}

export const Banner = ({ store }: Props) => (
  <Container style={{ backgroundImage: `url(${store.capa})` }}>
    <div className="container">
      <TipoLoja>{store.tipo}</TipoLoja>
      <TituloLoja>{store.titulo}</TituloLoja>
    </div>
  </Container>
)
