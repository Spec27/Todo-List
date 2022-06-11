import React, { Component } from "react";
import "./TodoEditor.css"


class TodoEditor extends Component{
    state = {
        message: ""
    }
    handleChange = event => {
        this.setState({ message:event.currentTarget.value})
    }

    handleDelete = () => {
        this.setState({message: ''} )
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.message)
        this.setState(this.handleDelete())
        
    }
    render() {
        return (
            <form className="TodoEditor" onSubmit={this.handleSubmit}>
                <textarea className="Textarea"
                    value={this.state.message}
                    onChange={this.handleChange}
                    
                ></textarea>
                <button className="EditorBtn" type="submit">Додати Завдвння</button>
            </form>
        );
    }
}

export default TodoEditor;