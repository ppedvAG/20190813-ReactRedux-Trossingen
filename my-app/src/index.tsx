import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import Hello from './components/Hello';
// import HelloAsClass from './components/HelloAsClass';
// import RatingAsFunction from './components/RatingAsFunction';
// import { TodosComponent } from './components/TodosComponent';
// import  { TodosComponentGeorg } from './components/TodosCompGeorg';
// import  Clock from './components/Clock';
// import ReduxExample from './components/redux-beispiel';
// import { MyPureComponent } from './components/MyPureComponent';
// import WelcomeDialog from './compositionPropsChildren/WelcomeDialog';
import SplitedApp from './compositionComponAsProps/SplitedApp';
import Calculator from './liftingStateUp/Calculator';

let root: Element = document.getElementById('root') as Element;
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Hello name="Trossingen" enthusiasmLevel={30}/>, document.getElementById('root'));
// ReactDOM.render(<HelloAsClass name="Vadzim"/>, root);
//ReactDOM.render(<RatingAsFunction starsNumber={5}/>, document.getElementById('root'));
// ReactDOM.render(<TodosComponent />, root);
//  ReactDOM.render(<TodosComponentGeorg />, root);
// ReactDOM.render(<ReduxExample />, root);
// ReactDOM.render(<MyPureComponent />, root);
 // ReactDOM.render(<WelcomeDialog />, root);
 // ReactDOM.render(<SplitedApp />, root);
 ReactDOM.render(<Calculator />, root);


/*  function unmount () {
    ReactDOM.unmountComponentAtNode(root);
}
window.setTimeout(unmount, 2000); */

/* ReactDOM.render(<Clock />, root);
 */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
