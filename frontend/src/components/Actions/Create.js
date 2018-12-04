import React, { Component } from 'react';
import {Grid, TextField, Select, FormControl, Snackbar, IconButton, Divider  } from '@material-ui/core';
import axios from 'axios';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            exerciseList : [],
            open: false,
            dayOpen: false,
            exerciseOpen: false,
            programsToAdd: [],
            exerciseName: '',
            sets: '',
            reps: '',
            programName: '',
            dayName: '',
            daysToAdd: [],
            exerciseToAdd: [],

            showDay: false,
            showExercise: false,
        }
        this.handleChange =  this.handleChange.bind(this);

    }

    componentDidMount() {
        this.getExercises();
    
    }


    handleChange =  (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });

    }


    //adding exercises 
     addExercises = (event) => {

        event.preventDefault();
           
        let exercises = this.state.exerciseToAdd;
           
        exercises.push({ 
                 exerciseName : this.state.exerciseName,
                 sets: this.state.sets,
                 reps: this.state.reps,
                 
        })

        this.setState({ exerciseToAdd:  exercises, 
            });
        this.setState({ exerciseOpen: true });  

        this.setState({ showExercise: false});

     } 

     //adding days
    handleAdd = (event) => {
        event.preventDefault();

        let days = this.state.daysToAdd;

        days.push({
                dayName: this.state.dayName,
                exercises: this.state.exerciseToAdd,
        })


        this.setState({ daysToAdd: days});
        this.setState({ dayOpen: true });   

        this.setState({exerciseToAdd: [], showExercise: false, showDay: false });

    }

    //posting the program to the database
    postProgram = (event) => {

        event.preventDefault();
        
        axios.post('/api/programs',  
            { 
            programName: this.state.programName,
            days: this.state.daysToAdd
            }

        ).then(response => {

           console.log(response.data)
           this.setState({ open: true });

        }).catch(err => {
            console.log(err);
        })

        this.setState({ showDay: false, showExercise: false, programName: ""});

    }

    //getting exercises
    getExercises = () => {
        axios.get('/api/exercises')
        .then((result)=>{
            this.setState({exerciseList : result.data});
            console.log(result.data);

        })
    }

    //showing the day form
    handleShowDay = (event) => {
        this.setState({ showDay : true});
    }
       
    //showing the exercise form
    handleShowExercise = (event) => {

        this.setState({ showExercise : true});
    }

    //closing the snackbar
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
            }
            this.setState({ open: false, dayOpen: false, exerciseOpen: false });
          };

    render() {
        const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ] 

        return(

            <div>
                 <Grid container spacing={16}>
                    <Grid item xs>                   
                    </Grid>

                    <Grid item xs={9}>
                        <div className = "userForm">
                            <h1>Create a program</h1>
                            
                            <div className="inner-wrap">
                                <div>
                                    <FormControl required={true} > 
                                    <TextField type="text" label="Program Name" margin="normal" required={true}  value ={this.state.programName} onChange = {this.handleChange} name="programName" />
                                    </FormControl>
                                </div> <br/>
                                <Divider /><br />
                               
                                <button className= "button submitButton" variant = "contained"  onClick = {this.handleShowDay}>
                                Add a day                                  
                                </button>

                                <br></br><br></br>

                                {
                                  this.state.showDay ?      
                                   <div >                                  
                                        <Select native onChange={this.handleChange} name="dayName"  >
                                        {dayList.map((day,index) => (
                                          <option key={index}>  {day}  </option>
                                        ))}
                                        </Select>    
                                        <button className= "button confirmButton" variant="contained" onClick={this.handleAdd} > Confirm 
                                        </button>  <br/><br/> <br/>                       
                                        <Divider />
                                        <br />        

                                        <button className= "button submitButton"variant = "contained" 
                                         onClick = {this.handleShowExercise}> Add Exercise
                                        </button>  <br/> <br/>
                                    </div>    
                                 :
                                    <div></div>
                            
                                }   
                               

                                {
                                  this.state.showExercise ? 

                                    <div>
                                        <form>
                                        <Select native onChange={this.handleChange} name="exerciseName"  >
                                        {this.state.exerciseList.map((exercise,index) => (
                                          <option key={index}>  {exercise.exerciseName}  </option>
                                        ))}
                                        </Select>    
                                        {/* <TextField type="text" label="Exercise Name" margin="normal" onChange = {this.handleChange} name="exerciseName" /> <br/> */}
                                        <TextField type="text" label="Sets" margin="normal" onChange = {this.handleChange} name="sets" /> <br/>
                                        <TextField type="text" label="Reps" margin="normal" onChange = {this.handleChange} name="reps" /> <br />
                            
                                        <button className="button confirmButton" onClick={this.addExercises} > Confirm</button>
                                         </form>
                                         <br />
                                        <Divider />
                                        <br/><br/>
                                    </div>                            
                                 :
                                    <div></div>

                                }                             
                               
                               <br/><br/><br/><br/>
                                    <Divider /> <br/>
                                <div>
                                    <button className= "button submitButton" variant="contained" 
                                    onClick = {this.postProgram} > Create </button>
                                </div>

                            </div>

                        </div> 
                    </Grid>
                    <Grid item xs>
                    </Grid>
                 </Grid>

                {/* Program Created Snackbar */}
                <div>
                    <Snackbar anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> Program Created! </span>}
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

                {/* Day Added Snackbar  */}
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
                    message={<span id="message-id"> Day Added! </span>}
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

                {/* Exercise Added Snackbar  */}
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
                    message={<span id="message-id"> Exercise Added! </span>}
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
        )
    }

}