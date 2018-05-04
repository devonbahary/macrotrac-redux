import React from 'react';
import InputNumber from './InputNumber';

const InputRow = ({
  addClass,
  type,
  label,
  value,
  onChange,
  onIncrement,
  onDecrement,
  placeholder,
  selectOptions,
  required,
  autoFocus,
  step
}) => (
  <div className={type === 'text' ? "InputRow--text " : "InputRow " + addClass}>
      { type === 'text' &&
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
        />
      }
      { type !== 'text' &&
        <label className="InputRow__label">
          {label}
        </label>
      }
      { type === 'number' &&
        <InputNumber
          value={value}
          onChange={onChange}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          autoFocus={autoFocus}
          required={required}
          step={step}
        />
      }
      { type === 'select' &&
        <select
          value={value}
          onChange={onChange}
          autoFocus={autoFocus}
          required={required}
        >
          {selectOptions.map((option, index) => (
            <option key={index} value={index}>
              {option}
            </option>
          ))}
        </select>
      }
  </div>
);

export default InputRow;
