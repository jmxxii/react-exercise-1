import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Jack, ', age: 42},
      { id: '2', name: 'Rob', age: 55},
      { id: '3', name: 'Alex', age: 24}
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice()
    // or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    const person = [...this.state.persons[personIndex]];
// or
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons] 
    persons[personIndex] = person;

    this.setState( {persons: persons} )

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

      if ( this.state.showPersons ) {
        persons = (
          <div>
          {this.state.persons.map( (persons, index) => {
            return <Person
                click = {() => this.deletePersonHandler(index)} 
                name = {persons.name}
                age = {persons.age} 
                key = {persons.id}
                changed = {(event) => this.nameChangeHandler(event, persons.id)} />
              
            
          })}
          </div>
        )
      }

    return (
      <div className="App">
  
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Jeyson</h1>
          <button 
          style = {style}
          onClick = {this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'This is my react project'))

  }
}

export default App;
