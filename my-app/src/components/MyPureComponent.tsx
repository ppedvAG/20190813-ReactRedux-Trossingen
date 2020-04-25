import * as React from "react";

export interface Props {
  
}

interface State {
    names: Array<string>;
    
}

export class MyPureComponent extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            names: ['Alice', 'Mark', 'Charlotte']  };
    }

    render() {
        let elements = ['Kupfer', 'Eisen', 'Aluminium'];
        
        //this.state.names.push('Marie');
        elements.push('Marie');

        return (
            <ul>
            {elements.map((value, index) => (
                <li key={index}>{value}</li>
            )
            )}
            </ul>
        )
    }

}