import React, { Component } from 'react';
import "./central.css";
import Player1 from './Player1/Player1';
import Player2 from "./Player2/Player2";
import Newgame from "./Newgame/Newgame";

export default class App extends Component {
  constructor(){
    super();
      this.state=this.starting();
  } 

  starting=()=>({
    
        rock1 : false,
        sciccor1 : false,
        paper1 : false,
        rock2 : false,
        sciccor2 : false,
        paper2 : false
      
  })
     NewgameHandler=()=>{
      window.location.reload(true);
     }

  render() {
    return (
      <div className="container central">
        <Newgame onclick={this.NewgameHandler}/>
          <Player1 rock1={this.state.rock1} sciccor1={this.state.sciccor1} paper1={this.state.paper1}/>
          <Player2 rock2={this.state.rock2} sciccor2={this.state.sciccor2} paper2={this.state.paper2}/>
        
      </div>
    )
  }
}
