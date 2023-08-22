declare type StoreType = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: string
  cardapio: Array<Foods>
  descricao: string
  capa: string
}

declare type ExtendedStoreType = StoreType[] & {
  length: number
  pop(): StoreType | undefined
  push(...items: StoreType[]): number
  concat(...items: ConcatArray<StoreType>[]): StoreType[]
}

declare type Foods = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
