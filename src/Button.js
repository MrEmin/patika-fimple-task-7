import React from 'react';
import './App.css';

const createButton = (type = 'default', children, rest) => {
  const buttonClasses = ['custom-button'];

  switch (type) {
    case 'primary':
      buttonClasses.push('primary-button');
      break;
    case 'dashed':
      buttonClasses.push('dashed-button');
      break;
    case 'text':
      buttonClasses.push('text-button');
      break;
    case 'link':
      buttonClasses.push('link-button');
      break;
    default:
      break;
  }
  return (
    <button className={buttonClasses.join(' ')} {...rest}>
      {children}
    </button>
  );
};

export default createButton;
