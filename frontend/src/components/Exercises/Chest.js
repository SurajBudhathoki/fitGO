import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Sidenav from '../Navigation/Sidenav';

const Chest = (props) => (
    <div>
       
            {
                props.displayChest.map((exercise, index) => (
                
                 <Grid  key = {`chest${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src= ""
                        // {exercise.exerciseImage[0]} 
                        alt= 'chestImg' />
                    </GridListTile>
                     </Grid>   


                 </Grid> 
                ))     
            }   
       
    </div>
    
  )

export default Chest;