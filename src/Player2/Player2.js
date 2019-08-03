import React, {useState} from 'react';

const Player2=(props) => {
    const [message2 , setmessage2]=useState();
    const [winner , setwinner]=useState();

   const RockHandler=(props)=>{
       props.sciccor2=false
       props.paper2=false
       props.rock2=true

       //If first person Select Rock and Second Also Select Rock then it will be tie
       if(props.rock2 && props.rock1){
           console.log("first person Select Rock and Second Also Select Rock then it will be tie ");
           setwinner("IT's Tie")
           setmessage2("You Selected Rock");

       }
       //If first person select Scissor and second person select Rock then Rock will win
       else if(props.rock2 && props.sciccor1)
       {
        setmessage2("You Selected Rock");
        setwinner("Player Two Win")
           console.log("If first person select Scissor and second person select Rock then Rock will win")
       }
        //If first person select Paper and second person select Rock then Paper will win
       else if(props.rock2 && props.paper1)
       {
        setmessage2("You Selected Rock");
        setwinner("Player One Win")
           console.log("If first person select Paper and second person select Rock then Paper will win")
       }
      else
       {
        alert("Its Player One Turn")    
       }
   }

   const ScissorHandler=(props)=>{
    props.rock2=false
    props.paper2=false
    props.sciccor2=true

    //If first person select Sciccor and second person select Sciccor as well then It is TIE
    if(props.sciccor2 && props.sciccor1){
        setmessage2("You Selected Scissor");
        setwinner("IT's Tie")
        console.log("If first person select Sciccor and second person select Sciccor as well then It is TIE")
    }
    else if(props.sciccor2 && props.rock1){
        setmessage2("You Selected Scissor");
        setwinner("Player One Win")
        console.log("If first person select rock and second person select Sciccor then it is rock wins")
    }
    else if(props.sciccor2 && props.paper1){
        setmessage2("You Selected Scissor");
        setwinner("Player Two Win")
        console.log("If first person select paper and second person select Sciccor then Sciccor Wins")
    }
    else
       {
        alert("Its Player One Turn")    
       }
}

const PaperHandler=(props)=>{
    props.rock2=false
    props.sciccor2=false
    props.paper2=true

    if(props.paper2 && props.rock1){
        setmessage2("You Selected Paper");
        setwinner("Player Two Win")
        console.log("if second person selects the paper and first person select the rock then paper win")
    }
    else if(props.paper2 && props.sciccor1){
        setmessage2("You Selected Paper");
        setwinner("Player One Win")
        console.log("if second person selects the paper and first person select the sciccor then sciccor win")
    }
    else if(props.paper2 && props.paper1){
        setmessage2("You Selected Paper");
        setwinner("IT's Tie")
        console.log("if second person selects the paper and first person also select paper then its TIE")
    }
    else
       {
        alert("Its Player One Turn")    
       }    
      }
  return (
      <div>
    <div>
        <h3 className="text-center text-success mb-3 mt-3">{winner}</h3>
      <h1 className="text-center">Player Two</h1>
      <h5 className="text-center text-danger mt-3">{message2}</h5>
    </div>
    <div className="d-flex justify-content-center mt-5">
        <button className="ml-2 btn-primary"  onClick={RockHandler}>Rock</button>
        <button className=" ml-2 btn-primary" onClick={ScissorHandler}>Sciccor</button>
        <button className="ml-2 btn-primary" onClick={PaperHandler}>Paper</button>
    </div>
    </div>
  )
  }
export default Player2;