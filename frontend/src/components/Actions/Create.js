import React, { Component } from 'react';
import {Grid, TextField, Select, FormControl,  } from '@material-ui/core';
import axios from 'axios';




export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            exerciseList : [],

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

        console.log(event.target.value)

        this.setState({
            [event.target.name]: event.target.value
        });

    }



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
        console.log(exercises)

            this.setState({ showExercise: false});


     } 


    handleAdd = (event) => {
        event.preventDefault();



        let days = this.state.daysToAdd;

        days.push({
           
           
                 dayName: this.state.dayName,

                exercises: this.state.exerciseToAdd,
           

        })




        this.setState({ daysToAdd: days});

        console.log(this.state.daysToAdd);

        this.setState({exerciseToAdd: [], showExercise: false, showDay: false });



    }


    postProgram = (event) => {

        event.preventDefault();
        
        axios.post('/api/programs',  
            
          { 
              programName: this.state.programName,


                days: this.state.daysToAdd
        
        }

        ).then(response => {
            
           console.log(response.data)

        }).catch(err => {
            console.log(err);
        })

        this.setState({ showDay: false, showExercise: false, programName: ""});

    }


    getExercises = () => {
        axios.get('/api/exercises')
        .then((result)=>{
            this.setState({exerciseList : result.data});

        })
    }


        handleShowDay = (event) => {

            this.setState({ showDay : true});
        }
       
        handleShowExercise = (event) => {

            this.setState({ showExercise : true});
        }


    render() {
        const dayList = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday' ] 

        return(

            <div>
                 <Grid container spacing={16}>
                    <Grid item xs>
                    
                    </Grid>

                    <Grid item xs={9}>
                        {/* <Paper className="createPaper" > */}
                        <div className = "userForm">
                            <h1>Create a program</h1>
                            
                            <div className="inner-wrap">
                                <div>
                                    <FormControl required={true} > 
                                <TextField type="text" label="Program Name" margin="normal" required={true}  value ={this.state.programName} onChange = {this.handleChange} name="programName" />
                                </FormControl>
                                </div>

                    

                               <br />
                               
                                <button className= "button submitButton" variant = "contained"  onClick = {this.handleShowDay}>Add a day  
                                {/* <i className="material-icons"> today </i>  */}
                                
                                </button>
                                
                             

                                <br></br><br></br>

                                   {this.state.showDay ?  
                                    
                                   <div > 
                                  
                                 <Select native onChange={this.handleChange} name="dayName"  >
                                    
                                    
                                      {dayList.map((day,index) => (
                                          <option key={index}>  {day}  </option>
                                      ))}
                                   
                                    </Select>    

                                   <br/> <br/>        
                                    

                               
                              

                                <button className= "button submitButton"variant = "contained" 
                               onClick = {this.handleShowExercise}
                               > Add Exercise
                                {/* <i className="material-icons">
                               fitness_center </i> */}

                                </button>
                                    
                               <br/> <br/> 
                               
                               <button className= "button submitButton" variant="contained" onClick={this.handleAdd} > Confirm 
                            
                            </button>  <br/>
                                </div>    
                                
                                :
                                <div></div>
                                
                                }   
                               

                            {
                                this.state.showExercise ? 

                                <div>
                                 <form> 
                                 <TextField type="text" label="Exercise Name" margin="normal" onChange = {this.handleChange} name="exerciseName" /> <br/>
                                 <TextField type="text" label="Sets" margin="normal" onChange = {this.handleChange} name="sets" /> <br/>
                                 <TextField type="text" label="Reps" margin="normal" onChange = {this.handleChange} name="reps" /> <br />
                                 
                               
                                <button className="button submitButton" onClick={this.addExercises} > Add</button>
                                </form>
                                
                              
                                <br/><br/>

                               
                                </div>
                                
                                
                                :

                                <div></div>

                            }

                             
                                

                                 
                                

                                 
                               <br/><br/><br/><br/><br/>

                                 <div>
                                <button className= "button submitButton" variant="contained" 
                                onClick = {this.postProgram} 
                                >
                                    Create 
                                </button>
                                </div>
                                    



                            </div>
                        {/* </Paper> */}
                        </div> 
                    </Grid>
                    <Grid item xs>
          
                    </Grid>
                 </Grid>

                 
              
            </div>
        )
    }

}