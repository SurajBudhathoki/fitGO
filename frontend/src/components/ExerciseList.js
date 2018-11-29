import React from 'react';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import ChestImage from '../images/gridChest.jpg';
import BackImage from '../images/gridBack.jpg';
import LegsImage from '../images/gridLegs.jpg';
import ArmsImage from '../images/gridArms.jpg';
import ShouldersImage from '../images/gridShoulders.jpg';
import { Link } from 'react-router-dom';

const ExerciseList = (props) => (

    <div>
<GridList>

<GridListTile> <Link to="/exercises/chest" > <img src = {ChestImage} onClick= {props.handleChest}  className="gridImg" alt="chest"  /> </Link>
    <GridListTileBar title= "Chest"/>   
    </GridListTile>  
    <GridListTile> <img src = {BackImage} className="gridImg" alt="Back" onClick= {props.handleBack} />
    <GridListTileBar title= "Back"/>
    </GridListTile>
    <GridListTile> <img src = {LegsImage} className="gridImg" alt="Legs" onClick= {props.handleLegs} />
    <GridListTileBar title= "Legs"/>
    </GridListTile>
    <GridListTile> <img src = {ArmsImage} className="gridImg" alt="Arms" onClick= {props.handleArms} />
    <GridListTileBar title= "Arms"/>
    </GridListTile>
    <GridListTile> <img src = {ShouldersImage} className="gridImg" alt="Shoulders" onClick= {props.handleShoulders} />
    <GridListTileBar title= "Shoulders"/>
    </GridListTile>    
    </GridList> 

    </div>

)   

export default ExerciseList;