import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

export default function MyCalculator() {
  const dataObjInitial = {
    total: 0,
    next: null,
    operation: null,
  };

  const [dataObj, setDataObj] = useState(dataObjInitial);

  const btnAction = (event) => {
    const buttonName = event.target.innerText;
    console.log(dataObj, buttonName);
    // calculate(dataObj, buttonName)
  };

  return (
    <div className="calculator-component">
      <div className="calculator-sec">
        <input type="text" name="input" id="input" placeholder={`${dataObj.next}  ${dataObj.operation}  ${dataObj.total}`} />
        <div className="cal-btn">
          <button onClick={btnAction} type="button">AC</button>
          <button onClick={btnAction} type="button">+/-</button>
          <button onClick={btnAction} type="button">%</button>
          <button onClick={btnAction} type="button" className="bk-org">÷</button>
          <button onClick={btnAction} type="button">7</button>
          <button onClick={btnAction} type="button">8</button>
          <button onClick={btnAction} type="button">9</button>
          <button onClick={btnAction} type="button" className="bk-org">x</button>
          <button onClick={btnAction} type="button">4</button>
          <button onClick={btnAction} type="button">5</button>
          <button onClick={btnAction} type="button">6</button>
          <button onClick={btnAction} type="button" className="bk-org">-</button>
          <button onClick={btnAction} type="button">1</button>
          <button onClick={btnAction} type="button">2</button>
          <button onClick={btnAction} type="button">3</button>
          <button onClick={btnAction} type="button" className="bk-org">+</button>
          <button onClick={btnAction} type="button" className="btn-0">0</button>
          <button onClick={btnAction} type="button">.</button>
          <button onClick={btnAction} type="button" className="bk-org">=</button>
        </div>
      </div>
    </div>
  );
}
