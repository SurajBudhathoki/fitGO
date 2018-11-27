import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,Paper, TextField, Select, Button, Table,TableHead, TableBody, Typography, TableRow, TableCell, FormControlLabel, Checkbox, List, ListItem, FormControl, FormLabel, RadioGroup, Radio,  ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';
import Addmodal from './Addmodal';


export default class Create extends Component {
    constructor() {
        super()
        this.state = {
            exerciseList : [],
            programName: '',
            days:'',
       
            reps: '',
            sets:'',
            exercise: '',
            numOfDays: [1,2,3]
            
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
            console.log(response);
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

        const numDays = this.state.days;
        console.log(numDays);

        for(let i=0; i < numDays; i++) {

            console.log(numDays);
            return(
                <div>
                    <TextField type="text" label="Exercise Name"
                    margin="normal" value={this.state.exercise}
                    onChange = {this.handleChange} name="exercise" />
                                
                     <TextField type="number" label="Sets"
                    margin="normal" value= {this.state.sets}
                    onChange=  {this.handleChange} name="sets" />
                                
                    <TextField type="number" label="Reps"
                    margin="normal" value= {this.state.reps}
                    onChange=  {this.handleChange} name="reps" />
                </div>
            )
        }

    }

    

    render() {
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
                                
                                <div> 
                                <TextField type="number" label="Days"
                                margin="normal" value= {this.state.days}
                                onChange=  {this.handleChange} name="days" />

                                <button onClick={this.renderNumOfDays}> ok </button>
                                </div>

                                {/* <div>
                                <TextField type="text" label="Exercise Name"
                                margin="normal" value={this.state.exercise}
                                onChange = {this.handleChange} name="exercise" />
                                
                                <TextField type="number" label="Sets"
                                margin="normal" value= {this.state.sets}
                                onChange=  {this.handleChange} name="sets" />
                                
                                <TextField type="number" label="Reps"
                                margin="normal" value= {this.state.reps}
                                onChange=  {this.handleChange} name="reps" />
                                </div> */}


                                 
                                {/* <Select native value = {this.state.days} >
                               
                                    {this.state.numOfDays.map((day,index)=>  (
                                        <option key = {index} > 
                                          {day}
                                        </option>
                                    ))}
                                </Select> */}

                                {/* <FormControl>
                                    <FormLabel component="legend" > Days </FormLabel>
                                    <RadioGroup value={this.state.days} name="days" onChange={this.handleChange} row >
                                        <FormControlLabel value="1" control={<Radio />} label= "1" />
                                        <FormControlLabel value="2" control={<Radio />} label= "2"/>
                                        <FormControlLabel value="3" control={<Radio />} label= "3"/>
                                    </RadioGroup>
                                    <Button variant="contained" color="primary"
                                   onClick = {this.selectDays} > Ok </Button>
                                </FormControl> */}



                                  {/* <ExpansionPanel>
                                      <ExpansionPanelSummary>
                                          <Typography variant="h3"> Day 1</Typography>
                                      </ExpansionPanelSummary>
                                      <ExpansionPanelDetails>
                                      <List name="exercises"  onChange= {this.handleChange} >
                               
                                        {this.state.exerciseList.map((exercises, index)=>(
                                            
                                                <ListItem key = {index} > 
                                                <Checkbox  />
                                                    {exercises.exerciseName}
                                                </ListItem>
                                            ) )}
                                        </List>
                                      </ExpansionPanelDetails>
                                  </ExpansionPanel>

                                    <ExpansionPanel>
                                      <ExpansionPanelSummary>
                                          <Typography variant="h3"> Day 2</Typography>
                                      </ExpansionPanelSummary>
                                      <ExpansionPanelDetails>
                                      <List name="exercises"  onChange= {this.handleChange} >
                               
                                        {this.state.exerciseList.map((exercises, index)=>(
                                            
                                                <ListItem key = {index} > 
                                                <Checkbox  />
                                                    {exercises.exerciseName}
                                                </ListItem>
                                            ) )}
                                        </List>
                                      </ExpansionPanelDetails>
                                  </ExpansionPanel>

                                    <ExpansionPanel>
                                      <ExpansionPanelSummary>
                                          <Typography variant="h3"> Day 3</Typography>
                                      </ExpansionPanelSummary>
                                      <ExpansionPanelDetails>

                                           <Table>
                                           
                                            <TableHead>
                                            <TableRow>
                                                <TableCell> Exercise  </TableCell>
                                                <TableCell> Sets </TableCell>
                                                <TableCell> Reps </TableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            <TableRow> 
                                      <TableCell>             
                                      <Select native  name="exercises"  onChange= {this.handleChange} value={this.state.exercises} >
                               
                                        {this.state.exerciseList.map((exercises, index)=>(
                                                
                                                <option key = {index} > 
                                              
                                                    {exercises.exerciseName}

                                                  
                                                </option>
                                                
                                            ) )}
                                        </Select>
                                        </TableCell>  
                                        <TableCell>    
                                        <TextField  name="sets"  onChange= {this.handleChange} value={this.state.sets} > </TextField>
                                        </TableCell> 
                                        <TableCell>
                                        <TextField  name="reps"  onChange= {this.handleChange} value={this.state.reps} > </TextField>
                                        </TableCell> 
                                      
                                        </TableRow>

                                      
                                        </TableBody>
                                        </Table>   

                                      </ExpansionPanelDetails>
                                  </ExpansionPanel>     */}

                                        
                                                 

                                    <br />  
                               <div>
                                   <Button variant="contained" color="primary"
                                   onClick = {this.handleAdd} >
                                       Add
                                   </Button>
                               </div>

                                {/* {this.state.numOfDays.map((days, index) => (
                                      <List key= {index}>
                                          Day- {days}
                                          <Addmodal exer = {this.state.exerciseList} />
                                       
                                      </List>
                                  ))}    */}
                            
                                   
                            </form>

                            <p> {this.renderNumOfDays} </p>   

                        </Paper>

                    </Grid>
                 </Grid>   
            </div>
        )
    }

}   