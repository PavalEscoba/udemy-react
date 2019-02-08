import React, { Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {constructor(props){
  super(props);
    console.log('PEROSNS inside Person constructor', props);
  }
  componentWillMount(){
    console.log('PEROSNS inside Person componentWillMount()');
  }
  componentDidMount(){
    console.log('PEROSNS inside Person componentDidMount()');
  }
  componentWillReceiveProps(newProps){
    console.log('inside COMPONENT_WILL_RECIEVE_PROPS !!!!!!!', newProps);
  }
  shouldComponentUpdate(newProps, newState){
    console.log("inside shouldComponentUpdate", newProps, newState);
    return newProps !== this.props.persons;
  }
  componentWillUpdate(newProps, newState){
    console.log("inside componentWillUpdate", newProps, newState);
  }
  componentDidUpdate(){
    console.log("inside componentDidUpdate");
  }
  render(){
    console.log('person inside Person render()');
      return this.props.persons.map( ( person, index ) => {
        return <Person
              click = { () => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed = {(event) => this.props.changed(event, person.id)}/>
    });
  }
};

export default Persons;