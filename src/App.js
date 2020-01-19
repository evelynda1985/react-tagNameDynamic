import React, {useState} from 'react';
import './App.css';
import Person from "./component/person/Person.js";


//This is stateful, smart container
const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    //this is an array, the first element is the current state and the second one is a function
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personState, setPersonState] = useState({
        persons: [
            {name: 'Max'},
            {name: 'Manu', age: 29},
            {name: 'Alexa', age: 34}
        ]
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [otherState, setOtherState] = useState('some other state')

    console.log(personState); //To know what the object has
    console.log(personState, otherState); //To know what the object has

    const switchNameHandler = (newName) => {
        setPersonState({
            persons: [
                {name: newName},
                {name: 'Manu', age: 29},
                {name: 'Alexa', age: 40}
            ],
            otherState: personState.otherState
        });
    }

    const nameChangeHandler = (event) => {
        setPersonState({
            persons: [
                {name: 'Max'},
                {name: event.target.value, age: 29},
                {name: 'Alexa', age: 40}
            ],
            otherState: personState.otherState
        });
    }


    return (
        <div className="App">
            <h1>Hi, I'm React App</h1>
            <p>This is really working!</p>
            <p>
                <button onClick= {() => switchNameHandler('Evelyn')}>Switch Name</button>
            </p>
            <Person
                name={personState.persons[0].name}
                age={Math.floor(Math.random() * 30)}
            />
            <Person
                name={personState.persons[1].name}
                age={personState.persons[1].age}
                click={switchNameHandler.bind(personState.persons[0].name, 'Eve')}
                changed={nameChangeHandler}

            />
            <Person
                name={personState.persons[2].name}
                age={personState.persons[2].age}
            />
        </div>
    );
}

export default app;


