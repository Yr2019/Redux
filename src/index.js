import {createStore} from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'RST':
      return state = 0;
      default:
        return state
    }
}

// const inc = () => {
//   return {
//     tepe: 'INC'
//   }
// }

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rst = () => ({type: 'RST'});
// const rnd = (value) => ({type: 'RND', value});
const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());

});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('rst').addEventListener('click', () => {
  store.dispatch(rst());
});

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));
// });

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});



// let state = reducer(undefined, {});
// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);