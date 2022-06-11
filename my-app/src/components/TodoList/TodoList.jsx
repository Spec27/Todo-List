import React from "react";
import  "./TodoList.css"
import classNames from "classnames";

const TodoList = ({ todos, onDeleteTodo ,onTogleCompleted}) => (
    <ul className="TodoList">{todos.map(({ id, text, completed }) => (
        <li
            key={id}
            className={classNames("TodoListItem", { TodoListComplited:completed,}) }>
            
            <input
                type="checkbox"
                className="TodoListCheckbox"
                checked={completed}
                onChange={()=>onTogleCompleted(id)}
            />
            <p className="TodoListText">{text}</p>
            <button type="button" className="TodoListBtn" onClick={()=>onDeleteTodo(id)}>Видалити</button>
        </li>))}
    </ul>
)
    
export default TodoList; 