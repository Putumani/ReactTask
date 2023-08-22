import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const ListSection = ({ listId, items }) => {
  return (
    <Droppable droppableId={listId}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          className={`section ${
            snapshot.isDraggingOver ? 'dragging-over' : ''
          }`}
        >
          {items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className={`input-group ${
                    snapshot.isDragging ? 'dragging' : ''
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
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default ListSection; 
