import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Back = (props) => (
    <div>
        
        
        {
               
               props.displayBack.map((exercise, index) => (
                   

               //  <Grid  key = {`chest${index}`}>
               <div key={index}>

                       <h1> {exercise.exerciseName} </h1>   
                       <GridList>
                 <GridListTile>
                   <img src=  
                        {exercise.exerciseImage[0]} 
                       alt= 'backImg' />
                   </GridListTile>
                   <GridListTile>
                   <img src=  
                        {exercise.exerciseImage[1]} 
                       alt= 'backImg' />
                   </GridListTile>
                    </GridList>   


                 </div> 
                
               ))     
               
           }    
      

    </div>
    
  )

export default Back;