import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
// import * as actions from './actions';
import App from './components/app';

const store = createStore(reducer);

ReactDom.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));








// const {dispatch} = store;

//onst {inc, dec, rst} = bindActionCreators(actions, dispatch);

// document.getElementById('inc').addEventListener('click', inc);
// document.getElementById('dec').addEventListener('click', dec);
// document.getElementById('rst').addEventListener('click', rst);

// const update = () => {
//   ReactDom.render(
//     <Provider store={store}>
//       <App/>
//     </Provider>, document.getElementById('root'));
// }

// update();

// store.subscribe(update);

// store.subscribe(() => {
//   console.log(store.getState());
// });



















// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rstDispatch = bindActionCreators(rst, dispatch);

// const incDispatch = () => dispatch(inc());
// const decDispatch = () => dispatch(dec());
// const rstDispatch = () => dispatch(rst());
// //const rndDispatch = (value) => dispatch(rnd(value));


// const {incDispatch, decDispatch, rstDispatch} = bindActionCreators(
//   {
//   incDispatch: inc,
//   decDispatch: dec,
//   rstDispatch: rst
//   }
//   , dispatch);
// actions = {
//   inc: inc,
//   dec: dec,
//   rst: rst
// }

// document.getElementById('rnd').addEventListener('click', () => {
//   const value = Math.floor(Math.random() * 10);
//   store.dispatch(rnd(value));
// });

// const update = () => {
//   ReactDom.render(<Counter
//     counter={store.getState()}
//     inc={inc}
//     dec={dec}
//     rst={rst}
//     // rnd={() =>{
//     //   const value = Math.floor(Math.random() * 10);
//     //   rnd(value);
//     // }}
// />, document.getElementById('root'));
// }