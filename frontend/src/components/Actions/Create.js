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

        // this.setState({ 
        //    exerciseName: "",
        //     sets: "",
        //     reps: "",
        // })
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
            //    days:{ 
            //      dayName: this.state.dayName,      
            //     exercises: this.state.daysToAdd }

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
                            
                            {/* <form> */}
                                <div>
                                <TextField type="text" label="Program Name" margin="normal"   value ={this.state.programName} onChange = {this.handleChange} name="programName" />
                                </div>

                    

                               <br />
                               
                                <Button variant = "contained" color="primary" onClick = {this.handleShowDay}> Add a day</Button>

                              {/* </form> */}

                                <br></br><br></br>

                                   {this.state.showDay ?  
                                   
                                   <div > 
                                    
                                     Day: 
                                 <Select native onChange={this.handleChange} name="dayName" >
                                    <option value="" disabled />
                                    
                                      {dayList.map((day,index) => (
                                          <option key={index}>  {day}  </option>
                                      ))}
                                   
                                    </Select>    

                                      <br/> <br/>       
                                     <Button variant = "contained" color="primary" 
                               onClick = {this.handleShowExercise}
                               > Add an exercise</Button>
                               <br/> <br/> 
                                </div>    
                                
                                :
                                <div></div>
                                }   
                               

                            {
                                this.state.showExercise ? 

                                <div>
                                 <form>   
                                Exercise name <input onChange={this.handleChange} type = "text" name="exerciseName" />
                                Sets <input onChange={this.handleChange} type = "number" name = "sets" />
                                Reps <input onChange={this.handleChange} type = "number" name = "reps" />
                                <button onClick={this.addExercises} > Add</button>
                                </form>
                                <br/> <br/>
                                <button onClick={this.handleAdd} > Confirm Day </button>
                              
                                </div>
                                
                                
                                :

                                <div></div>

                            }
                              
                                

                                 
                                

                                  <br/><br/>

                                 <div>
                                   <Button variant="contained" color="primary"
                                    onClick = {this.postProgram} 
                                   >
                                       Create
                                   </Button>
                               </div>
                               <br/><br/><br/><br/><br/>

                                
                                    


                        </Paper>

                    </Grid>
                 </Grid>

                 
              
            </div>
        )
    }

}