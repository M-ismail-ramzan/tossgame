import React from 'react';

const Newgame=(props) => {
  return (
    <div className="d-flex justify-content-center">
      <button className="mt-5 btn-primary" onClick={props.onclick}>New Game</button>
    </div>
  )
}

export default Newgame;
