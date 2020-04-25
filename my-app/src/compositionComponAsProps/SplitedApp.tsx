import React from "react";
import './SplitedApp.css';

// https://reactjs.org/docs/composition-vs-inheritance.html#containment
// https://codepen.io/gaearon/pen/gwZOJp?editors=0110

function Contacts() {
    return <div className="Contacts" />;
}

function Chat() {
    return <div className="Chat" />;
}

interface Props {
    left: React.ReactNode;
    right: React.ReactNode;
}

function SplitPane(props: Props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function SplitedApp() {
    return (
        <SplitPane
            left={
            <Contacts />}
            right={
                <Chat />
            } />
            
    );
}

export default SplitedApp;