import React from 'react';
import InputNumber from './InputNumber';

const InputField = ({
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
  step,
  max
}) => (
  <div className={type === 'text' ? "InputField--text" : "InputField" + (addClass ? addClass : '')}>
      { type === 'text' &&
        <input
          type='text'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoFocus={autoFocus}
          required={required}
          maxLength="25"
        />
      }
      { type !== 'text' &&
        <label className="InputField__label">
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
          max={max}
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

export default InputField;
