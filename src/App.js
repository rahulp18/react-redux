import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="container_box">
        <h1>Hello Welcome to React Redux</h1>
        <h4>Increment Deacrement Number</h4>

        <div className="button_group">
          <button onClick={() => dispatch(decNumber())}>-</button>
          <input type="text" readOnly value={myState} />
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
