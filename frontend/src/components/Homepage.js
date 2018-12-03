import React, {Component} from 'react';
import {Grid,Paper,  } from '@material-ui/core';
import {Redirect} from 'react-router-dom';

export default class Homepage extends Component {
    state = {
        test: 'test',
        redirectTo: null
    }

    handleStarted = (event) => {

        event.preventDefault();

        this.setState({
            redirectTo: '/signup'
        });
    }

    render() {
     

            if (this.state.redirectTo) {
                return <Redirect to={{ pathname: this.state.redirectTo }} />
            } else {
            return ( 

            <div>
            <Grid container spacing={16}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={8}>
        <Paper className="mainPaper">
              
            <div className="imageContainer">

            
               <button className= "button started" onClick={this.handleStarted} >  Get Started </button>
            </div>


        <h1> Start your fitness journey</h1> 
  
          </Paper>
        </Grid>
        <Grid item xs>
          
          </Grid>
      </Grid>
                  
           
        </div>
            
        )
    }
}
}   

// const Homepage = (props) => {
//     return(
    //     <div>
    //         <Grid container spacing={16}>
    //     <Grid item xs>
          
    //     </Grid>
    //     <Grid item xs={8}>
    //     <Paper className="mainPaper">
              
    //         <div className="imageContainer">

            
    //            <button className= "button started" >  Get Started </button>
    //         </div>


    //     <h1> Start your fitness journey</h1> 
  
    //       </Paper>
    //     </Grid>
    //     <Grid item xs>
          
    //       </Grid>
    //   </Grid>
                  
           
    //     </div>
//     )
// }

// export default Homepage;