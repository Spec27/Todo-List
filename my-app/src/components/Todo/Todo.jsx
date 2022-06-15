import s from "./Todo.module.css"

const Todo = ({text,completed,onTogleCompleted,onDeleteTodo}) => {
    return (<>
        <input
            type="checkbox"
            className={s.TodoListCheckbox }
                checked={completed}
                onChange={onTogleCompleted}
            />
            <p className={s.TodoListText}>{text}</p>
        <button type="button"
            className={s.TodoListBtn }
                onClick={onDeleteTodo}>Видалити</button>
    </>);
};  


export default Todo;
