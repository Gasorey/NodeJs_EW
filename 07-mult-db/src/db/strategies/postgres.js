const ICrud = require('./interfaces/ICrud')

class Postgres extends ICrud {
  constructor(){
    super()
  }
  create(item){
    console.log('O item foi salvo no postgres')
  }
}

module.exports = Postgres