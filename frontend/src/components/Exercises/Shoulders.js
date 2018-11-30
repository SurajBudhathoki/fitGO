import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Shoulders = (props) => (
    <div>

            {
                props.displayShoulders.map((exercise, index) => (
                
                 <Grid  key = {`Shoulders${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src={exercise.exerciseImage[0]} alt= 'ShouldersImg' />
                    </GridListTile>
                     </Grid>   

                 </Grid> 
                ))     
            }   

    </div>
    
  )

export default Shoulders;