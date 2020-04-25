import * as React from "react";


export interface Props {

}

interface State {
    date: any;
    timerID: number;
}

class Clock extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            date: new Date(),
            timerID: 0
        };
    }
    timerID: any;


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
