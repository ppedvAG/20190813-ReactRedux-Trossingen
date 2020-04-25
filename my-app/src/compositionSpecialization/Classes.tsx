import React from "react";
import './official-Classes.css';

// https://reactjs.org/docs/composition-vs-inheritance.html#specialization
// https://codepen.io/gaearon/pen/gwZbYa?editors=0010

interface FBProps {
   color: string; 
   children: React.ReactNode; 
}

function FancyBorder(props: FBProps) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  interface DProps { 
      title: React.ReactNode; 
      message: React.ReactNode; 
      children: React.ReactNode; 
    }

function Dialog(props: DProps) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    );
  }

  interface SUDState {
      login: string;
  }
  
  class SignUpDialog extends React.Component<Readonly<{}>, SUDState> {
    constructor(props: Readonly<{}>) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleSignUp = this.handleSignUp.bind(this);
      this.state = {login: ''};
    }
  
    render() {
      return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
          <input value={this.state.login}
                 onChange={this.handleChange} />
  
          <button onClick={this.handleSignUp}>
            Sign Me Up!
          </button>
        </Dialog>
      );
    }
  
    handleChange(e: { target: { value: any; }; }) {
      this.setState({login: e.target.value});
    }
  
    handleSignUp() {
      alert(`Welcome aboard, ${this.state.login}!`);
    }
  }

  export default SignUpDialog;