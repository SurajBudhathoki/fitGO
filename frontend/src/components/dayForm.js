import React, { Component } from 'react';


 const Dayform = (props) =>  (

    <div>
        <form> 
               ExerciseName: <input name=
               "exerciseName" type="text" onChange= {props.handleChange} />
               Sets: <input name="sets" type="number" onChange= {props.handleChange} />
               Reps: <input name="reps" type="number" onChange= {props.handleChange}  />   
               <button onClick= {props.handleClick} > add </button>
        </form>
    </div>

 )


export default Dayform;