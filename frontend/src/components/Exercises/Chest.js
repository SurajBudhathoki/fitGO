import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';



const Chest = (props) => (
    <div className={props.root} >

            {
               
                props.displayChest.map((exercise, index) => (
                    
                <div key={index}>

                        <h1> {exercise.exerciseName} </h1>   
                        <GridList cellHeight={300}>
                  <GridListTile>
                    <img src=  
                         {exercise.exerciseImage[0]} 
                        alt= 'chestImg' />
                    </GridListTile>
                    <GridListTile>
                    <img src=  
                         {exercise.exerciseImage[1]} 
                        alt= 'chestImg' />
                    </GridListTile>
                     </GridList>   


                  </div> 
                 
                ))     
                
            }   
       
    </div>
    
  )

export default Chest;