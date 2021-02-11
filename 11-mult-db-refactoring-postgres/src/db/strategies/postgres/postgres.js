const ICrud = require('./../interfaces/ICrud')
const Sequelize = require('sequelize')



class Postgres extends ICrud {
  constructor(connection, schema){
    super()
    this._connection = connection
    this._schema = schema
  }
  async isConnected(){
    try{
      await this._connection.authenticate()
      return true
    }catch(err){
      console.log('err',err)
    }
  }
  static async defineModel(connection, schema) {
    const model = connection.define(
      schema.name,
      schema.schema,
      schema.options
    )
    await model.sync()
    return model
  }
  static async connect(){
     const connection = new Sequelize(
      'heroes',
      'gasorey',
      'docker',
      {
        host: 'localhost',
        dialect: 'postgres',
        quoteIdentifiers: false,
        operatorAliases: false,
        logging: false,
      }
    )
    // await this.defineModel()
    return connection
  }
  async create(item){
    const {dataValues} = await this._schema.create(item)
    return dataValues
  }
  async read(item = {}){
    const result = this._schema.findAll({where: item, raw: true})
    return result
  }
  async update(id,item){
    return  this._schema.update(item,{where: {id: id}})    
  }
  async delete(id){
    const query = id ? {id} : {}
    return this._schema.destroy({where: query})
  }
}

module.exports = Postgres