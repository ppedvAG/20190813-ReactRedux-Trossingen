import React, { Component } from 'react';

interface Todo{
    id: number;
    description: string;
    completed: boolean;
}

interface Props{
    name: string;
}

interface State{
    loggedIn: boolean;
    todos: Array<Todo>;
    inputValue: string;
}

class TodosComponentGeorg extends Component<Props, State> {
  constructor(props: Props) {
    super(props); 
    this.state = {
        loggedIn: true,
        todos: [
            {id:0, description:'laundry', completed:false}, 
            {id:1, description:'groceries', completed:false}, 
            {id:2, description:'taxes', completed:true}
            ],
        inputValue: ''
    } 
  } 

  onAddTodo = () => this.addTodoItem();

  addTodoItem() {
    var newTodos = this.state.todos;
    newTodos.push({ id: newTodos.length, description: this.state.inputValue, completed: false });
    this.setState({ todos: newTodos, inputValue: '' });
  }

  componentDidMount() {
}

componentWillUnmount() {

    
    window.console.log(this.state.todos.length);
}

  render() {
    return (
      <div>
          <p>{this.state.loggedIn}</p>
          <h2>Aufgaben für heute für {this.props.name}:</h2>
          <ul>
                {
                    this.state.todos.map((v) => {
                        return (v.completed === false) ? <li key={v.id}>{v.description + ' ' + v.id.toString()}</li> : '';
                    })
                }
          </ul>
          <input value={this.state.inputValue} onChange={event => this.setState({ inputValue: event.target.value})}></input>
          <button onClick={this.onAddTodo}>Aufgabe Hinzufügen</button>
      </div>  
    );
  }
}

export default TodosComponentGeorg;