import './Calculator.css';

export default function MyCalculator() {
  return (
    <div className="calculator-component">
      <div className="calculator-sec">
        <input type="text" name="input" id="input" placeholder="0" />
        <div className="cal-btn">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="bk-org">÷</button>
          <button type="button">7</button>
          <button type="button">8</button>
          <button type="button">9</button>
          <button type="button" className="bk-org">x</button>
          <button type="button">4</button>
          <button type="button">5</button>
          <button type="button">6</button>
          <button type="button" className="bk-org">-</button>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button" className="bk-org">+</button>
          <button type="button" className="btn-0">0</button>
          <button type="button">.</button>
          <button type="button" className="bk-org">=</button>
        </div>
      </div>
    </div>
  );
}
