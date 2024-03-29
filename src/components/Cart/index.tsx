import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import { CartContainer, Overlay, Sidebar, CartItem, PriceCart } from './styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'
import { parseToBrl } from '../../utils'
import { clear } from '../../store/reducers/cart'

const Cart = () => {
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [cartOn, setCartOn] = useState(true)
  const [deliveryInfo, setDeliveryInfo] = useState(false)
  const dispatch = useDispatch()

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
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

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

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      {cartOn ? (
        <>
          <Overlay onClick={closeCart} />
          <Sidebar>
            {items.length > 0 ? (
              <>
                <ul>
                  {items.map((item) => (
                    <CartItem key={item.id}>
                      <img src={item.foto} alt={item.nome} />
                      <div>
                        <h3>{item.nome}</h3>
                        <p>{parseToBrl(item.preco)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        type="button"
                      />
                    </CartItem>
                  ))}
                </ul>
                <PriceCart>
                  <p>Valor total</p>
                  <p>{parseToBrl(getTotalPrice())}</p>
                </PriceCart>
                <Button
                  title="Clique aqui para continuar com a entrega"
                  type="button"
                  onClick={() => setCartOn(false)}
                >
                  <>Continuar com a entrega</>
                </Button>
              </>
            ) : (
              <p className="empty-text">
                O carrinho está vazio, adicione pelo menos 1 produto para
                continuar com a compra.
              </p>
            )}
          </Sidebar>
        </>
      ) : (
        <>
          {/* CHECKOUT */}
          <CartContainer className={isOpen ? 'is-open' : ''}>
            {isSuccess && data ? (
              <>
                <Overlay />
                <Sidebar className="confirmText">
                  <h3>Pedido realizado - {data.orderId}</h3>

                  <p>
                    Estamos felizes em informar que seu pedido já está em
                    processo de preparação e, em breve, será entregue no
                    endereço fornecido.
                  </p>
                  <p>
                    Gostaríamos de ressaltar que nossos entregadores não estão
                    autorizados a realizar cobranças extras.{' '}
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
                      setCartOn(true)
                      setDeliveryInfo(false)
                      closeCart()
                    }}
                  >
                    <>Concluir pedido</>
                  </Button>
                </Sidebar>
              </>
            ) : (
              <>
                {!deliveryInfo ? (
                  <>
                    <Overlay />
                    <Sidebar className="deliveryInfos">
                      <form className="form">
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
                            className={
                              checkInputHasError('name') ? 'error' : ''
                            }
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
                            className={
                              checkInputHasError('address') ? 'error' : ''
                            }
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
                            className={
                              checkInputHasError('city') ? 'error' : ''
                            }
                          />
                        </div>
                        <div className="twoInputCenter">
                          <div>
                            <label htmlFor="cep">CEP</label>
                            <InputMask
                              id="cep"
                              type="text"
                              name="cep"
                              value={form.values.cep}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="99999-999"
                              className={
                                checkInputHasError('cep') ? 'error' : ''
                              }
                            />
                          </div>
                          <div>
                            <label htmlFor="numberHouse">Número</label>
                            <input
                              id="numberHouse"
                              type="number"
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
                          <label htmlFor="optional">
                            Complemento(opcional)
                          </label>
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
                            title="Clique aqui para continuar para a pagamento"
                            type="button"
                            onClick={() => checkDeliveryInfo()}
                          >
                            <>Continuar com o pagamento</>
                          </Button>
                          <Button
                            title="Clique aqui para voltar para o carrinho"
                            type="button"
                            onClick={() => setCartOn(true)}
                          >
                            <>Voltar para o carrinho</>
                          </Button>
                        </div>
                      </form>
                    </Sidebar>
                  </>
                ) : (
                  <>
                    <Overlay />
                    <Sidebar className="paymentInfos">
                      <form onSubmit={form.handleSubmit} className="form">
                        <h3>
                          Pagamento - Valor a pagar{' '}
                          {parseToBrl(getTotalPrice())}
                        </h3>
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
                            <InputMask
                              id="cardNumber"
                              type="text"
                              name="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="9999 9999 9999 9999"
                              className={
                                checkInputHasError('cardNumber') ? 'error' : ''
                              }
                            />
                          </div>
                          <div className="cvv">
                            <label htmlFor="cvv">CVV</label>
                            <InputMask
                              id="cvv"
                              type="text"
                              name="cvv"
                              value={form.values.cvv}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="999"
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
                            <InputMask
                              id="expiresMonth"
                              type="text"
                              name="expiresMonth"
                              value={form.values.expiresMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="99"
                              maxLength={12}
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
                            <InputMask
                              id="expiresYear"
                              type="text"
                              name="expiresYear"
                              value={form.values.expiresYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              mask="99"
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
                            disabled={isLoading}
                          >
                            <>
                              {isLoading
                                ? 'Finalizando pedido..'
                                : 'Finalizar pedido'}
                            </>
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
