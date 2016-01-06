var state = require('./')

state.subscribe(function(){
  var st = state.getState()
  console.log(st)
  console.log('\n')
})

state.dispatch({
  type: 'add',
  value: 'build simple todo app demo with redux'
})

state.dispatch({
  type: 'rm',
  value: 0, // the index of item in state.todo
  complete: true
})

state.dispatch({
  type: 'add',
  value: 'remit to johnny .11111111111 btc'
})
