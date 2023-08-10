import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, PriceCart } from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { formataPreco } from '../Product'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(true)
  const [deliveryInfo, setDeliveryInfo] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState(false)

  // const checkDeliveryInfo = () => {

  // return setDeliveryInfo(true)
  // }

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {carrinhoAtivo ? (
        <>
          <Overlay onClick={closeCart} />
          <Sidebar>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{formataPreco(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <PriceCart>
              <p>Valor total</p>
              <p>{formataPreco(getTotalPrice())}</p>
            </PriceCart>
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => setCarrinhoAtivo(false)}
            >
              <>Continuar com a entrega</>
            </Button>
          </Sidebar>
        </>
      ) : (
        <>
          {/* CHECKOUT */}
          <CartContainer className={isOpen ? 'is-open' : ''}>
            {!deliveryInfo ? (
              <>
                <Overlay />
                <Sidebar className="deliveryInfos">
                  <div className="form">
                    <h3>Entrega</h3>
                    <div>
                      <label htmlFor="name">Quem irá receber</label>
                      <input id="name" type="text" />
                    </div>
                    <div>
                      <label htmlFor="address">Endereço</label>
                      <input id="address" type="text" />
                    </div>
                    <div>
                      <label htmlFor="city">Cidade</label>
                      <input id="city" type="text" />
                    </div>
                    <div className="twoInputCenter">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" type="number" />
                      </div>
                      <div>
                        <label htmlFor="number">Número</label>
                        <input id="number" type="number" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="optional">Complemente(opcional)</label>
                      <input id="optional" type="text" />
                    </div>
                    <div className="buttons">
                      <Button
                        title="Clique aqui para continuar com a entrega"
                        type="button"
                        onClick={() => setDeliveryInfo(true)}
                      >
                        <>Continuar com o pagamento</>
                      </Button>
                      <Button
                        title="Clique aqui para continuar com a entrega"
                        type="button"
                        onClick={() => setCarrinhoAtivo(true)}
                      >
                        <>Voltar para o carrinho</>
                      </Button>
                    </div>
                  </div>
                </Sidebar>
              </>
            ) : (
              <>
                {!paymentInfo ? ( // PAGAMENTO
                  <>
                    <Overlay />
                    <Sidebar className="paymentInfos">
                      <div className="form">
                        <h3>Pagamento - Valor a pagar R$ 180,18</h3>
                        <div>
                          <label htmlFor="cardName">Nome no cartão</label>
                          <input id="cardName" type="text" />
                        </div>
                        <div className="twoInputs">
                          <div className="teste1">
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input id="cardNumber" type="text" />
                          </div>
                          <div className="cvv">
                            <label htmlFor="cvv">CVV</label>
                            <input id="cvv" type="number" />
                          </div>
                        </div>
                        <div className="twoInputCenter">
                          <div>
                            <label htmlFor="expiresMonth">
                              Mês de vencimento
                            </label>
                            <input id="expiresMonth" type="number" />
                          </div>
                          <div>
                            <label htmlFor="expiresYear">
                              Ano de vencimento
                            </label>
                            <input id="expiresYear" type="number" />
                          </div>
                        </div>

                        <div className="buttons">
                          <Button
                            title="Clique aqui para finalizar o pagamento"
                            type="button"
                            onClick={() => setPaymentInfo(true)}
                          >
                            <>Finalizar pagamento</>
                          </Button>
                          <Button
                            title="Clique aqui para voltar e editar dados da entrega"
                            type="button"
                            onClick={() => setDeliveryInfo(false)}
                          >
                            <>Voltar para edição de endereço</>
                          </Button>
                        </div>
                      </div>
                    </Sidebar>
                  </>
                ) : (
                  <>
                    <Overlay />
                    {/* AGRADECIMENTO */}
                    <Sidebar className="confirmText">
                      <h3>Pedido realizado - 1213123</h3>

                      <p>
                        Estamos felizes em informar que seu pedido já está em
                        processo de preparação e, em breve, será entregue no
                        endereço fornecido.
                      </p>
                      <p>
                        Gostaríamos de ressaltar que nossos entregadores não
                        estão autorizados a realizar cobranças extras.{' '}
                      </p>
                      <p>
                        Lembre-se da importância de higienizar as mãos após o
                        recebimento do pedido, garantindo assim sua segurança e
                        bem-estar durante a refeição.
                      </p>
                      <p>
                        Esperamos que desfrute de uma deliciosa e agradável
                        experiência gastronômica. Bom apetite!
                      </p>
                      <Button
                        title="Concluir pedido"
                        type="button"
                        onClick={() => {
                          setCarrinhoAtivo(true)
                          setDeliveryInfo(false)
                          setPaymentInfo(false)
                          closeCart()
                        }}
                      >
                        <>Concluir pedido</>
                      </Button>
                    </Sidebar>
                  </>
                )}
              </>
            )}
          </CartContainer>
        </>
      )}
    </CartContainer>
  )
}

export default Cart
