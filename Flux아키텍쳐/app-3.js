function createStore(){
  let state = {
    count: 0,
  }
  function send(){
    state = worker(state)
  }
  function getState(){
    return state;
  }
  return {
    getState, 
    send,
  }
}

function worker(state = { count : 0,action}){
  switch(action.type){
    case 'increase':
      return {...state, count: state.count + 1}
    case 'decrease':
      return {...state, count: state.count - 1}
    case 'reset':
      return {...state, count: 0}

  }
}

const store = createStore()
store.send({type: 'increase'})
store.send({type: 'increase'})
store.send({type: 'increase'})
store.send({type: 'decrease'})
store.send({type: 'reset'}) 

