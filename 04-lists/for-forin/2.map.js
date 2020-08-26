const service = require('./service')

Array.prototype.myMap = function(callback){
  const newArrayMapped = []
  for(let index = 0; index <= this.length -1; index++){
    const result = callback(this[index], index)
    newArrayMapped.push(result)
  }
  return newArrayMapped
}

async function main () {
  try{
    const results = await service.getPeople('a')
    // const names = []
    // results.results.forEach(function (item) {
    //   names.push(item.name)
    // })

    //esse é o map sem arrow
  //  const names = results.results.map(function(people) {
  //     return people.name
  //   })
    // usando arrow
    // const names = results.results.map(people => people.name)

    //usando o proprio map

    const names = results.results.myMap(function (people, index) {
      return `${index}, ${people.name}`
    })

  }catch(err){
    console.error('deu ruim', error)
  }
}

main()