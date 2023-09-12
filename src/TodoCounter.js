import './styles/TodoCounter.css';

function TodoCounter({total, completed}){
    return(
      <div id='ToDoCounter'>
        You have completed {completed} of {total} task, cammon you can do it!
      </div>
    )
  }

  export {TodoCounter};