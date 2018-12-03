import React from 'react';
import { GridList, GridListTile} from '@material-ui/core';

const Back = (props) => (
    <div>
        
        
        {
               
               props.displayBack.map((exercise, index) => (
                   
               <div key={index}>

                      <h2 className="exerciseName" > {exercise.exerciseName} </h2>  
                       <GridList cellHeight={300}>
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