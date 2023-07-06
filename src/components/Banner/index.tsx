import { Container, TipoLoja, TituloLoja } from './styles'

export type Props = {
  fundo: string
  loja: string
  tipo: string
}

export const Banner = ({ fundo, loja, tipo }: Props) => (
  <Container style={{ backgroundImage: `url(${fundo})` }} fundo={fundo}>
    <div className="container">
      <TipoLoja>{tipo}</TipoLoja>
      <TituloLoja>{loja}</TituloLoja>
    </div>
  </Container>
)
