import React from 'react';
import '../InputLine.css';

const InputLine = () => {
  return (
    <div className="input-container">
      <div className="input-box">
        <div className="text-input-1">Text Input 1</div>
      </div>
      <div className="input-box">
        <div className="text-input-1">Text Input 2</div>
      </div>
      <div className="input-box">
        <div className="triangle">^</div>
      </div>
    </div>
    
  );
};

export default InputLine;


