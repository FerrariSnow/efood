import Star from '../../assets/images/star.svg'
import Button from '../Button'
import Tag from '../Tag'
import { StoreCard, StoreDescription, StoreInfos, StoreTags } from './styles'

type Props = {
  imagem: string
  nome: string
  nota: string
  descricao: string
  tags: string[]
  to: string
}

const Store = ({ imagem, nome, nota, descricao, tags, to }: Props) => (
  <StoreCard>
    <img src={imagem} alt={nome} />
    <StoreTags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </StoreTags>
    <StoreInfos>
      <h3>{nome} </h3>
      <div>
        {nota} <img src={Star} />
      </div>
    </StoreInfos>
    <StoreDescription>{descricao}</StoreDescription>
    <Button type="link" to={to} title="Saiba mais sobre a loja">
      <>Saiba mais</>
    </Button>
  </StoreCard>
)

export default Store
