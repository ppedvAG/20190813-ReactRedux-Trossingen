import React from "react";
import './localStyles.css';

interface Props {
  color: string; 
  children: React.ReactNode; 
}

function FancyBorder(props: Props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

  export default FancyBorder;