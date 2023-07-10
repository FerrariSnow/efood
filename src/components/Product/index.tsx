import Button from '../Button'
import {
  CardProduct,
  DescriptionProduct,
  Modal,
  ModalContent,
  TitleProduct
} from './styles'

import Sushi from '../../assets/images/sushi.png'
import Pizza from '../../assets/images/pizza.png'
import PizzaModal from '../../assets/images/modal-imagem.png'
import Close from '../../assets/images/close.svg'
import { useState } from 'react'
import Store from '../Store'
import { StoreType } from '../../pages/Home'
import { useParams } from 'react-router-dom'

type Props = {
  id?: number
  titulo?: string
  destacado?: boolean
  tipo?: string
  avaliacao?: string
  descricao?: string
  capa?: string
  cardapio: {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
  }
}

type cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Product = ({ descricao, foto, nome, porcao, preco }: cardapio) => {
  const { id } = useParams()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  // const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      {/* {console.log(descricao)} */}
      <CardProduct
        onClick={() => {
          setModalIsOpen(true)
          // setModalUrl(cardapio.foto)
        }}
      >
        <img src={foto} alt="" />
        <TitleProduct>{nome}</TitleProduct>
        <DescriptionProduct>{descricao}</DescriptionProduct>
        <Button type="button" title="Adicionar produto ao carrinho">
          Adicionar ao
        </Button>
      </CardProduct>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="modal-img">
            <img src={foto} alt="Imagem do produto" />
          </div>
          <div className="modal-info">
            <TitleProduct>teste</TitleProduct>
            <DescriptionProduct>
              testeetstse
              <br />
              <br />
              Serve: teste
            </DescriptionProduct>
            <Button type="button" title="Adicionar produto ao carrinho">
              Adicionar ao carrinho -
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
