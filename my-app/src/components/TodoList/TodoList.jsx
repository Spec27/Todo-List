import React from "react";
import  "./TodoList.css"
import classNames from "classnames";
import Todo from "../Todo"

const TodoList = ({ todos, onDeleteTodo ,onTogleCompleted}) => (
    <ul className="TodoList">{todos.map(({ id, text, completed }) => (
        <li
            key={id}
            className={classNames("TodoListItem", { TodoListComplited:completed,}) }>
            <Todo text={text}
                completed={completed}
                onTogleCompleted={() => onTogleCompleted(id)}
                onDeleteTodo={()=>onDeleteTodo(id)}
            />
        
        </li>))}
    </ul>
)
    
export default TodoList; 