import React from 'react';
import {GridList, GridListTile } from '@material-ui/core';

const Legs = (props) => (
    <div>

             {
               
               props.displayLegs.map((exercise, index) => (

               <div key={index}>

                       <h2 className="exerciseName" > {exercise.exerciseName} </h2>   
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