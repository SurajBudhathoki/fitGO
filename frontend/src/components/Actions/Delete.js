import React from 'react';

const Delete = props => (
  <div key={props.id} className="Delete">

    <button className="button deleteButton"  value={props.id} onClick={props.onDelete}> 
    Delete
</button>

  </div>
)

export default Delete;