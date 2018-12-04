import React, { Component } from 'react';

import {Grid, List,  Select, ExpansionPanel, TextField, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Divider, Button, Snackbar, IconButton, Table, TableHead, TableCell, TableRow, TableBody  } from '@material-ui/core';
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
            this.setState({ open: true });
            console.log('deleted');

        } )
        
    }

    goBack = (event) => {
        event.preventDefault();

        this.setState({ isUpdating : false})
    }

    // handleClick = () => {
    //     this.setState({ open: true });
    //   };
    
      handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ open: false });
      };
 
    render() {
        const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'] 

        return(
            <div>
                <Grid container spacing={16}>
                    <Grid item xs>
                    </Grid>

                    <Grid item xs={8}>
                        {this.state.isUpdating
                         ? 
                        <div>
                            <h1> Edit</h1>  
                            <button onClick={this.goBack} className= "button deleteButton">
                            Go back </button>
                            
                            <div className="userForm" > 
                                <h1> Enter new information:</h1>
                                <div className="inner-wrap">
                                    <Select native onChange={this.handleUpdate} name="newDay" >
                                                                                   
                                    {dayList.map((day,index) => (
                                    <option key={index}>  {day}  </option>
                                    ))}
                                                        
                                    </Select> <br/>
                                    
                                    <TextField type="text" label="Exercise Name" margin="normal" onChange = {this.handleUpdate} name="newExercise" /> <br/>
                                    <TextField type="text" label="Sets" margin="normal" onChange = {this.handleUpdate} name="newSets" /> <br/>
                                    <TextField type="text" label="Reps" margin="normal" onChange = {this.handleUpdate} name="newReps" /> <br />

                                    <button className= "button submitButton" onClick={this.updateArray} > Update</button>
                                    <br></br>
                                    <button className= "button submitButton"  onClick = {this.updateProgram}>  Submit</button>
                                </div>       
                            </div>         
                        </div> 
                        : 
                        <div className = "viewContainer">
                            <h1 className="programs"> Your Programs </h1> 
                            {
                            this.state.programList.map((program, index) =>  {
                                return(
                                    <div key={index} >

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary> 
                                                <h1 className ="programName" > {program.programName} </h1>
                                            </ExpansionPanelSummary>
                                            <ExpansionPanelDetails> 
                                                <div> 

                                                {program.days.map((day, index) => {
                                                return(
                                                <List key={index}> 
                                                    <h3 className="programs" > {day.dayName} </h3>  
                                                    <Table>
                                                        <TableHead>
                                                            <TableRow> 
                                                            <TableCell> Exercise Name </TableCell>
                                                            <TableCell> Sets</TableCell>
                                                            <TableCell> Reps </TableCell>
                                                            </TableRow>
                                                        </TableHead> 
                                                        <TableBody>
                                                        {day.exercises.map((exercise, index) => {
                                                        return(
                                                        <TableRow key={index}>
                                                          <TableCell>   {exercise.exerciseName} </TableCell>
                                                          <TableCell>  {exercise.sets}  </TableCell>
                                                          <TableCell>   {exercise.reps} </TableCell>
                                                        </TableRow>
                                                        )
                                                    })}

                                                        </TableBody>      
                                                    </Table>  
                                                    
                                                
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
                                    </div> 
                              )})

                            }    
                        </div>
                        } 
                       
                    </Grid>
                    <Grid item xs>
                    </Grid>
                 </Grid>   

                 <div>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={3500}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> Program Deleted </span>}
                    action={[

                        <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={this.props.close}
                        onClick={this.handleClose}
                        >
                           X
                        </IconButton>,
                    ]}
                    />
                </div>           

            </div>
        )
    }

}   