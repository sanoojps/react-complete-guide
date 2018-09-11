import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Person Component
import Person from "./Person/Person"
import RandomPerson from "./RandomPerson/RandomPerson"
import PersonWithInput from "./PersonWithInput/PersonWithInput"
import PersonWithStyle from "./PersonWithStyle/PersonWithStyle"

import ToggleButton from "./ToggleButton/ToggleButton"
class App extends Component {

  /*
  Properties 
  */
 profiles = {
  persons:[
    {
      name: "genius", age: 280
    },
    {
      name: "sadad", age: 287
    },
    {
      name: "sdad", age: 2999
    },
  ]
 };


 /*
 inherited from Component
  */
 state = 
 {
    persons:[
      {
        name: "Max", age: 28
      },
      {
        name: "Manu", age: 28
      },
      {
        name: "Stephanie", age: 29
      },
    ],
    someOtherState: "Some",
    showPersons: false /** toggle display */
 };

/**
 * Updating "state" rerenders parts involved
 */

  render() {
    // return (
    //   // <div className="App">
    //   //   {/* <header className="App-header">
    //   //     <img src={logo} className="App-logo" alt="logo" />
    //   //     <h1 className="App-title">Welcome to React</h1>
    //   //   </header>
    //   //   <p className="App-intro">
    //   //     To get started with React, edit <code>src/App.js</code> and save to reload.
    //   //   </p> */}
    //   //   <img src={logo} className="App-logo" alt="logo" />
    //   //   {/* <h1> Hi, I'm a react app</h1> */}
    //   // </div>
    // );
    /**
     * return (
     *  <div className="App">
     *    <h1>Hi, Does this work now </h1>
     * </div>
     * );
     * 
     * This JSX code can be written as 
    */
   
  //  return (
  //     <div className="App">
  //       <h1>Hi, Does this work now </h1>
  //       <Person name="Anu"/>
  //       <Person/>
  //       <Person name="Radha" age="36"> My Hobbies </Person>
  //       <RandomPerson></RandomPerson>
  //       <button>Click Me!</button>
  //    </div>
  //    );


  /**
   * inline styling of button
   */

   const style = {
     backGroundColor: 'white',
     font: 'inherit',
     border: '1x solid blue',
     padding: '8px',
     cursor: 'pointer'
   };


   /**
    * using a local variable insteda of full conditional
    */
   let persons = null;

   if (this.state.showPersons)
   {
     persons = 
    (
      <div>
        
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}> 
      My new Hobbies 
      </Person>

      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}> 
      My otyher  Hobbies 
      </Person>

      </div> 

      )

   }

  /** 
   * using class variables and state
  */    
     return (
      <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
        <h1>Hi, Does this work now </h1>
        <Person name={this.state.persons[0].name}/>
        <Person/>

        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[0].age}> 
        My Hobbies 
        </Person>

        <RandomPerson></RandomPerson>

        <button 
        style={style}
        onClick = {this.buttonClickEventhandler}>
        Click Me!
        </button>

        {/* Passing  method references between components */}
        <RandomPerson 
        title = "you can click me too" 
        clickHandler = {this.buttonClickEventhandler} >
         </RandomPerson>
         
         {/* Passing  data between components */}
         
         <RandomPerson 
        title = "you can click me too" 
        clickHandler = 
        {this.buttonClickEventhandlerWithParameter.bind(
          this,"MAxine"
          )} >
         </RandomPerson>

{/* Passing  data between components 
alternate way using an arrow function*/}

         <button 
        onClick = 
        {
          () => {
            return this.buttonClickEventhandlerWithParameter(
              "BullDOFG"
            )
          }
        }
        >
        Click Me too!
        </button>

{/* two way binding*/}

     <PersonWithInput
       changeHandler={this.nameChangeHandler}
       name={this.state.persons[1].name} 
        age={this.state.persons[1].age}> 
      Enter Something peep
     </PersonWithInput>


        <PersonWithStyle
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}> 
        >
        My Hobbies 
        </PersonWithStyle>


       

        {/* conditional .. use ternary expression  
          {  exp ? <div> :  }
        */}
        {/* { this.state.showPersons ? 
           <div>

           <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}> 
           My new Hobbies 
           </Person>
   
           <Person 
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age}> 
           My otyher  Hobbies 
           </Person>
   
           </div> 

           : null /**Else condition */
        } 


       
       <ToggleButton 
        onClick = {this.toggleHandler}
        toggleState = {this.state.showPersons}
        >
        Toggle display below
        </ToggleButton>


        {persons}

     </div>
     );

     

  }

  buttonClickEventhandler = () => 
  {
    console.log("I was clicked");
    /*
    Mutating State
    */
    this.setState(this.profiles);
  }

  buttonClickEventhandlerWithParameter = (newName) => 
  {
    console.log("I was clicked");
    /*
    Mutating State
    */
    this.setState(
      {
        persons:[
          {
            name: newName, age: 28
          },
          {
            name: "Manu", age: 28
          },
          {
            name: "Stephanie", age: 29
          },
        ]
      }
    );
  }


  nameChangeHandler = (event) => {
    this.setState(
      {
        persons:[
          {
            name: "MF", age: 28
          },
          {
            name: event.target.value, age: 287
          },
          {
            name: "Stephanie", age: 290
          },
        ]
      }
      
    )
  } 

  toggleHandler = (event) => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }



} // class



export default App;
