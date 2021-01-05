const { CommanderError } = require('commander')
const Commander = require('commander')
const database = require('./database')
const Database = require('./database')
const Heroi = require('./heroi')

async function main(){
  Commander
    .version('v1')
    .option('-n,--nome [value]', "Nome do Heroi")
    .option('-p, --poder [value]', "Poder")
    .option('-i, --id [value]', "Id do heroi")

    .option('-c, --cadastrar',"Cadastrar um heroi")
    .option('-l, --listar', "Listar um Heroi")
    .option('-r, --remover [value]', "Remover um heroi pelo ID")
    .option('-a, --atualizar [value]', "Atualizar um heroi pelo Id")
    .parse(process.argv)

    const heroi = new Heroi(Commander)


  try{
    if(Commander.cadastrar){
      delete heroi.id
      const resultado = await database.cadastrar(heroi)
      if(!resultado){
        console.error('Heroi não foi cadastrado!')
        return;
      }
      console.log('Heroi cadastrado com sucesso')
    }
    if(Commander.listar){
      const resultado = await database.listar()
      console.log(resultado)
      return;
    }
    if(Commander.remover){
      const resultado = await database.remover(heroi.id)
      if(!resultado){
        console.error('Não foi possivel remover o heroi')
        return;
      }
      console.log('Heroi removido com sucesso')
    }
    if(Commander.atualizar) {
      const idParaAtualizar = parseInt(Commander.atualizar)
      const dado = JSON.stringify(heroi)
      const heroiAtualizar = JSON.parse(dado)
      const resultado = await database.atualizar(idParaAtualizar, heroiAtualizar)
      if(!resultado){
        console.error('Não foi possivel atualizar o heroi!')
        return;
      }
      console.log('Heroi atualizado com sucesso')
    }


  }catch(ex){
    console.error('Deu pau', ex)
  }
}

main()