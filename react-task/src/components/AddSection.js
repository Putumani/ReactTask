import React, { useState } from 'react'; 
import '../AddSection.css';

const AddSection = ({ addList }) => {
  const [sections, setSections] = useState([]);

    const handleAddSection = () => {
        const newSectionId = sections.length + 1;
        const newSection = { id: newSectionId, title: `Section ${newSectionId}` };
        setSections(prevSections => [...prevSections, newSection]);
    };

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
        {sections.map(section => (
        <div key={section.id} className="section">
            {section.title}
        </div>
        ))}
    </div>
  );
};

export default AddSection;
