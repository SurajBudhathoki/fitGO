import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Sidenav from '../Navigation/Sidenav';

const Chest = (props) => (
    <div>
         <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}> 
        {/* mapping all chest exercises */}
        <Paper className="paper">
            {
                props.displayChest.map((exercise, index) => (
                
                 <Grid  key = {`chest${index}`}>
                    <Grid item xs={9} >  
                    <GridListTile>
                        <h1> {exercise.exerciseName} </h1>   
                        <h3>{exercise.bodyPart} </h3>
                        <img src= "https://www.mensjournal.com/wp-content/uploads/mf/rookie-mistakes-bench-press.jpg?w=1200&h=1200&crop=1"
                        // {exercise.exerciseImage[0]} 
                        alt= 'chestImg' />
                    </GridListTile>
                     </Grid>   


                 </Grid> 
                ))     
            }   
        </Paper>   
            </Grid>
         </Grid>   
    </div>
    
  )

export default Chest;