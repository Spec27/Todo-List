import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEdior';
import todos from './todos.json';
import shortid from 'shortid';

import Filter from './components/FilterTodos';

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  };

  addTodo = text => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleComplited = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          console.log('знайшли потрібну тудушку');
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleTodos = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
    return this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  calculateTodosCount = () => {
    const { todos } = this.state;
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  render() {
    const { todos, filter } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateTodosCount();
    const visibleTodo = this.getVisibleTodos();

    return (
      <>
        <Filter value={filter} onChange={this.changeFilter} />
        <TodoEditor onSubmit={this.addTodo} />
        <div className="Counter">
          <p>Загальна Кількість цілей: {totalTodoCount}</p>
          <p> Кількість виконаних: {completedTodosCount}</p>
        </div>
        <TodoList
          todos={visibleTodo}
          onDeleteTodo={this.deleteTodo}
          onTogleCompleted={this.toggleComplited}
        />
      </>
    );
  }
}

export default App;
