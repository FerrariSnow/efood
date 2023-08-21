import { DotLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <DotLoader color={colors.main} />
  </Container>
)

export default Loader
