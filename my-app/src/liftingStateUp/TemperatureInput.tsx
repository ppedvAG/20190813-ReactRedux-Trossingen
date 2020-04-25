import React from "react";

interface Props {
    scale: string;
    temperature: string;
    onTemperatureChange: Function;
}

interface ScaleNames {
    [key: string]: string;    
}

const scaleNames: ScaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //this.state = { temperature: '' };
    }

    handleChange(e: { target: { value: any; }; }) {
        //this.setState({ temperature: e.target.value });
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        //const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
}

export default TemperatureInput;