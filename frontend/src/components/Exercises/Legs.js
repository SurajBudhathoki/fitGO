import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

const Legs = (props) => (
    <div>

             {
               
               props.displayLegs.map((exercise, index) => (

               <div key={index}>

                       <h1> {exercise.exerciseName} </h1>   
                       <GridList cellHeight={300}>
                 <GridListTile>
                   <img src=  
                        {exercise.exerciseImage[0]} 
                       alt= 'legsImg' />
                   </GridListTile>
                   <GridListTile>
                   <img src=  
                        {exercise.exerciseImage[1]} 
                       alt= 'legsImg' />
                   </GridListTile>
                    </GridList>   


                 </div> 
                
               ))     
               
           }     

    </div>
    
  )

export default Legs;