import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const myTodos = [
  {
    task: 'Study Code',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // React.Component is what we’ll be extending as our base class for class components.
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //Constructor with state
  //What we inherit from React.Component:
  //this.state
  //this.setState
  //lifecycle methods
  constructor() {
    super(); // we call Super to choose what specifically we want to inherit from React.Component
    this.state = { // state inside a class component is always going to be an object. 
      todoData: myTodos 
    }; 
  }

  // Class methods to update state
  // no mutating the current state
  // for every array and every object - create a new one (... a.k.a. spread operator or array methods)
  toggleItem = (clickedID) => {
    const newItem = this.state.todoData.map((item) => {
      // loop through the myTodos array 
      // find the item we clicked (by id, maybe index)
      // toggle that item's "completed" property.
      if (item.id === clickedID) {
        // toggle completed
        return {
          ...item,
          completed: !item.completed
        };
      }
      else {
        return item;
      }

    });

    // Update state with the new array (using setState())
    // I ALWAYS pass in an object to setState. 
    // I don't have to spread in the current state (...myTodos), React does this in the background. I only have to pass in the
    // state property I want to update. 
    this.setState({
      completed: newItem
    });
  };

  addNewTask = itemTask => {
    const newTask = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newTask]
    });
  };

  clearTask = () => {
    this.setState({
      todoData: this.state.todoData.filter(item => !item.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addNewTask={this.addNewTask} clearTask={this.clearTask}/>

        <TodoList todos={this.state.todoData} toggleItem={this.toggleItem}/>
      </div>
    );
  }
}

export default App;
