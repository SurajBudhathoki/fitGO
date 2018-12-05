import React from 'react';
import { GridList, GridListTile, } from '@material-ui/core';

const Chest = (props) => (
    <div className={props.root} >
            {
                props.displayChest.map((exercise, index) => (                    
                <div key={index}>
                    <h2 className="exerciseName" > {exercise.exerciseName} </h2>    
                    <GridList cellHeight={300}>
                        <GridListTile className="chestImg" >
                            <img src=  {exercise.exerciseImage[0]} alt= 'chestImg'  />
                        </GridListTile>
                        <GridListTile className="chestImg" >
                            <img src= {exercise.exerciseImage[1]} alt= 'chestImg' />
                        </GridListTile>
                    </GridList>   
                </div> 
            ))}   
    </div>
)

export default Chest;