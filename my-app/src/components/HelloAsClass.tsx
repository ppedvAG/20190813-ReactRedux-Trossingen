import * as React from "react";
import './Hello.css';
import TodosCompG from './TodosCompGeorg';

export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
    
}

interface HelloState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props);
        this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
    }

    onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
    onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

    render() {
        const { name } = this.props;

        if (this.state.currentEnthusiasm <= 0) {
            throw new Error('You could be a little more enthusiastic. :D');
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
                <TodosCompG name={this.props.name} />
            </div>
        );
    }

    updateEnthusiasm(currentEnthusiasm: number) {
        this.setState({ currentEnthusiasm });
    }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}