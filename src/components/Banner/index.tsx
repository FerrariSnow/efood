import { Container, TipoLoja, TituloLoja } from './styles'

export type Props = {
  fundo: 'italiana' | 'sushi'
  loja: string
  tipo: string
}

export const Banner = ({ fundo, loja, tipo }: Props) => (
  <Container fundo={fundo}>
    <div className="container">
      <TipoLoja>{tipo}</TipoLoja>
      <TituloLoja>{loja}</TituloLoja>
    </div>
  </Container>
)
