const {
  deepEqual,
  ok,
  deepStrictEqual
} = require('assert')

const database = require('./database')

const DEFAULT_ITEM_CADASTRAR = {
  nome: 'flash',
  poder: 'speed',
  id: 1
}

const DEFAULT_ITEM_ATUALIZAR = {
  nome: 'Lanterna Verde',
  poder: 'Energia do Anel',
  id: 2
}

describe('Hero manipulation Suit', () => {
  before(async()=>{
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
  })
  

  it('Shoud be able to find a hero using files', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
    deepStrictEqual(resultado, expected)
  })

  it('Shoud be able to register heroes using files', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const  [actual]= await database.listar(DEFAULT_ITEM_CADASTRAR.id)
    deepStrictEqual(actual, expected)
  })
  it('should be able to update hero', async () => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    const novoDado = {
      nome: 'Batman',
      poder: 'Dinheiro'
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)

    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)

    deepStrictEqual(resultado, expected)
  })
  it('Shoud be able to remove hero', async () => {
    const expected = true
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepStrictEqual(resultado, expected)
  })

})