import React from 'react';

import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { CreateTodo } from './CreateTodo';
import { CreateImg } from './CreateImg';

const defaultTodos =[
  {text: 'Cortar Cebolla 0', completed: true},
  {text: 'Cortar Cebolla 1', completed: true},
  {text: 'Cortar Cebolla 2', completed: true},
  {text: 'Cortar Cebolla 3', completed: true},
  {text: 'Cortar Cebolla 4', completed: true},
  {text: 'Cortar Cebolla 5', completed: true},
  {text: 'Cortar Cebolla 6', completed: true},
  {text: 'Cortar Cebolla 7, llorar con la llorona, para luegoi invocar al demonio lorem ipsum, lorem ipsum,lorem ipsum, lorem ipsum,  y que venga el angel gabriel y miguel a derrotarlo', completed: true}
]

function App() {
  return (
    <React.Fragment>
      <div id='create' className='create'>
        <CreateTodo/>
        <TodoSearch/>
        <CreateImg/>
        <CreateTodoButton/>
      </div>

      <div id='list' className='list'>
      <TodoCounter completed={16} total={16}/>
        <TodoList> 
        {defaultTodos.map(todo=>(
          <TodoItem key={todo.text} text={todo.text} completed ={todo.completed}/>
        ))}
        </TodoList>
        </div>
    </React.Fragment>
  );
}


export default App;
