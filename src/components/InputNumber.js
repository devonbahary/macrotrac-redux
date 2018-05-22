import React from 'react';

const InputNumber = ({ value, onChange, onIncrement, onDecrement, max = '1000' }) => (
  <div className="InputNumber">
      <div
        className="InputNumber__button--decrement"
        onClick={onDecrement}
      >
          <span className="InputNumber__icon ion-minus-round"></span>
      </div>
      <input
        type='number'
        value={value}
        onChange={onChange}
        step='any'
        required
        min='0'
        max={max}
      />
      <div
        className="InputNumber__button--increment"
        onClick={onIncrement}
      >
          <span className="InputNumber__icon ion-plus-round"></span>
      </div>
  </div>
);

export default InputNumber;
