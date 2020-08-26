const axios = require('axios')

const URL = `https://swapi.co/api/people`

async function getPeople (name) {
  const url = `${URL}/?search=${name}&format=json`
  const response = await axios.get(url)
  return response.data
}

getPeople('r2')
.then(function(result) {
  console.log(result)
})
.catch(function(error){
  console.error(error,'lascou-se')
})

module.exports = {
  getPeople
}