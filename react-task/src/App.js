import React, { useState } from 'react';
import './App.css';
import InputLine from './components/InputLine';
import AddSection from './components/AddSection';

const App = () => {
  return (
    <div className="form-container">
      <div className="form-header">Form</div>
      <InputLine />
      <AddSection />
    </div>
  );
};

export default App;





