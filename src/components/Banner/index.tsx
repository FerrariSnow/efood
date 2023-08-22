import { Container, StoreTypeFoods, StoreTitle } from './styles'

export type Props = {
  store: StoreType
}

export const Banner = ({ store }: Props) => (
  <Container style={{ backgroundImage: `url(${store.capa})` }}>
    <div className="container">
      <StoreTypeFoods>{store.tipo}</StoreTypeFoods>
      <StoreTitle>{store.titulo}</StoreTitle>
    </div>
  </Container>
)
