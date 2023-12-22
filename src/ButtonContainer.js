import React from 'react';
import './App.css';
import createButton from './Button';

const ButtonContainer = () => {
  return (
    <div className="ButtonContainer">
      <div className="ButtonWrapper">
        {createButton("primary", "Primary Button")}
        {createButton("default", "Default Button")}
        {createButton("dashed", "Dashed Button")}
        {createButton("text", "Text Button")}
        {createButton("link", "Link Button")}
      </div>
    </div>
  );
};

export default ButtonContainer;
