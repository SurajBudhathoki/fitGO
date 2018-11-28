import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,Paper, TextField, Select, Button, Table,TableHead, TableBody, Typography, TableRow, TableCell, FormControlLabel, Checkbox, List, ListItem, FormControl, FormLabel, RadioGroup, Radio,  ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel, Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';
import Addmodal from './Addmodal';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            exerciseList : [],
            programName: '',
            days: '',
            numDays:null,
            programID: '',
            isUpdating: false,    
            // reps: '',
            // sets:'',
            // exercise: '',
            tihsProgram: [],
            dayNumber: [],
            dayID: '',
            open: false,
            dayObject: {},
            exName1: '',
            repName1: '',
            setName1: '',
            exName2: '',
            repName2: '',
            setName2: '',
            dayObject : [
                
                        {
                            dayname2: '',
                            exercises: [{
                                            exerciseName1: '',
                                            sets1: null,
                                            reps1: null
                                        },
                                        {
                                            exerciseName2: '',
                                            sets2: null,
                                            reps2: null
                                        },
                                        {
                                            exerciseName3: '',
                                            sets3: null,
                                            reps3: null
                                        }
                                    ]
                        }
                    ]
        }
        this.handleChange =  this.handleChange.bind(this);
        this.renderNumOfDays = this.renderNumOfDays.bind(this);
    }

    componentDidMount() {
        this.getExercises();
    
    }


    handleChange =  (event) => {

        console.log(event.target.value)
       
        this.setState({
            [event.target.name]: event.target.value
        });


    }

    handleClickOpen = (event) => {
        event.preventDefault();
        this.setState({ open: true });
      };
    
      handleClose = (event) => {
          event.preventDefault();
        this.setState({ open: false });
      };

      

    handleAdd = (event) => {
        event.preventDefault();

        axios.post('/api/programs', {
            programName: this.state.programName,
            days: {
                dayName: this.state.days,

                exercises: {
                    exerciseName: this.state.exercise,
                    sets: this.state.sets,
                    reps: this.state.reps,

                }
            }

        }).then(response => {
            
            console.log(this.state.dayNumber);

            this.setState({programID : response.data._id});

            axios.get(`/api/programs/${this.state.programID}`)
            .then((result) => {
    
                console.log(result.data.days[0]._id);
                console.log(result.data)

               this.setState({ dayID : result.data.days[0]._id })  

            })
        }).catch(err => {
            console.log(err);
        })

       

    }



    getExercises = () => {
        axios.get('/api/exercises')
        .then((result)=>{
            this.setState({exerciseList : result.data});

        })
    }


    renderNumOfDays = (event) => {
         event.preventDefault();

         
        const numDays = this.state.numDays;
        console.log(numDays);





            const dayArray = [1,2,3,4,5,6,7];
            // const dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday']

            const dayNumber = dayArray.slice(0, numDays);
            console.log(dayNumber);


            this.setState({ dayNumber : dayNumber})


           

             

        }


    // putExercises = (event) => {
    //     event.preventDefault();

    //     axios.put(`/api/programs/${this.state.programID}`, { days : this.state.dayObject } )
    //     .then((result) => {
    //         console.log(result.data)
    //     })

    // }


    pushArray = (event) => {
        event.preventDefault();

        const List = [];


       const dayObject = {dayName:this.state.days, exercises:[ { exerciseName: this.state.exName1, sets: this.state.setName1, reps: this.state.repName1 }, { exerciseName: this.state.exName2, sets: this.state.setName2, reps: this.state.repName2 }
       ]}

       


        List.push(dayObject);
        console.log(List);

        this.setState({dayObject: dayObject });

        
  
            axios.put(`/api/programs/${this.state.programID}`, { days : this.state.dayObject } )
            .then((result) => {
                console.log(result.data)
            })
    
    }

       
    


    render() {
        const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday'] 

        return(

            <div>
                 <Grid container spacing={24}>
                    <Grid item xs={3}>

                        <Sidenav />

                    </Grid>
                    <Grid item xs={9} className="createGrid">
                        <Paper className="paper" >
                            <h1>Create a program</h1>
                            
                            <form>
                                <div>
                                <TextField type="text" label="Program Name" margin="normal"   value ={this.state.programName} onChange = {this.handleChange} name="programName" />
                                </div>

                                {/* <div>
                                <TextField type="number" label="Days"
                                margin="normal" value= {this.state.numDays}
                                onChange=  {this.handleChange} name="numDays" />

                                <button onClick={this.renderNumOfDays} > ok </button>

                                 <button onClick={this.getPrograms} > get this program </button>
                                </div> */}


                                
                               
                               
                                <div>

                          

                                    {
                                    this.state.dayNumber.map((day, index)=> (
                                        <List key = {index}>


                                                <ExpansionPanel>

                                                <ExpansionPanelSummary>
                                                day {day}
                                                </ExpansionPanelSummary>

                                                <ExpansionPanelDetails>
                                                <TextField type="text" label="Exercise Name"
                                                margin="normal" value={this.state.exercise}
                                                onChange = {this.handleChange} name="exercise" />

                                                <TextField type="number" label="Sets"
                                                margin="normal" value= {this.state.sets}
                                                onChange=  {this.handleChange} name="sets" />

                                                <TextField type="number" label="Reps"
                                                margin="normal" value= {this.state.reps}
                                                onChange=  {this.handleChange} name="reps" />

                                                {/* <button onClick = {this.putExercises}> add exercise </button> */}
                                                </ExpansionPanelDetails>
                                            </ExpansionPanel>
                                        </List>
                                    ))
                                }

                                </div>

                                 <br />
                               <div>
                                   <Button variant="contained" color="primary"
                                   onClick = {this.handleAdd} >
                                       Next
                                   </Button>
                               </div>

                              </form>

                        
                            <button onClick = {this.handleClickOpen}> add a day </button>
                                <Dialog  disableBackdropClick
                                    disableEscapeKeyDown open={this.state.open} onClose={this.handleClose} >
                                <DialogTitle>Pick a day </DialogTitle>
                                <DialogContent>
                                    
                                <Select native value = {this.state.days} onChange={this.handleChange} name="days" >
                                    <option value="" />
                                    
                                      {dayList.map((day,index) => (
                                          <option key={index}>  {day}  </option>
                                      ))}
                                   
                                    </Select>

                                </DialogContent>
                                <DialogActions>
                                   

                                <Button onClick={this.handleClose} color="primary">
                                    Confirm
                                    </Button>
                                </DialogActions>
                                </Dialog>

                                    


                                {/* <Select native value = {this.state.days} >

                                    {this.state.numOfDays.map((day,index)=>  (
                                        <option key = {index} >
                                          {day}
                                        </option>
                                    ))}
                                </Select> */}

                                 

                                Exercise name <input onChange={this.handleChange} type = "text" name="exerciseName" />
                                Sets <input onChange={this.handleChange} type = "number" name = "sets" />
                                Reps <input onChange={this.handleChange} type = "number" name = "reps" />
                                
                                Exercise name <input onChange={this.handleChange} type = "text" name="exName2" />
                                Sets <input onChange={this.handleChange} type = "number" name = "setName2" />
                                Reps <input onChange={this.handleChange} type = "number" name = "repName2" />
                                <button onClick={this.pushArray} > add exercise</button>
                                {/* <button onClick = {this.putExercises}> add exercise </button> */}



                                {/* {this.state.numOfDays.map((days, index) => (
                                      <List key= {index}>
                                          Day- {days}
                                          <Addmodal exer = {this.state.exerciseList} />

                                      </List>
                                  ))}    */}




                            {/* <div> {this.renderNumOfDays} </div>    */}

                        </Paper>

                    </Grid>
                 </Grid>
            </div>
        )
    }

}