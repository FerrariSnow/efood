import Button from '../Button'
import {
  CardProduct,
  DescriptionProduct,
  Modal,
  ModalContent,
  Teste,
  TitleProduct
} from './styles'

import Close from '../../assets/images/close.svg'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

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
  const formataPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <>
      <Teste>
        <CardProduct
          onClick={() => {
            setModalIsOpen(true)
          }}
        >
          <img src={foto} alt="" />
          <TitleProduct>{nome}</TitleProduct>
          <DescriptionProduct>{descricao}</DescriptionProduct>
        </CardProduct>
        <Button type="button" title="Adicionar produto ao carrinho">
          <>Adicionar ao carrinho - {formataPreco(preco)}</>
        </Button>
      </Teste>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="modal-img">
            <img src={foto} alt="Imagem do produto" />
          </div>
          <div className="modal-info">
            <TitleProduct>{nome}</TitleProduct>
            <DescriptionProduct>
              {descricao}
              <br />
              <br />
              Serve: {porcao}
            </DescriptionProduct>
            <Button type="button" title="Adicionar produto ao carrinho">
              <>Adicionar ao carrinho - {formataPreco(preco)}</>
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
