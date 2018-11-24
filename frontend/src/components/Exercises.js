import React, {Component} from 'react';
import axios from 'axios';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import ChestImage from '../images/gridChest.jpg';
import BackImage from '../images/gridBack.jpg';
import LegsImage from '../images/gridLegs.jpg';
import ArmsImage from '../images/gridArms.jpg';
import ShouldersImage from '../images/gridShoulders.jpg';
import Chest from './Exercises/Chest';
import Back from './Exercises/Back';
import Legs from './Exercises/Legs';
import Sidenav from './Navigation/Sidenav';
import { Link } from 'react-router-dom';


export default class Exercises extends Component {

    state = {
        exerciseList : [], 
        backList: [],
        chestList: [],
        legsList: [],
        armsList: [],
        shouldersList: [],

    }

    
    // displaying chest workouts
    handleChest =(event) => {
        event.preventDefault();
        this.getChestExercises();
    }

    getChestExercises = () => {
        axios.get('/exercises/chest')
        .then((result) => {
          
            this.setState({chestList: result.data});

        })
    }

    //displaying back workouts
    handleBack =(event) => {
        event.preventDefault();
        this.getBackExercises();
    }

    getBackExercises = () => {
        axios.get('/exercises/back')
        .then((result) => {
            console.log(result.data);
            this.setState({backList: result.data});
        })
    }

    //displaying legs workouts
    handleLegs =(event) => {
        event.preventDefault();
        this.getLegsExercises();
    }

    getLegsExercises = () => {
        axios.get('/exercises/legs')
        .then((result) => {
            console.log(result.data);
            this.setState({legsList: result.data});
        })
    }

    //displaying arms workouts
    handleArms =(event) => {
        event.preventDefault();
        this.getArmsExercises();
    }

    getArmsExercises = () => {
        axios.get('/exercises/arms')
        .then((result) => {
            console.log(result.data);
            this.setState({armsList: result.data});
        })
    }

    //displaying shoulders workouts
    handleShoulders =(event) => {
        event.preventDefault();
        this.getShouldersExercises();
    }

    getShouldersExercises = () => {
        axios.get('/exercises/shoulders')
        .then((result) => {
            console.log(result.data);
            this.setState({shouldersList: result.data});
        })
    }


    render() {    
        return (
            <div>

                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}>    
                        <Paper className= "paper">
                            <GridList>
                            <GridListTile> <Link to="/exercises/chest" > <img src = {ChestImage} onClick= {this.handleChest}  className="gridImg" alt="chest"  /> </Link>
                                <GridListTileBar title= "Chest"/>   
                                </GridListTile>  
                                <GridListTile> <img src = {BackImage} className="gridImg" alt="Back" onClick= {this.handleBack} />
                                <GridListTileBar title= "Back"/>
                                </GridListTile>
                                <GridListTile> <img src = {LegsImage} className="gridImg" alt="Legs" onClick= {this.handleLegs} />
                                <GridListTileBar title= "Legs"/>
                                </GridListTile>
                                <GridListTile> <img src = {ArmsImage} className="gridImg" alt="Arms" onClick= {this.handleArms} />
                                <GridListTileBar title= "Arms"/>
                                </GridListTile>
                                <GridListTile> <img src = {ShouldersImage} className="gridImg" alt="Shoulders" onClick= {this.handleShoulders} />
                                <GridListTileBar title= "Shoulders"/>
                                </GridListTile>    
                            </GridList>
                        </Paper>
                    </Grid>
                </Grid>    

{/* */}
               
                <Chest displayChest={this.state.chestList} />
                <Back displayBack={this.state.backList} />
                <Legs displayLegs={this.state.legsList} />
                  
           
            </div>
        )
    }


}    