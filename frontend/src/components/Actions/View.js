import React, { Component } from 'react';

import {Grid,Paper,  List,  Button, DialogTitle, Dialog, DialogActions } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';
import Delete from './Delete';
import Edit from './Edit';
import EditForm from './EditForm';

export default class View extends Component {

    state = {
        programList: [],
        dayList : [],
        exerciseList: [],
        open: false,
        isUpdating: false,
        updateID: '',
        programUpdate: '',
        programName: ''
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








   
    updateProgram = (event) => {

        event.preventDefault();
    
        this.setState({isUpdating: false})
        
        
        axios.put(`/api/programs/${this.state.updateID}`, {programName: this.state.programUpdate }).then(() => {
            
          
            this.getPrograms();

            console.log('updated');
        })
        
    
    } 

    handleUpdate = (event) => {
        this.setState({ programUpdate: event.target.value })
    }



    showUpdate = (event) => {
        this.setState({ isUpdating: true, updateID: event.target.value })

        console.log(this.state.updateID);
    }

 
    render() {
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}> 
                        <Paper className="paper" >
                            <h1> <u>Your Programs </u></h1> 
                          
                          {
                              this.state.programList.map((program, index) =>  {
                                  return(
                                  <List key={index} >
                                      <h1> {program.programName}  </h1>  
                                      
                                      {/* <Button  color="primary" variant="contained" > edit</Button> */}
                                      

                                        <Edit key={program._id} id={program._id} onUpdate = {this.showUpdate} />

                                       <Delete  id={program._id} programName={program.programName}  onDelete={this.deleteProgram} 
                                        //onUpdate = {this.showUpdate}
                                         />



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
                                              
                                  </List> 
                              )})

                          }


                          {this.state.isUpdating
                                        ? <EditForm value={this.state.programUpdate} changeHandler={this.handleUpdate} clickHandler={this.updateProgram}  /> 

                                         :  
                                         
                                         <div> </div>
                                    
                                        }
                        </Paper>
                    </Grid>
                 </Grid>   


                                  

                       
            </div>
        )
    }

}   