import * as React from "react";
import { useState, useEffect } from "react";


export interface Props {

}

interface State {
    date: any;
    timerID: number;
}

function Clock {

    const [date, setDate] = useState(new Date);

    timerID: any;

    useEffect(()=>)


    componentDidMount() {
        /* ohne window wird die node-Variante von setInterval aufgerufen */
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        window.clearInterval(this.timerID);
        window.console.log("good bye");
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                {this.state.date.toLocaleDateString()} | {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}

export default Clock;
