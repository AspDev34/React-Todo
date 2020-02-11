import React from 'react';

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
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />

        <TodoList todos={this.state.todoData}/>
      </div>
    );
  }
}

export default App;
