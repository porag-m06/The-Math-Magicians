import React, { useState } from 'react';
import '../style/Calculator.css';
import calculate from '../logic/calculate';

export default function MyCalculator() {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const btnAction = (event) => {
    const buttonName = event.target.innerText;
    setDataObj(calculate(dataObj, buttonName));
  };

  const result = dataObj.next ? dataObj.next : dataObj.total || 0;

  return (
    <div className="calculator-component">
      <h2>{'Let\'s do some math!'}</h2>
      <div className="calculator-sec">
        <input type="text" name="input" id="input" placeholder={result} />
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
