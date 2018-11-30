import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Arms = (props) => (
    <div>
        
            {
                props.displayArms.map((exercise, index) => (
                
                 <Grid  key = {`Arms${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src={exercise.exerciseImage[0]} alt= 'ArmsImg' />
                    </GridListTile>
                     </Grid>   

                 </Grid> 
                ))     
            }   


    </div>
    
  )

export default Arms;