
const util = require('util')

const getAddressAsync = util.promisify(getAddress)

function getUser() {
  return new Promise(function resolvePromise(resolve,reject) {
    setTimeout(() => {
      return resolve({
        id: 1,
        name: 'Paranauares',
        birthdayDate: new Date()    
    })
    }, 2000)
  })
}


function getPhone(idUser) {
  return new Promise(function resolvePromise(resolve, reject) {
    setTimeout(() => {
      return resolve ({
        phone: '1298119xx',
        ddd: 11
      })
    }, 1000)
  })
}


function getAddress(idUser, callback) {
  setTimeout(() => {
    return callback(null, {
      address: 'lalala',
      number: 0
    })
  }, 1500);
}
main()
 async function main() {
   try{
     console.time('aqui')
     const user = await getUser()
     const result = await Promise.all([
      getPhone(user.id),
      getAddressAsync(user.id)
     ])
     console.log(user,result)
     console.timeEnd('aqui')
   } catch(err){
     console.error(err, 'deu treta')
   }
 }

// promiseUser
// .then( function(user) {
//   return getPhone(user.id)
//   .then(function resolvePhone(result) {
//     return {
//       user: {
//         name: user.name,
//         id: user.id
//       },
//       telefone: result
//     }
//   })
// })
// .then(function (result1){
//   const address = getAddressAsync(result1.user.id)
//   return address.then(function resolveAddress(result){
//     console.log('etacarai', result1)
//     return {
//       user: result1.user,
//       phone: result1.telefone,
//       address: result.address
//     }
//   })
// })
// .then(function(result){
//   console.log('To aqui',result)
// }).catch(function(error){
//   console.error('error', error)
//   return
// })




// // getUser(function resolveUser(error, user){
// //   if(error){
// //     console.error('Deu ruim',error)
// //     return
// //   }
// //   getPhone(user.id, function resolvePhone(error1, phone){
// //     if(error1){
// //       console.error('Deu ruim no phone ', error1)
// //       return
// //     }
// //     getAddress(user.id, function resolveAddres(error2, address){
// //       if(error2){
// //         console.error('deu ruim no end', error2)
// //         return
// //       }
// //       console.log(user,address, phone)
// //     })
// //   })

// // })




