import React from 'react';

class TodoForm extends React.Component {

render() {

    handleChanges = 

    return(

        <form>
            <label htmlFor="todo">
                <input type="text" name="todo" placeholder="enter to-do item"/>
            </label>

            <button>Add Todo</button>
            <button>Clear/Completed</button>
        </form>

    )
}

}

export default TodoForm;