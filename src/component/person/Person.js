import React  from 'react';
import './person.css';


//This is stateless, presentational

const person = (props) => {
    // return <p>I'm a {props.name} and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type= "text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

// Esto es para renderizar el app principal ReactDOM.render(app, document.querySelector('#app'));

export default person;