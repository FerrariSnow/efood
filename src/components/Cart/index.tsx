import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'

import { CartContainer, Overlay, Sidebar, CartItem, PriceCart } from './styles'
import { RootReducer } from '../../store'

import { close, remove } from '../../store/reducers/cart'

import { formataPreco } from '../Product'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [carrinhoAtivo, setCarrinhoAtivo] = useState(true)
  const [deliveryInfo, setDeliveryInfo] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState(false)

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      numberHouse: '',
      optional: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      cep: Yup.string()
        .min(9, 'O CEP está incorreto')
        .max(9, 'O CEP está incorreto')
        .required('O campo é obrigatório'),
      numberHouse: Yup.string().required('O campo é obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        deliveryInfo ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        deliveryInfo ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        deliveryInfo ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        deliveryInfo ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        deliveryInfo ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.numberHouse),
            complement: values.optional
          }
        },
        payment: {
          card: {
            name: values.cardName,
            cardNumber: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: [{ id: 18, price: 18 }]
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  // console.log(form)

  const checkDeliveryInfo = () => {
    if (
      !form.values.name ||
      !form.values.address ||
      !form.values.city ||
      !form.values.cep ||
      !form.values.numberHouse
    ) {
      return setDeliveryInfo(false)
    } else {
      return setDeliveryInfo(true)
    }
  }

  const checkPaymentInfo = () => {
    if (
      !form.values.cardName ||
      !form.values.cardNumber ||
      !form.values.cvv ||
      !form.values.expiresMonth ||
      !form.values.expiresYear
    ) {
      return setPaymentInfo(false)
    } else {
      return setPaymentInfo(true)
    }
  }

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
                  <form onSubmit={form.handleSubmit} className="form">
                    <h3>Entrega</h3>
                    <div>
                      <label htmlFor="name">Quem irá receber</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.values.name}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('name') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        type="text"
                        name="address"
                        value={form.values.address}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('address') ? 'error' : ''}
                      />
                    </div>
                    <div>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.values.city}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('city') ? 'error' : ''}
                      />
                    </div>
                    <div className="twoInputCenter">
                      <div>
                        <label htmlFor="cep">CEP</label>
                        <input
                          id="cep"
                          type="text"
                          name="cep"
                          value={form.values.cep}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={checkInputHasError('cep') ? 'error' : ''}
                        />
                      </div>
                      <div>
                        <label htmlFor="numberHouse">Número</label>
                        <input
                          id="numberHouse"
                          type="text"
                          name="numberHouse"
                          value={form.values.numberHouse}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          className={
                            checkInputHasError('numberHouse') ? 'error' : ''
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="optional">Complemento(opcional)</label>
                      <input
                        id="optional"
                        type="text"
                        name="optional"
                        value={form.values.optional}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                    </div>
                    <div className="buttons">
                      <Button
                        title="Clique aqui para continuar para a entrega"
                        type="submit"
                        onClick={() => checkDeliveryInfo()}
                      >
                        <>Continuar com o pagamento</>
                      </Button>
                      <Button
                        title="Clique aqui para voltar para o carrinho"
                        type="button"
                        onClick={() => setCarrinhoAtivo(true)}
                      >
                        <>Voltar para o carrinho</>
                      </Button>
                    </div>
                  </form>
                </Sidebar>
              </>
            ) : (
              <>
                {!paymentInfo ? ( // PAGAMENTO
                  <>
                    <Overlay />
                    <Sidebar className="paymentInfos">
                      <form onSubmit={form.handleSubmit} className="form">
                        <h3>Pagamento - Valor a pagar R$ 180,18</h3>
                        <div>
                          <label htmlFor="cardName">Nome no cartão</label>
                          <input
                            id="cardName"
                            type="text"
                            name="cardName"
                            value={form.values.cardName}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                              checkInputHasError('cardName') ? 'error' : ''
                            }
                          />
                        </div>
                        <div className="twoInputs">
                          <div className="cardNumberClass">
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input
                              id="cardNumber"
                              type="text"
                              name="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardNumber') ? 'error' : ''
                              }
                            />
                          </div>
                          <div className="cvv">
                            <label htmlFor="cvv">CVV</label>
                            <input
                              id="cvv"
                              type="text"
                              name="cvv"
                              value={form.values.cvv}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cvv') ? 'error' : ''
                              }
                            />
                          </div>
                        </div>
                        <div className="twoInputCenter">
                          <div>
                            <label htmlFor="expiresMonth">
                              Mês de vencimento
                            </label>
                            <input
                              id="expiresMonth"
                              type="number"
                              name="expiresMonth"
                              value={form.values.expiresMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresMonth')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="expiresYear">
                              Ano de vencimento
                            </label>
                            <input
                              id="expiresYear"
                              type="number"
                              name="expiresYear"
                              value={form.values.expiresYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('expiresYear') ? 'error' : ''
                              }
                            />
                          </div>
                        </div>

                        <div className="buttons">
                          <Button
                            title="Clique aqui para finalizar o pagamento"
                            type="submit"
                            onClick={() => checkPaymentInfo()}
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
                      </form>
                    </Sidebar>
                  </>
                ) : (
                  <>
                    <Overlay />
                    {/* AGRADECIMENTO */}
                    <Sidebar className="confirmText">
                      <h3>Pedido realizado - XXXXXXXXX</h3>

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
