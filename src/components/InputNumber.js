import React from 'react';

const InputNumber = ({ value, onChange, onIncrement, onDecrement, step }) => (
  <div className="InputNumber">
      <div
        className="InputNumber__button--decrement"
        onClick={onDecrement}
      >
          <span className="ion-minus-round"></span>
      </div>
      <input
        type='number'
        value={value}
        onChange={onChange}
        step='any'
        required
        min='0'
        max='1000'
      />
      <div
        className="InputNumber__button--increment"
        onClick={onIncrement}
      >
          <span className="ion-plus-round"></span>
      </div>
  </div>
);

export default InputNumber;
