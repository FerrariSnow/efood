import Button from '../Button'
import {
  CardProduct,
  DescriptionProduct,
  Modal,
  ModalContent,
  TitleProduct
} from './styles'

import Close from '../../assets/images/close.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'

type cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

type Props = {
  pratos: cardapio
}

export const formataPreco = (preco: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescricao = (description: string) => {
  if (description.length > 135) {
    return description.slice(0, 135) + '...'
  }
  return description
}

const Product = ({ pratos }: Props) => {
  // const { id } = useParams()

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(pratos))
    dispatch(open())
  }

  return (
    <>
      <CardProduct
        onClick={() => {
          setModalIsOpen(true)
        }}
      >
        <img src={pratos.foto} alt={pratos.nome} />
        <TitleProduct>{pratos.nome}</TitleProduct>
        <DescriptionProduct>
          {getDescricao(pratos.descricao)}
        </DescriptionProduct>
        <Button type="button" title="Clique para ver mais detalhes do produto">
          <>Mais detalhes</>
        </Button>
      </CardProduct>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="modal-img">
            <img src={pratos.foto} alt="Imagem do produto" />
          </div>
          <div className="modal-info">
            <TitleProduct>{pratos.nome}</TitleProduct>
            <DescriptionProduct>
              {pratos.descricao} <br />
            </DescriptionProduct>
            <div>Serve: {pratos.porcao}</div>
            <Button
              type="button"
              title="Adicionar produto ao carrinho"
              onClick={addToCart}
            >
              <>Adicionar ao carrinho - {formataPreco(pratos.preco)}</>
            </Button>
          </div>
          <div className="close">
            <img src={Close} alt="" onClick={() => setModalIsOpen(false)} />
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => setModalIsOpen(false)}></div>
      </Modal>
    </>
  )
}

export default Product
