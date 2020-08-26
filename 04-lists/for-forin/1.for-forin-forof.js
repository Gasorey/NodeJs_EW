const service = require('./service')

async function main(){
  try{
    const result = await service.getPeople('a')
    const names = []
    console.time('for')
    for (let i = 0; i<= result.results.length -1; i++){
      const people = result.results[i]
      names.push(people.name)
    }
    console.timeEnd('for')
  }
  catch(err){
    console.error('error',err)
  }
}
main()