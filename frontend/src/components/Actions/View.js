import React, { Component } from 'react';

import {Grid, List,  Select, ExpansionPanel, TextField, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Divider, Snackbar, IconButton, Table, TableHead, TableCell, TableRow, TableBody  } from '@material-ui/core';
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
        exerciseToUpdate: [],
        daysToUpdate: [],
        dayOpen: false,
        exerciseOpen: false,
        programOpen: false,
        error:  false,
        programText: false,
        setsText: false,
        repsText: false,
 
    }

    componentDidMount() {
        this.getPrograms();
         this.getExercises();
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

 

    updateExercise = (event) => {
        event.preventDefault();

        let exercises = this.state.exerciseToUpdate;

        if( this.state.newSets === '' || this.state.newReps === '' ) {

            this.setState ({ error: true, setsText: "Please enter number of sets", repsText: "Please enter number of reps" })
        }
        else {
        exercises.push({
            exerciseName: this.state.newExercise,
            sets: this.state.newSets,
            reps: this.state.newReps,

        })

        this.setState({
            exerciseToUpdate: exercises, newExercise : '', newSets: '', newReps: ''
        });

        this.setState({ exerciseOpen: true, error: false, setsText: '', repsText: '' });  

        console.log(this.state.exerciseToUpdate);
        }
    }

    updateDay = (event) => {
        event.preventDefault();

        let days = this.state.daysToUpdate;

        days.push({
            dayName: this.state.newDay,
            exercises: this.state.exerciseToUpdate,
        })

        this.setState({ daysToUpdate: days,  exerciseToUpdate: [] })
        this.setState({ dayOpen: true }); 

        console.log(this.state.daysToUpdate);
    }
   
    updateProgram = (event) => {

        event.preventDefault();


        if(this.state.programName === '') {

            this.setState ({ programText: "Please enter program name", error : true })
        }

        else {

        this.setState({
            isUpdating: false
        })



        axios.put(`/api/programs/${this.state.updateID}`, 
            {
            programName: this.state.programName,

            days: this.state.daysToUpdate,
            

        }).then(() => {


            this.getPrograms();
            this.setState({ programOpen: true, error: false, programText: '', });
           
        })

        }
    }

    handleUpdate = (event) => {
        this.setState({ [event.target.name]: event.target.value })

        console.log(event.target.value);
    }



    showUpdate = (event) => {
        this.setState({ isUpdating: true, updateID: event.target.value })

        console.log(this.state.updateID);

    }

       //getting exercises
       getExercises = () => {
        axios.get('/api/exercises')
        .then((result)=>{
            this.setState({exerciseList : result.data});

        })
    }

    //closing the snackbar
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
            }
            this.setState({ open:false, programOpen: false, dayOpen: false, exerciseOpen: false });
          };


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
                                <div>
                                    
                                    <TextField type="text" label="Program Name" margin="normal" required={true}  value ={this.state.programName} onChange = {this.handleUpdate} helperText = {this.state.programText} error= {this.state.error}name="programName" />
                                    
                                </div> <br/>
                                <Divider /><br />

                                    <Select native onChange={this.handleUpdate} name="newDay" >
                                                                                   
                                    {dayList.map((day,index) => (
                                    <option key={index}>  {day}  </option>
                                    ))}
                                                        
                                    </Select> <br/> <br /> <button className = "button confirmButton" onClick = {this.updateDay} > Update Day </button> <br/> <br />
                                    <Divider /> <br/>
                                    
                                    <Select native onChange={this.handleUpdate} name="newExercise"  >
                                        {this.state.exerciseList.map((exercise,index) => (
                                          <option key={index}>  {exercise.exerciseName}  </option>
                                        ))}
                                        </Select> 
                                    
                                     <br/>
                                    <TextField type="text" label="Sets" margin="normal" error ={this.state.error} helperText ={this.state.setsText} onChange = {this.handleUpdate} name="newSets" /> <br/>
                                    <TextField type="text" label="Reps" margin="normal" error = {this.state.error} helperText ={this.state.repsText} onChange = {this.handleUpdate} name="newReps" /> <br />

                                    <button className= "button confirmButton" onClick={this.updateExercise} > Update Exercise</button>
                                    <br></br> <br/>
                                    <Divider />
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

                {/* Program delete snackbar  */}
                 <div>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
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

                {/*  update day snackbar  */}

                     <Snackbar anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.dayOpen}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> Day Updated! </span>}
                    action={[
                        <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={this.props.close}
                        onClick={this.handleClose}
                        > X</IconButton>,
                    ]}
                    />


                {/* update exercise snackbar */}

                     <Snackbar anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.exerciseOpen}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> Exercise Updated! </span>}
                    action={[
                        <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={this.props.close}
                        onClick={this.handleClose}
                        > X </IconButton>,
                    ]}
                    />

                {/*  update program snackbar */}

                    <div>
                    <Snackbar anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.programOpen}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> Program Edited! </span>}
                    action={[
                        <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={this.props.close}
                        onClick={this.handleClose}
                        > X </IconButton>,
                    ]}
                    />
                </div>

            </div>
        )
    }

}   