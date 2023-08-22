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



const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source.items); 
  const destClone = Array.from(destination.items); 
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const updatedSource = {
    ...source,
    items: sourceClone,
  };

  const updatedDestination = {
    ...destination,
    items: destClone,
  };

  const result = {};
  result[droppableSource.droppableId] = updatedSource;
  result[droppableDestination.droppableId] = updatedDestination;

  return result;
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

  switch (source.droppableId) {
    case destination.droppableId:
      sections.forEach((section) => {
        if (section.id === source.droppableId) {
          section.items = reorder(section.items, source.index, destination.index);
        }
      });
      break;
    case 'InputLiner':
      sections.forEach((section) => {
        if (section.id === destination.droppableId) {
          section.items = copy(InputLiner, section, source, destination).items;
        }
      });
      break;
    default:
      sections.forEach((section) => {
        if (section.id === source.droppableId || section.id === destination.droppableId) {
          const updatedSections = move(
            section,
            section,
            source,
            destination
          );
          section.items = updatedSections[section.id].items;
        }
      });
      break;
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



