import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,Paper, TextField, Select, Button, Table,TableHead, TableBody, Typography, TableRow, TableCell } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';


export default class Create extends Component {

    render() {
        return(
            <div>
                 <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}> 
                        <Paper className="paper" >
                            <h1>Create a program</h1>
                            <form>
                                <div>
                                <TextField id="program-name" label="Program Name" margin="normal"/>
                                </div>
                                <div>
                                <TextField id="days" label="Days"
                                type="number" margin="normal"/>
                                </div><br></br>
                                <div>
                                <Select native>
                                    <option value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                                </div>
                               <br></br>
                               <div>
                                   <Button variant="contained" color="primary">
                                       Add
                                   </Button>
                               </div>
                            </form>

                        </Paper>

                        <Paper>
                        <Typography variant="h4"> Workouts </Typography>
                            <Table>
                                
                                <TableHead>
                                   <TableRow>
                                       <TableCell> Exercise  </TableCell>
                                       <TableCell> Sets </TableCell>
                                       <TableCell> Reps </TableCell>
                                   </TableRow>
                                </TableHead>
                                <TableBody>
                                <TableRow>
                                       <TableCell> Bench </TableCell>
                                       <TableCell> 4 </TableCell>
                                       <TableCell> 8 </TableCell>
                                   </TableRow>
                                   <TableRow>
                                       <TableCell> Squats  </TableCell>
                                       <TableCell> 4 </TableCell>
                                       <TableCell> 8 </TableCell>
                                   </TableRow>
                                   <TableRow>
                                       <TableCell> Curl </TableCell>
                                       <TableCell> 4 </TableCell>
                                       <TableCell> 10 </TableCell>
                                   </TableRow>
                                </TableBody>
                            </Table>


                        </Paper>
                    </Grid>
                 </Grid>   
            </div>
        )
    }

}   