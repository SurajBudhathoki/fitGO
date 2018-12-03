import React from 'react';
import { GridList, GridListTile, } from '@material-ui/core';

const Arms = (props) => (
    <div className={props.root} >

    {
       
        props.displayArms.map((exercise, index) => (
            
        <div key={index}>

                <h2 className="exerciseName" > {exercise.exerciseName} </h2>   
                <GridList cellHeight={300}>
          <GridListTile>
            <img src=  
                 {exercise.exerciseImage[0]} 
                alt= 'ArmsImg' />
            </GridListTile>
            <GridListTile>
            <img src=  
                 {exercise.exerciseImage[1]} 
                alt= 'ArmsImg' />
            </GridListTile>
             </GridList>   


          </div> 
         
        ))     
        
    }   

</div>
    
  )

export default Arms;