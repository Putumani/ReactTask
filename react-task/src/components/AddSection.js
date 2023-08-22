import React, { useState } from 'react';
import '../AddSection.css';
import ListSection from './ListSection';

const AddSection = ({ addList, sections }) => {
  const [headerSections, setHeaderSections] = useState([]);

  const addHeaderSection = () => {
    const newHeaderSection = `Section ${headerSections.length + 1}`;
    setHeaderSections([...headerSections, newHeaderSection]);
    addList(); // Call the existing addList function to add a new list section
  };

  return (
    <div className="section-container">
      <div className="add-section-container">
        <div className="add-section-box">
          <div className="add-section" onClick={addHeaderSection}>
            Add Section
          </div>
        </div>
      </div>
      {/* Render header sections */}
      {headerSections.map((header, index) => (
        <div key={`header-${index}`} className="header-section">
          {header}
        </div>
      ))}
      {/* Render list sections */}
      {sections.map((section, index) => (
        <ListSection key={section.id} listId={section.id} items={section.items} />
      ))}
    </div>
  );
};

export default AddSection;
