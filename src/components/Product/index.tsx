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

type Props = {
  loja: 'sushi' | 'pizza'
}

const Product = ({ loja }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (
    <>
      <CardProduct
        onClick={() => {
          setModalIsOpen(true)
          setModalUrl(PizzaModal)
        }}
      >
        <img src={Pizza} alt="" />
        <TitleProduct>Pizza Marguerita</TitleProduct>
        <DescriptionProduct>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </DescriptionProduct>
        <Button type="button" title="Adicionar produto ao carrinho">
          Adicionar ao carrinho
        </Button>
      </CardProduct>
      <Modal className={modalIsOpen ? 'visible' : ''}>
        <ModalContent className="container">
          <div className="modal-img">
            <img src={modalUrl} alt="Imagem do produto" />
          </div>
          <div className="modal-info">
            <TitleProduct>Pizza Marguerita</TitleProduct>
            <DescriptionProduct>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
              <br />
              <br />
              Serve: de 2 a 3 pessoas.
            </DescriptionProduct>
            <Button type="button" title="Adicionar produto ao carrinho">
              Adicionar ao carrinho - R$ 60,90
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
