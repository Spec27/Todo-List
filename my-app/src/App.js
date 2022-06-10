import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import todos from './todos.json';

class App extends Component {
  state = {
    todos: todos,
  };
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <div>
          <p>Загальна Кількість цілей: {totalTodoCount}</p>
          <p> Кількість виконаних: {completedTodosCount}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
