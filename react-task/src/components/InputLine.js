import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const InputLine = () => {
  return (
    <div className='input-container'>
      <Droppable droppableId="InputLiner" isDropDisabled={false}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            className={`input-container ${
              snapshot.isDraggingOver ? "dragging-over" : ""
            }`}
          >
            <Draggable draggableId="inputGroup" index={0}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`input-group ${
                    snapshot.isDragging ? "dragging" : ""
                  }`}
                >
                  <div className="input-box">
                    <div className="text-input-1">Text Input 1</div>
                  </div>
                  <div className="input-box">
                    <div className="text-input-2">Text Input 2</div>
                  </div>
                  <div className="input-box">
                    <div className="triangle">^</div>
                  </div>
                </div>
              )}
            </Draggable>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default InputLine;


