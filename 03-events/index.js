const EventEmmitter = require('events')
class MyEmmitter extends EventEmmitter {

}

const myEmmiter = new MyEmmitter()

const eventName = 'user:click'

myEmmiter.on(eventName, function(click){
  console.log('um usuário clicou',click)
})

myEmmiter.emit(eventName, 'clicko aqui carai')

const stdin = process.openStdin()
stdin.addListener('data',function (value){
  console.log(`Você digitou: ${value.toString().trim()}`)
})