import React, { Component } from 'react';
import uuid from 'uuid/v4'
import './TodoForm.css'


class TodoForm extends Component {
    state = { 
        todo:""
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {...this.state, id: uuid()}
        this.props.addTodo(newTodo)
        this.setState({
            todo:'',
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() { 
        return ( 
            <form className="TodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="todo"></label>
                <input 
                type="text"
                id="todo" 
                name="todo" 
                value={this.state.todo}
                onChange={this.handleChange}
                placeholder=" New todo"
                />
                <i onClick={this.handleSubmit} className="fas fa-plus"></i>
            </form>
         );
    }
}
 
export default TodoForm;