// docker ps // verificar container ID
// docker exec -it 482225377afb  mongo -u admin - p admin --authenticationDatabase herois
show dbs // mostrar os  bancos criado
use herois // detemrinar o contexto
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})
show collections // mostrar as tabelas criadas

for(let i=0; i<= 50000; i++) {
  db.herois.insert({
    nome: `Clone-${i}`,
    poder: 'Kage bushin no jutsu',
    dataNascimento:'sei não'
  })
}
db.herois.count() // retorna quantos itens possuem no banco
db.herois.findOne() // retorna um heroi
db.herois.find().limit(100).sort({
  nome: -1
})
db.herois.find({}, {poder: 1, _id: 0})

// create
db.herois.insert({
  nome: 'Flash',
  poder: 'Velocidade',
  dataNascimento: '1998-01-01'
})

//read
db.herois.find()

//update

db.herois.update({_id: ObjectId("600816bd61e31a3ac3cab63b")}, {
  nome: 'Mulher maravilha'
})
//update em um unico trocando só o valor do campo
db.herois.update({nome: 'Flash'}, 
{
  $set:
  {
    nome: 'Mulher maravilha'
  }
})

//delete em tudo do campo
db.herois.remove({})
// delete em um unico
db.herois.remove.({nome: 'Mulher Maravilha'})