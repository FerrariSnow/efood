import Store from '../Store'
import { ContainerStores } from './styles'

import Sushi from '../../assets/images/loja1.png'
import Pizza from '../../assets/images/loja2.png'

const StoreList = () => (
  <ContainerStores className="container">
    <Store
      imagem={Sushi}
      nome="Hioki Sushi"
      nota="4.9"
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      tags={['Destaque da semana', 'Japonesa']}
      to="/sushi"
    />
    <Store
      imagem={Pizza}
      nome="La Dolce Vita Trattoria"
      nota="4,8"
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      tags={['Italiana']}
      to="/pizza"
    />
    <Store
      imagem={Pizza}
      nome="La Dolce Vita Trattoria"
      nota="4,8"
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      tags={['Italiana']}
      to="/pizza"
    />
    <Store
      imagem={Sushi}
      nome="Hioki Sushi"
      nota="4.9"
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      tags={['Japonesa']}
      to="/sushi"
    />
    <Store
      imagem={Sushi}
      nome="Hioki Sushi"
      nota="4.9"
      descricao="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
      tags={['Japonesa']}
      to="/sushi"
    />
    <Store
      imagem={Pizza}
      nome="La Dolce Vita Trattoria"
      nota="4,8"
      descricao="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
      tags={['Destaque da semana', 'Italiana']}
      to="/pizza"
    />
  </ContainerStores>
)

export default StoreList
