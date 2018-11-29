import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Back = (props) => (
    <div>
        
        
            {
                props.displayBack.map((exercise, index) => (
                
                 <Grid  key = {`Back${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src={exercise.exerciseImage[0]} alt= 'BackImg' />
                    </GridListTile>
                     </Grid>   

                 </Grid> 
                ))     
            }   
      

    </div>
    
  )

export default Back;