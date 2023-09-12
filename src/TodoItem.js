function TodoItem(props){
    return(
      <li id="task">
        <span className="material-symbols-rounded" id="check">done_all{props.completed}</span>
        <p>{props.text}</p>
        <span className="material-symbols-rounded" id="delete">delete</span>
      </li>
    )
  }

  export {TodoItem};