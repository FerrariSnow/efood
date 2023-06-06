import Star from '../../assets/images/star.svg'
import Button from '../Button'
import Tag from '../Tag'
import { CardLoja, DescricaoLoja, InfosLoja, TagsLoja } from './styles'

type Props = {
  imagem: string
  nome: string
  nota: string
  descricao: string
  tags: string[]
  to: string
}

const Store = ({ imagem, nome, nota, descricao, tags, to }: Props) => (
  <CardLoja>
    <img src={imagem} alt={nome} />
    <TagsLoja>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagsLoja>
    <InfosLoja>
      <h3>{nome} </h3>
      <div>
        {nota} <img src={Star} />
      </div>
    </InfosLoja>
    <DescricaoLoja>{descricao}</DescricaoLoja>
    <Button type="link" to={to} title="Saiba mais sobre a loja">
      Saiba mais
    </Button>
  </CardLoja>
)

export default Store
