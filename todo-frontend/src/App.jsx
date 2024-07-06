import React from 'react';
import ToDoList from './components/ToDoList';
import AddToDo from './components/AddToDo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      
      <ToDoList />
    </div>
  );
};

export default App;
