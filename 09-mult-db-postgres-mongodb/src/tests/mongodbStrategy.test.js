const assert = require('assert')
const MongoDB = require('./../db/strategies/mongodb')
const Context = require('./../db/strategies/base/contextStrategy')

const context = new Context(new MongoDB())


const MOCK_HEROI_CADASTRAR = {
  nome: 'Mulher Maravilha',
  poder: 'Laço'
}

const MOCK_HEROI_DEFAULT = {
  nome: `Miranha - ${Date.now()}`,
  poder: 'Teia'
}

const MOCK_HEROI_ATUALIZAR = {
  nome: `Patoranha - ${Date.now()}`,
  poder: 'velocidade'
}

let MOCK_HEROI_ID

describe('MongoDb suite de testes', function () {
  this.beforeAll(async() => {
   await context.connect()
   await context.create(MOCK_HEROI_DEFAULT)
   const result = await context.create(MOCK_HEROI_ATUALIZAR)
   MOCK_HEROI_ID = result._id
  })
  it('Should be able to connect',async () =>{
    const result = await context.isConnected()
    console.log('result',result)
    const expected = 'Conectado'

    assert.deepStrictEqual(result, expected)
  })

  it('Should be able to create a hero', async () => {
    const {nome, poder} = await context.create(MOCK_HEROI_CADASTRAR)
    assert.deepStrictEqual({nome, poder}, MOCK_HEROI_CADASTRAR)
  })

  it('Should be able to list hero', async () => {
   const [{nome,poder}] = await context.read({nome: MOCK_HEROI_CADASTRAR.nome})
   const result = {
     nome, poder
   }
   assert.deepStrictEqual(result, MOCK_HEROI_CADASTRAR)
  })

  it('Should be able to update a hero', async () => {
    const result = await context.update(MOCK_HEROI_ID, {
      nome: 'Manolito'
    })
    assert.deepStrictEqual(result.nModified, 1)
  })

  it('Should be able to remove a hero', async () => {
    const result = await context.delete(MOCK_HEROI_ID)
    assert.deepStrictEqual(result.n, 1)
  })
})