import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [sections] = useState([
    { id: 1, title: 'Section 1' },
    { id: 2, title: 'Section 2' },
  ]);

  return (
    <div className="form-container">
      <div className="form-header">Form</div>
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
        <div className="section-container">
          <div className="add-section-container">
            <div className="add-section-box">
              <div className="add-section">Add Section</div>
            </div>
            <div className="add-section-box">
              <div className="add-sign">+</div>
          </div>
          </div>
          {sections.map(section => (
            <div key={section.id} className="section">
              {section.title}
            </div>
          ))}
        </div>
    </div>
  );
};

export default App;

