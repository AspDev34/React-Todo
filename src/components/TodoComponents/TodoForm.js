import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newtask: ''
        }
    }

    handleChanges = event => {
        this.setState({
            newtask: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewTask(this.state.newtask);
        this.setState({newtask: event.target.value})
    };

render() {

    

    return(

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="newtask">
                <input type="text" name="newtask" value={this.state.newtask} onChange={this.handleChanges} placeholder="enter to-do item"/>
            </label>

            <button>Add Todo</button>
            <button onClick={this.props.clearTask}>Clear Completed Tasks</button>
        </form>

    );
};

};

export default TodoForm;