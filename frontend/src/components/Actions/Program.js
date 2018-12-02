import React from 'react';
import { List, } from '@material-ui/core';

const Program = props => (

  <div key={props.id} >

    {props.programName}

     {props.days.map((day, index) => {
                                            return(
                                                <List key={index}> 
                                                  <h3> {day.dayName} </h3>  

                                                 {/* <Edit key={props._id} id={props._id} onUpdate = {this.showUpdate} /> */}

                                                    {day.exercises.map((exercise, index) => {
                                                        return(
                                                            <List key={index}>
                                                                {exercise.exerciseName}
                                                                {exercise.sets} x
                                                                {exercise.reps}
                                                            </List>
                                                        )
                                                    })}
                                                </List> 
                                            )
                                        })}

  </div>
)

export default Program;