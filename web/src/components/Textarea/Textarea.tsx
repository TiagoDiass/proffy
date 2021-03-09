import React, { InputHTMLAttributes } from 'react';
import './Textarea.styles.scss';

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const Textarea: React.FC<Props> = ({ label, name, ...rest }) => {
  return (
    <div className='textarea-block'>
      <label htmlFor={name}>{label}</label>
      <textarea type='text' id={name} {...rest} />
    </div>
  );
};

export default Textarea;
