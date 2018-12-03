import React, { Component } from 'react';

import {Grid,Paper,  List,  Select, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Divider, } from '@material-ui/core';
import axios from 'axios';
import Delete from './Delete';
import Edit from './Edit';


export default class View extends Component {

    state = {
        programList: [],
        dayList : [],
        exerciseList: [],
        open: false,
        isUpdating: false,
        updateID: '',
        programUpdate: '',
        programName: '',
        showProgram: false,
        newDay:'',
        newExercise:'',
        newSets: '',
        newReps: '',
        exerciseToUpdate: []
    }


  

    componentDidMount() {
        this.getPrograms();
    }

    getPrograms = () => {
        axios.get('/api/programs')
        .then((result) => {
            
         

            this.setState({programList: result.data});
         
       
        });

      }


      handleShowProgram = () => {

        this.setState({ showProgram: true})
      }


      getSingleProgram = (event) => {


        console.log(event.target.value);

        axios.get(`/api/programs/${event.target.value}`)
        .then((result) => {
             console.log(result.data);
        })

    }  

    updateArray = (event) => {
        event.preventDefault();

        let exercises = this.state.exerciseToUpdate;

        exercises.push({
            exerciseName: this.state.newExercise,
            sets: this.state.newSets,
            reps: this.state.newReps,

        })

        this.setState({
            exerciseToUpdate: exercises,
        });

        console.log(this.state.exerciseToUpdate);
    }

   
    updateProgram = (event) => {

        event.preventDefault();

        this.setState({
            isUpdating: false
        })



        axios.put(`/api/programs/${this.state.updateID}`, {
            //programName: this.state.programUpdate

            days: {
                dayName: this.state.newDay,
                exercises: this.state.exerciseToUpdate,
            }

        }).then(() => {


            this.getPrograms();

            console.log('updated');
        })


    }

    handleUpdate = (event) => {
        this.setState({ [event.target.name]: event.target.value })

        console.log(event.target.value);
    }



    showUpdate = (event) => {
        this.setState({ isUpdating: true, updateID: event.target.value })

        console.log(this.state.updateID);
    }



    deleteProgram = (event) => {

        event.preventDefault();


        axios.delete(`/api/programs/${event.target.value}`)
        .then(() => {
            

            this.getPrograms();

            console.log('deleted');

        } )
        
    }


 
    render() {
        const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'] 

        return(
            <div>
                 <Grid container spacing={16}>
                    <Grid item xs>
                    
                    </Grid>
                    <Grid item xs={8}>
                        <Paper className="viewPaper" >
                       
                            

                             {this.state.isUpdating
                                ? 
                                 <div>
                                <h1> Edit</h1>  

                                {/* <Grid container spacing={40}> 
                                    <Grid item xs={6} >
                                    <div className="userForm" > 
                                <h1> Current information:</h1>
                                <div className="inner-wrap">
                                    Day:  Monday
                                    
                                  <label>  Exercise name <input  onChange={this.handleUpdate} type = "text" name="newExercise" /> </label> 
                                  <label>  Sets <input  onChange={this.handleUpdate} type = "number" name = "newSets" /> </label> 
                                 <label>   Reps <input  onChange={this.handleUpdate} type = "number" name = "newReps" /> </label> 
                                  
                                     </div>       
                                    </div>
                                    </Grid>

                                    <Grid item xs={6}> */}
                                    
                                    <div className="userForm" > 
                                <h1> Enter new information:</h1>
                                <div className="inner-wrap">
                                    Day:  <Select native onChange={this.handleUpdate} name="newDay" >
                                                            
                                                            
                                    {dayList.map((day,index) => (
                                    <option key={index}>  {day}  </option>
                                    ))}
                                                        
                                    </Select>   
                                    
                                  <label>  Exercise name <input  onChange={this.handleUpdate} type = "text" name="newExercise" /> </label> 
                                  <label>  Sets <input  onChange={this.handleUpdate} type = "number" name = "newSets" /> </label> 
                                 <label>   Reps <input  onChange={this.handleUpdate} type = "number" name = "newReps" /> </label> 
                                    <button onClick={this.updateArray} > Update</button>
                                    <br></br>
                                    <button onClick = {this.updateProgram}> Edit final</button>
                                     </div>       
                                    </div>
                                    
                                    {/* </Grid>
                                    
                                </Grid>                */}
                                
                                    </div> 

                                     : 
                                                    
                                                    
                                    <div>

                    <h1 className="programs"> <u>Your Programs </u></h1> 
                                                    {
                              this.state.programList.map((program, index) =>  {
                                  return(
                                  <List key={index} >
                                      

                                        <ExpansionPanel>
                                        <ExpansionPanelSummary> 
                                        <h1> {program.programName} </h1>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails> 
                                        <div>




                                            {program.days.map((day, index) => {
                                            return(
                                            <List key={index}> 
                                            <h3> {day.dayName} </h3>  

                                            

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

                                                
                                            



                                        </ExpansionPanelDetails>
                                        <Divider/>
                                         <ExpansionPanelActions>
                                         <Edit key={program._id} id={program._id} onUpdate = {this.showUpdate} />

                                            <Delete  id={program._id}  onDelete={this.deleteProgram} />
                                        </ExpansionPanelActions>       

                                        </ExpansionPanel>
                                      
                                     

                                        



                                        
                                              
                                  </List> 
                              )})

                          }    
                                                         </div>
                                                } 
                        </Paper>
                    </Grid>
                    <Grid item xs>
          
                    </Grid>
                 </Grid>   


            </div>
        )
    }

}   