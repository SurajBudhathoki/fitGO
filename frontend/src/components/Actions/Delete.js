import React from 'react';
import { Button} from '@material-ui/core';

const Delete = props => (
  <div key={props.id} className="Delete">
    
    {/* <button value={props.id} onClick={props.onUpdate}>Update</button> */}
    <Button color="secondary" variant="contained" value={props.id} onClick={props.onDelete}>Delete</Button>
  </div>
)

export default Delete;
