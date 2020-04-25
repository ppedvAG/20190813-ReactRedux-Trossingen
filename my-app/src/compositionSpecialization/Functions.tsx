import React from "react";
import './official-Classes.css';

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
    title: string;
    message: string;
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
      </FancyBorder>
    );
  }
  
  function WelcomeDialog2() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
  
    );
  }

  export default WelcomeDialog2;