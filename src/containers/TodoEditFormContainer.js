import React, { Component } from 'react';
import TodoEditFormView from '../views/TodoEdotFormView';

import { inject, observer } from 'mobx-react';

import autobind from 'autobind-decorator';
import generateId from '../IDGenerator';

@inject('todoStore')
@autobind
@observer
class TodoEditFormContainer extends Component {

  onSetTodoProps(name, value) {
    this.props.todoStore.setTodoProps(name, value);
  }

  onAddTodo() {
    let { todo } = this.props.todoStore;
    todo = { ...todo, id : generateId(5) }
    this.props.todoStore.addTodo(todo);
  }

  onUpdateTodo() {
    this.props.todoStore.updateTodo();
  }

  onRemoveTodo() {
    this.props.todoStore.removeTodo();
  }

  render(){

    const { todoStore } = this.props;

    return(
      <TodoEditFormView
        todo = { todoStore.todo }
        onSetTodoProps = { this.onSetTodoProps } // bind(this) 를 @autobind 로 제거
        onAddTodo = { this.onAddTodo }
        onUpdateTodo = { this.onUpdateTodo }
        onRemoveTodo = { this.onRemoveTodo }
      />
    )
  }
}

export default TodoEditFormContainer;