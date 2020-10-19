import React, { InputHTMLAttributes } from 'react';

import './Input.styles.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FunctionComponent<InputProps> = ({ name, label, type = 'text', ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} {...rest} />
    </div>
  );
};

export default Input;
