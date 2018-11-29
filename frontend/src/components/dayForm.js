import React, { Component } from 'react';



export default class Dayform extends Component {
//    state = {
//     exerciseName : '',
//     reps: null,
//     sets: null

//    } 

   pushArray = (event) => {
    event.preventDefault();

    const testObject = [ this.state.exerciseName, this.state.reps, this.state.sets ]

   const testList = [];

   testList.push(testObject);

   console.log(testList);
   
        // axios.put(`/api/programs/${this.state.programID}`, { days : this.state.dayObject } )
        // .then((result) => {
        //     console.log(result.data)
        // })

}

  render() {
      return(
          <div>
              <form> 
               ExerciseName: <input name=
               "exerciseName" type="text" onChange= {this.props.handleChange} />
               Sets: <input name="setName1" type="number" onChange= {this.props.handleChange} />
               Reps: <input name="repName1" type="number" onChange= {this.props.handleChange}  />   
               <button onClick= {this.pushArray} > add </button>
               </form>


               
              
          </div>
          
      )
  }  

  
}

