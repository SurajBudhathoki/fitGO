import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Sidenav from './Navigation/Sidenav';
import Image from '../images/chest/cable1.jpg';
import Dips1 from '../images/chest/dips1.jpg';
import Dips2 from '../images/chest/dips2.jpg';



const Chest = (props) => (
    <div className={props.root} >

            {
               
                props.displayChest.map((exercise, index) => (
                    

                //  <Grid  key = {`chest${index}`}>
                <div key={index}>

                        <h1> {exercise.exerciseName} </h1>   
                        <GridList>
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