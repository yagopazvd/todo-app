import React, { Component } from 'react';
import './Todo.css';


class Todo extends Component {
    state = {
        isDone: false,
        isEditing: false,
        todo: this.props.todo
    }

    removeTodo = () => {
    this.props.remove(this.props.id)
    }
        
    toggleEdit = (e) => {
        this.setState(s => ({
            isEditing: !s.isEditing
        }))
    }

    toggleDone = (e) => {
        this.setState(s => ({
            isDone: !s.isDone
        }))
    }

    editTodo = (e) =>{
    e.preventDefault();
    this.props.edit(this.props.id, this.state.todo)
    
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        let result;
        if(this.state.isEditing){

           result = ( 
           <div className="Todo">
                <form onSubmit={this.editTodo}>
                    <input 
                    type="todo"
                    value={this.state.todo}
                    name="todo"
                    onChange={this.handleChange}
                    />
                    </form>
                    <div className="Todo-btns">
                        <i onClick={this.toggleEdit} className="fas fa-pencil-alt"></i>
                    </div>
                
            </div> )

        } else if(this.state.isDone){

            result = (
                <div className="Todo" key={this.props.id} >
                <p onClick={this.toggleDone}><s>{this.state.todo}</s></p>
                <div className="Todo-btns">
                    <i onClick={this.toggleEdit} className="fas fa-pencil-alt"></i>
                    <i onClick={this.removeTodo} class="fas fa-trash"></i>
                </div>
            </div> )

        } else {

            result = (
                <div className="Todo" key={this.props.id} >
                <p onClick={this.toggleDone}>{this.state.todo}</p>
                <div className="Todo-btns">
                    <i onClick={this.toggleEdit} className="fas fa-pencil-alt"></i>
                    <i onClick={this.removeTodo} class="fas fa-trash"></i>
                </div>
            </div> )

        }

        return result;
    }
}
 
export default Todo;