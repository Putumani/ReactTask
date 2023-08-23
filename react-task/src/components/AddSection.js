import React, { useState } from 'react';
import '../AddSection.css';
import ListSection from './ListSection';

const AddSection = ({ addList, sections }) => {
  return (
    <div className="section-container">
      <div className="add-section-container">
        <div className="add-section-box">
          <div className="add-section">Add Section</div>
        </div>
        <div className="add-section-box">
          <div className="add-sign" onClick={addList}>
            +
          </div>
        </div>
      </div>
      {sections.map((section, index) => (
      <div key={section.id}>
        <ListSection
          key={section.id}
          listId={section.id}
          items={section.items}
          sectionIndex={index} 
        />
      </div>
    ))}
    </div>
  );
};

export default AddSection;


