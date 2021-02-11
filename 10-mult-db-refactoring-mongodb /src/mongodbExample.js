const Mongoose = require('mongoose')

Mongoose.connect('mongodb://gasorey:admin@localhost:27017/herois',
{ useNewUrlParser: true},
{ useUnifiedTopology: true}
,function(error){
  if(!error) {
    return
  }
  console.log('Falha ao conectar ao mongo',error)
})

const connection = Mongoose.connection

connection.once('open', () => console.log('database rodando!') )

// setTimeout(() => {
//   const state = connection.readyState
//   console.log('state',state)

// },1000) 


