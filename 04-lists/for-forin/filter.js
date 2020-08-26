const { getPeople} = require('./service')


Array.prototype.meuFilter = function (callback) {
  const list = []
  for(index in this) {
    const item = this[index]
    const result = callback(item, index, this)
    if(!result) continue
    list.push(item)
  }
  return list
}

async function main( ) {
  try{
    const { results } = await getPeople('a')
    
    // const familiaLars = results.filter(function(item){
    //   //por padrão precisa retornar um boolean pra informar se mantem ou remove
    //   //false remove, true mantém
    //   const result = item.name.toLowerCase().indexOf('lars') !== -1
    //   return result
    // })
    const familiaLars = results.meuFilter((item) => item.name.toLowerCase().indexOf('lars') !== -1)
    const names = familiaLars.map(people => people.name)
    console.log(names)
  }catch(err){
    console.error(err)
  }
}
main()