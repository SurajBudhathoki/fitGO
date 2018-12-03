import React, { Component } from 'react';

import {Grid,Paper,  List,  Button,  Select, Modal, DialogTitle, Dialog, DialogActions } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';
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

        //event.preventDefault();

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
        //this.setState({ open: false });

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
                {/* <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}>  */}
                        <Paper className="paper" >
                            <h1> <u>Your Programs </u></h1> 
                          
                          


                             {this.state.isUpdating
                                                    ? 
                                                    
                                                    <div> 
                                                       Day:  <Select native onChange={this.handleUpdate} name="newDay" >
                                                            
                                                            
                                                            {dayList.map((day,index) => (
                                                                <option key={index}>  {day}  </option>
                                                            ))}
                                                        
                                                            </Select>   
                                                    Exercise name <input onChange={this.handleUpdate} type = "text" name="newExercise" />
                                                    Sets <input onChange={this.handleUpdate} type = "number" name = "newSets" />
                                                    Reps <input onChange={this.handleUpdate} type = "number" name = "newReps" />
                                                    <button onClick={this.updateArray} > Update</button>
                                                    <br></br>
                                                    <button onClick = {this.updateProgram}> Edit final</button>

                                                    </div>

                                                    // <EditForm value={this.state.programUpdate} changeHandler={this.handleUpdate} clickHandler={this.updateProgram}  /> 
                                                    :  
                                                    <div>

                                                    {
                              this.state.programList.map((program, index) =>  {
                                  return(
                                  <List key={index} >
                                      <h1> {program.programName} <Button  color="primary" variant="contained" onClick={this.handleShowProgram} > View  </Button>  </h1>  

                                   
                                      
                                      {
                                          this.state.showProgram 
                                          ?
                                          <div>

                                                 {/* <Program key={program._id} id={program._id} programName={program.programName} days = {program.days} /> */}


                                          <Edit key={program._id} id={program._id} onUpdate = {this.showUpdate} />

                                          <Delete  id={program._id}  onDelete={this.deleteProgram} />

                                         

                                            {program.days.map((day, index) => {
                                            return(
                                                <List key={index}> 
                                                  <h3> {day.dayName} </h3>  

                                                 {/* <Edit key={program._id} id={program._id} onUpdate = {this.showUpdate} /> */}

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
                                          :
                                          <div></div>
                                      }
                                      
                                      

                                        



                                        
                                              
                                  </List> 
                              )})

                          }    
                                                         </div>
                                                } 
                        </Paper>
                    {/* </Grid>
                 </Grid>    */}


            </div>
        )
    }

}   