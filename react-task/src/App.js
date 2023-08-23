import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext } from 'react-beautiful-dnd';
import InputLine from './components/InputLine';
import AddSection from './components/AddSection';
import './App.css';


const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source.items); 
  const destClone = Array.from(destination.items);

  const item = { ...sourceClone[droppableSource.index], id: uuidv4() };

  destClone.splice(droppableDestination.index, 0, item);

  const updatedDestination = {
    ...destination,
    items: destClone,
  };

  return { ...updatedDestination };
};



const move = (
  sourceSection,
  destSection,
  sourceIndex,
  destIndex
) => {
  const sourceClone = Array.from(sourceSection.items);
  const destClone = Array.from(destSection.items);
  const [movedItem] = sourceClone.splice(sourceIndex, 1);

  destClone.splice(destIndex, 0, movedItem);

  const updatedSource = {
    ...sourceSection,
    items: sourceClone,
  };

  const updatedDest = {
    ...destSection,
    items: destClone,
  };

  return {
    source: updatedSource,
    destination: updatedDest,
  };
};



const InputLiner = {
  id: 'InputLiner', 
  items: [
    {
      id: uuidv4(),
      content: 'input-group',
    },
  ],
};



class App extends Component {
  state = {
      sections: [],
  };
  
  onDragEnd = (result) => {
    const { source, destination } = result;
  
    if (!destination) {
      return;
    }
  
    const sections = this.state.sections.slice();
    const sourceSection = sections.find((section) => section.id === source.droppableId);
    const destSection = sections.find((section) => section.id === destination.droppableId);
  
    if (source.droppableId === destination.droppableId) {
      sourceSection.items = reorder(sourceSection.items, source.index, destination.index);
    } else if (source.droppableId === 'InputLiner') {
      destSection.items.splice(destination.index, 0, InputLiner.items[0]);
    } else {
      const updatedSections = move(sourceSection, destSection, source.index, destination.index);
      sourceSection.items = updatedSections.source.items;
      destSection.items = updatedSections.destination.items;
    }
  
    this.setState({
      sections: sections,
    });
  };
  

  addList = () => {
    this.setState((prevState) => ({
      sections: [...prevState.sections, { id: uuidv4(), items: [] }],
    }));
  };


  render() {
    return (
      <div className="form-container">
        <div className="form-header">Form</div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <InputLine />
          <AddSection addList={this.addList} sections={this.state.sections} />
        </DragDropContext>
      </div>
    );
  }
}

export default App;



