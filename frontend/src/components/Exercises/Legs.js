import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Legs = (props) => (
    <div>
        
        <Paper className="paper">
            {
                props.displayLegs.map((exercise, index) => (
                
                 <Grid  key = {`Legs${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src={exercise.exerciseImage[0]} alt= 'LegsImg' />
                    </GridListTile>
                     </Grid>   

                 </Grid> 
                ))     
            }   
        </Paper>   

    </div>
    
  )

export default Legs;