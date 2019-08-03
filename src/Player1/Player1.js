import React, {useState} from 'react';

const Player1=(props) => {
    const [message , setmessage]=useState();

   const RockHandler=(props)=>{
        props.sciccor1 = false;
        props.paper1 = false;
        props.rock1 = true;
       if(props.rock1){
        setmessage("You Selected Rock");
           console.log("checking the rock by clicking it")
       }
   }

   const ScissorHandler=(props)=>{
    props.rock1 = false;
    props.paper1 = false;
    props.sciccor1 = true;
   if(props.sciccor1){
    setmessage("You Selected Sciccor");
           console.log("checking the sciccor by clicking it")
   }
}

const PaperHandler=(props)=>{
    props.sciccor1 = false;
    props.rock1 = false;
    props.paper1 = true;
    if(props.paper1){
        setmessage("You Selected Paper");
        console.log("checking the paper by clicking it")
       }
}

const newgame=(props)=>{
    props.starting();
}
  return (
      <div>
    <div className="align-middle h-100">
    <div>
      <h1 className="text-center">Player One</h1>
      <h5 className="text-center text-danger mt-3">{message}</h5>
    </div>
    <div className="d-flex justify-content-center mt-5">
        
        <button className=" ml-2 btn-primary"  onClick={RockHandler}>Rock</button>
        <button className=" ml-2 btn-primary"  onClick={ScissorHandler}>Scissor</button>
        <button className=" ml-2 btn-primary"  onClick={PaperHandler}>Paper</button>
    </div>
    </div>
    </div>
  )
}
export default Player1;
