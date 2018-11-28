import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,Paper, GridList, GridListTile, GridListTileBar, List, Divider } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';


export default class View extends Component {

    state = {
        programList: [],
        dayList : [],
        exerciseList: []
    }

    componentDidMount() {
        this.getPrograms();
    }

    getPrograms = () => {
        axios.get('/api/programs')
        .then((result) => {
           
            this.setState({programList: result.data});
            let dayList = []
            for(let i = 0; i < this.state.programList.length; i++){
      
                
      
                 dayList.push(this.state.programList[i].days);
      
                
            
            }

            console.log(dayList);
            
                   this.setState({
                     dayList:dayList
                   })
        });

      
         
      }
    getDaylist = (index) =>{
        const days = this.state.dayList
        console.log(days)
        if(days){
        return days.map((day, index) =>{
            console.log("Days Day", day)
           
            return day.map((value, index) =>{
                return(
                    <div>{value.dayName}

                   {value.exercises.map((exercise,index) => {
                       return(
                           <List> {exercise.exerciseName}
                                {exercise.sets} x
                                {exercise.reps}
                            </List>
                       )
                   })}   
                   
                    </div>
                   
                )
            })
        })
        }
        else{
            return(
                <div>Getting Days...</div>   
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
                    <Grid item xs={9}> 
                        <Paper className="paper" >
                            <h1> <u>Your Programs </u></h1>
                          
                          {
                              this.state.programList.map((program, index) =>  {
                                  return(
                                  <List key={index} >
                                      <h1> {program.programName} </h1>  

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
                        </Paper>
                    </Grid>
                 </Grid>   
            </div>
        )
    }

}   