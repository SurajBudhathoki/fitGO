import React from 'react';
import { Button} from '@material-ui/core';

const Delete = props => (
  <div key={props.id} >
    

    
    <Button color="secondary" variant="contained" value={props.id} onClick={props.onDelete}>Delete</Button>
    {/* <Button color="secondary" variant="contained" value={props.id} onClick={props.onUpdate}>Edit</Button> */}
  </div>
)

export default Delete;