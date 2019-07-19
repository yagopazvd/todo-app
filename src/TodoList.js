import React, { Component } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';


class TodoList extends Component {
    state = { todos: [] }

    add = (todo) => {
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    remove = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    edit = (id, newTodo) => {
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return {...todo, todo: newTodo}
            }

            return todo;
        }) 

        this.setState({todos:updatedTodos})
    }

    render() { 
        let todos = this.state.todos.map(todo => (
            <Todo 
            id={todo.id} 
            key={todo.id} 
            todo={todo.todo} 
            update={this.update}
            remove={this.remove} 
            edit={this.edit}  
            />
        ))
        return ( 
            <div className="TodoList">
                <h1 className="TodoList-title">A React Todo App<span className="TodoList-span">Exercise on Callback funcitons, forms and state</span></h1>
                {todos}
                <TodoForm addTodo={this.add}/>
            </div>
         );
    }
}
 
export default TodoList;