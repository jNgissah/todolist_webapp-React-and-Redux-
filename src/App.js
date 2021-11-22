import React from 'react';
import Container from '@mui/material/Container';

import Addtodo from './addtodo';
import Todolist from './todolist';
import Countcompleted from './countcompleted';


const App = () => {
  return (
      <Container style={{ justifyContent: 'center' }} width="sm">
          <h1 style={{ textAlign: 'center' }}> Todo List (React and Redux) </h1>
          <Addtodo />
          <Countcompleted />
          <Todolist />
         
     
    </Container>
  );
}

export default App;
