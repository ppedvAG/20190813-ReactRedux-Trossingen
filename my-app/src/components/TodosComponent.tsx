import React, { Component } from 'react';

interface Props {

}
interface Todo {
    description: string;
    id: number;
    completed: boolean;
}
interface State {
    loggedIn: boolean;
    inputText: string;
    todos: Array<Todo>;
}

export class TodosComponent extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            loggedIn: true,
            inputText: 'new todo',
            todos: [{ description: 'laundry', id: 0, completed: true }, { description: 'groceries', id: 1, completed: false }, { description: 'taxes', id: 2, completed: false }]
        };
        this.pushTodo = this.pushTodo.bind(this);
    }
    changedTodos: Array<Todo> = this.state.todos;

    pushTodo = () => this.addTodo();    

     addTodo () {
        this.changedTodos.push({description: 'this.state.inputText', id: this.state.todos.length, completed: false})
        this.setState({
            todos: this.changedTodos
        })
     }

    render() {
        return (
            <div>
                <p>{this.state.loggedIn}</p>
                <h2>Aufgaben für heute:</h2>
                <ul>
                    {this.state.todos.map(todo => (
                        todo.completed === false ? <li key={todo.id}>{todo.id.toString() + ' ' + todo.description}</li> : null
                    )
                    )}
                </ul>
                <input 
                type="text" 
                id="todoInp" 
                value={this.state.inputText}
                onChange={event => {this.setState({inputText: event.target.value})}}
                />
                <button onClick={this.pushTodo}>ADD</button>
            </div>
        )
    }

}
/* <ul>
<li>{this.state.todos[0]}</li>
<li>{this.state.todos[1]}</li>
<li>{this.state.todos[2]}</li>
</ul>  */

/* <ul>
{this.state.todos.map((value, index) => (
    <li key={index}>{value}</li>
)
)}
</ul> */
