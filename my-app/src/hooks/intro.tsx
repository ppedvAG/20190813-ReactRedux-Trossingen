import React, { useState, useEffect } from 'react';

function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0)
    // useState Returns a stateful value, and a function to update it.
    const [todos, setTodos] = useState([{ description: 'Learn Hooks', id: 0, completed: false }]);

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
            <ul>
                {
                    todos.map((v) => {
                        return (v.completed === false) ? <li key={v.id}>{v.description + ' ' + v.id.toString()}</li> : '';
                    })
                }
            </ul>
        </div>
    );
}


export default Example;