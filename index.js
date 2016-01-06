var redux = require('redux').createStore

var store = redux(todo)

module.exports = store

function todo (state, action){
  if(!state) state = init()
  else{
    switch(action.type){
      case 'add':
        state.todo.push(action.value)
        state = Object.assign({}, state)
      break;
      case 'rm':
        var rmd = state.todo.splice(action.value, 1)
        if(action.complete) state.done.push(rmd)
        state = Object.assign({}, state)
      break;
    }
  }
  return state
}

function init(){
  var i = {}
  i.todo = []
  i.done = []
  i.inProgress = []
  return i
}
