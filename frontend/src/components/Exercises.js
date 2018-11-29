import React, {Component} from 'react';
import axios from 'axios';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';

import Chest from './Exercises/Chest';
import Back from './Exercises/Back';
import Legs from './Exercises/Legs';
import Sidenav from './Navigation/Sidenav';

import ExerciseList from './ExerciseList';


export default class Exercises extends Component {

    state = {
       
        backList: [],
        chestList: [],
        legsList: [],
        armsList: [],
        shouldersList: [],
        showChest: false,
        showBack: false,
        showArms: false,
        showLegs: false,
        showShoulders: false,
    }

    
    // displaying chest workouts
    handleChest =(event) => {
        event.preventDefault();

        this.setState({ showChest: true })

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

        this.setState({ showBack: true })

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

        this.setState({ showLegs: true })

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

        this.setState({ showArms: true })

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

        this.setState({ showShoulders: true })

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
                           
                                {this.state.showChest ?  
                                
                                    <Chest displayChest={this.state.chestList} />
                                :

                                <ExerciseList handleChest={this.handleChest} handleBack={this.handleBack} handleArms={this.handleArms} handleLegs={this.handleLegs} handleShoulders={this.handleShoulders} />

                                }

                                 {this.state.showBack ?  
                                
                                <Back displayBack={this.state.backList} />
                                :

                            
                                     <div></div>   

                            } 

                           



                        </Paper>
                    </Grid>
                </Grid>    


               
                
            
                <Legs displayLegs={this.state.legsList} />
                  
           
            </div>
        )
    }


}    