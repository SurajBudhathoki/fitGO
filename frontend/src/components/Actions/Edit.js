import React from 'react';

const Edit = props => (
  <div key={props.id} className="Edit">

    <button value={props.id} onClick={props.onUpdate}>Edit</button>

  </div>
)

export default Edit;
