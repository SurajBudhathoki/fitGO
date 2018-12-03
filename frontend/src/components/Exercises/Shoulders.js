import React from 'react';
import { GridList, GridListTile, } from '@material-ui/core';

const Shoulders = (props) => (
    <div className={props.root} >

            {
               
                props.displayShoulders.map((exercise, index) => (
                    
                <div key={index}>

                        <h1> {exercise.exerciseName} </h1>   
                        <GridList cellHeight={300}>
                  <GridListTile>
                    <img src=  
                         {exercise.exerciseImage[0]} 
                        alt= 'ShouldersImg' />
                    </GridListTile>
                    <GridListTile>
                    <img src=  
                         {exercise.exerciseImage[1]} 
                        alt= 'ShouldersImg' />
                    </GridListTile>
                     </GridList>   


                  </div> 
                 
                ))     
                
            }   
       
    </div>
    
  )

export default Shoulders;