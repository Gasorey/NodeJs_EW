const {getPeople} = require('./service')

Array.prototype.myReduce = function(callback, firstValue){
  let lastValue = typeof firstValue !==undefined ? firstValue : this[0]
  for (let index = 0; index <= this.length; index ++){
    lastValue = callback(lastValue, this[index], this)
  }
  return lastValue
}

async function main () {
  try{
    // const { results } = await getPeople('a')

    // const weight = results.map(item => parseInt(item.weight))
    // const total = weight.reduce((anterior, proximo) => {
    //   return anterior + proximo
    // }, 0)

    const myList = [
      ['Gabriel', 'Asorey'],
      ['NodeBR','Nerdzão']
    ]
    const total = myList.myReduce((anterior, proximo) => {
      return anterior.concat(proximo)
    }, [])
    .join(', ')
    console.log('total',total)

  }catch(err){
    console.error('deu ruim', err)
  }
}
main()