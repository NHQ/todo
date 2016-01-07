# rereduxdux

A starter todo app using redux state control.

see [](./entry.js) for use, or ```git clone```, ```npm install```, and run ```node entry.js```

## API

currently support add and rm actions

```js

state.dispatch({
  type: 'add',
  value: 'I need something to do!'
})

state.dispatch({
  type: 'rm',
  value: 0 // the index of the item to remove
})

```
