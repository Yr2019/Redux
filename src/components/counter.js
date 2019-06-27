import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import {bindActionCreators} from 'redux';


const Counter = ({counter, inc, dec, rst}) => {
  return (
    <div className="counter">
        <div className="counter__block">
          <div className="counter__digit">{counter}</div>
        </div>
        <div className="counter__navigation">
          <button onClick={inc} className="btn counter__button counter__button_plus">
            <img src="img/Plus.svg" alt="" /></button>
          <button onClick={dec} className="btn counter__button counter__button_minus">
            <img src="img/Minus.svg" alt=""/></button>
          <button onClick={rst} className="btn counter__button counter__button_reset">
            <img src="img/Reset.svg" alt="" /></button>
          <button onClick={dec} className="btn counter__button counter__button_download">
            <img src="img/Download.svg" alt="" /></button>
          <button onClick={dec} className="btn counter__button counter__button_upload">
            <img src="img/Upload.svg" alt="" /></button>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
// }

export default connect(mapStateToProps, actions)(Counter);




// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch(inc()),
//     dec: () => dispatch(dec()),
//     rst: () => dispatch(rst()),
//     // rnd: () => {
//     //   const value = Math.floor(Math.random() * 10);
//     //   dispatch(rnd(value))
//     // }
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   const {inc, dec, rst} = bindActionCreators(actions, dispatch);
//   return { inc,dec, rst, }
// }