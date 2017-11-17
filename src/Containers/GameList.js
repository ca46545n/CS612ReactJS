import React, { Component } from 'react';
import {connect} from 'react-redux';
import {gameSelect} from '../actions/Game_select.js';
import { bindActionCreators } from 'redux';

class GameList extends Component{
renderguitarlist(){
    return this.props.guitars.map((game)=>{

      return(
        <li onClick={()=>this.props.gameSelect(game)} key={game.id}>{game.Type}</li>
      );
    });
}
  render(){
    return(
      <ul >
      {this.rendergamelist()}
      </ul>
    );
  }

}

function mapstatetoprops(state){
  //Whatever value from this function will be returned the booklist class as props
  return{
    game:state.game
  };
}

function mapdispatchtoprops(dispatch){
  //Whenever the selectBook is called the result should be passed to the booklist
  //container.
  return bindActionCreators({gameSelect:gameSelect},dispatch);
}

//This function is used to make prop available to the booklist container in
//the form of dispatch
export default connect(mapstatetoprops,mapdispatchtoprops)(GameList);
