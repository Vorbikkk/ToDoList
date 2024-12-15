import React from 'react';
import ToDoList from './components/ToDoIst/Post/ToDoList';
import cl from './App.module.css'

const App = () => {
  return (
    <div className={cl.App}>
      <ToDoList/>
    </div>
  );
};

export default App;