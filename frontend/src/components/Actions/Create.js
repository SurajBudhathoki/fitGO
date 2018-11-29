import React, { Component } from 'react';
import {Grid,Paper, TextField, Select, Button, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel,  List } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';
import Addmodal from './Addmodal';
import Dayform from '../dayForm';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            exerciseList : [],
           
            // days: '',
            numDays:null,
            programID: '',
            isUpdating: false,    
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

            programsToAdd: [],
            exercises: '',
            sets: '',
            reps: '',
            programName: '',
            dayName: '',
            daysToAdd: []
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


        // let programs = this.state.daysToAdd;

        // programs.push({ 
            
        //     dayName: this.state.days,
        
        //     exercises: {
        //         exerciseName : this.state.exerciseName,
        //         sets: this.state.sets,
        //         reps: this.state.reps,
        //     }   
        
        // }) 

        // this.setState({ daysToAdd: programs});
        // console.log(this.state.daysToAdd);


        let days = this.state.daysToAdd;

        days.push({
           
            days: {
                dayName: this.state.dayName,

                exercises: {
                    exerciseName : this.state.exerciseName,
                    sets: this.state.sets,
                    reps: this.state.reps,
                }
            }

        })

        this.setState({ daysToAdd: days});

        console.log(this.state.daysToAdd);


       

    }


    postProgram = (event) => {

        event.preventDefault();
        
        axios.post('/api/programs',  
            
          { 
              programName: this.state.programName,
               days: this.state.dayToAdd 
        
        }

        ).then(response => {
            
           console.log(response.data)

            // this.setState({programID : response.data._id});

            // axios.get(`/api/programs/${this.state.programID}`)
            // .then((result) => {
    
                
               // console.log(result.data)


            // })
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


            const dayNumber = dayArray.slice(0, numDays);
            console.log(dayNumber);


            this.setState({ dayNumber : dayNumber})


           

             

        }




    // pushArray = (event) => {
    //     event.preventDefault();

       
    //         // axios.put(`/api/programs/${this.state.programID}`, { days : this.state.dayObject } )
    //         // .then((result) => {
    //         //     console.log(result.data)
    //         // })
    
    // }

       
    


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
                               

                              </form>

                                <br></br><br></br>

                                      
                               
                        
                            {/* <button onClick = {this.handleClickOpen}> add a day </button>
                                <Dialog  disableBackdropClick
                                    disableEscapeKeyDown open={this.state.open} onClose={this.handleClose} >
                                <DialogTitle>Pick a day </DialogTitle>
                                <DialogContent>
                                    
                               

                                </DialogContent>
                                <DialogActions>
                                   

                                <Button onClick={this.handleClose} color="primary">
                                    Confirm
                                    </Button>
                                </DialogActions>
                                </Dialog> */}

                                    


                                {/* <Select native value = {this.state.days} >

                                    {this.state.numOfDays.map((day,index)=>  (
                                        <option key = {index} >
                                          {day}
                                        </option>
                                    ))}
                                </Select> */}

                                 
                                <div> Day: 
                                <Select native onChange={this.handleChange} name="dayName" >
                                    <option value="" disabled />
                                    
                                      {dayList.map((day,index) => (
                                          <option key={index}>  {day}  </option>
                                      ))}
                                   
                                    </Select>    
                                </div>    


                                <div>
                                Exercise name <input onChange={this.handleChange} type = "text" name="exerciseName" />
                                Sets <input onChange={this.handleChange} type = "number" name = "sets" />
                                Reps <input onChange={this.handleChange} type = "number" name = "reps" />
                                </div>
                                <button onClick={this.handleAdd} > add exercise</button>
                                

                                {/* <Dayform dayObject1={this.state.dayObject1} exerciseName={this.state.exName1} sets={this.state.setName1} reps={this.state.repName1} handleChange = {this.handleChange} handleClick = {this.pushArray} />

                                <Dayform exerciseName={this.state.exName2} sets={this.state.setName2} reps={this.state.repName2} handleChange = {this.handleChange} handleClick = {this.pushArray} /> */}

                                 <div>
                                   <Button variant="contained" color="primary"
                                    onClick = {this.postProgram} 
                                   >
                                       Next
                                   </Button>
                               </div>

                                
                                    


                        </Paper>

                    </Grid>
                 </Grid>

                 
              
            </div>
        )
    }

}