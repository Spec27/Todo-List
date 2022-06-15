import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoEditor from './components/TodoEdior';
import todos from './todos.json';
import shortid from 'shortid';
import Filter from './components/FilterTodos';
import Modal from 'components/Modal';
import Clock from 'components/Clock';

class App extends Component {
  state = {
    todos: todos,
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const tod = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(tod);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    if (todo.text === '') {
      alert('Добавте Завдання');
      return;
    }
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
    this.toggleModal();
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, filter, showModal } = this.state;
    const totalTodoCount = todos.length;
    const completedTodosCount = this.calculateTodosCount();
    const visibleTodo = this.getVisibleTodos();

    return (
      <>
        <div className="Conainer">
          <Clock />
          <div className="ContainerBtn">
            <button
              className="OpenTodoEditor"
              type="button"
              onClick={this.toggleModal}
            >
              Додати завдання
            </button>
          </div>
          <div onClose={this.toggleModal}>
            {showModal && (
              <Modal onClose={this.toggleModal}>
                <TodoEditor onSubmit={this.addTodo} />
                <button type="button" onClick={this.toggleModal}>
                  Close Modal
                </button>
              </Modal>
            )}
          </div>
          <Filter value={filter} onChange={this.changeFilter} />
          <div className="Counter">
            <p>Загальна Кількість цілей: {totalTodoCount}</p>
            <p> Кількість виконаних: {completedTodosCount}</p>
          </div>
          <TodoList
            todos={visibleTodo}
            onDeleteTodo={this.deleteTodo}
            onTogleCompleted={this.toggleComplited}
          />
        </div>
      </>
    );
  }
}

export default App;
