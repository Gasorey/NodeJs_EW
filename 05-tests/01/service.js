const axios = require('axios')

const URL = `https://swapi.dev/api/`

async function getPeople(number){
  const url = `${URL}people/${number}`
  console.log(url)
  const result = await axios.get(url)
  console.log(result.data)
  return result.data.results.map(mapPeople)
}

function mapPeople (item){
  return {
    nome: item.name,
    peso: item.height
  }
}

module.exports = {
  getPeople
}