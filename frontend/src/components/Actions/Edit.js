import React from 'react';

const Edit = props => (
  <div key={props.id} className="Edit">

    <button value={props.id} onClick={props.onUpdate}>EdiT</button>

  </div>
)

export default Edit;
