import React from 'react';

function Resume(props) {
  return(
    <div>
        <p>{props.hello}</p>
        <p>{props.name}</p>
        <p>{props.hobby}</p>
        <p style={{color: props.color}}>helloworld</p>
    </div>
  );
}

export default Resume;