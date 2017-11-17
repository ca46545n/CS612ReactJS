import React, { Component } from 'react';
import GameList from '../Containers/GameList.js';
import GameDetail from '../Containers/GameDetail.js'
export default class App extends Component{
  render(){
    return(
      <div className="co">
      <header>
         <h1>Girl gamer Favs!</h1>
      </header>
      <div id="main_nav">

        <GuitarDetail />

      </div>
      <nav>
        <GuitarList />
      </nav>
      <footer>
        Copyright &copy; Girl Gamer Favs! Reviews
      </footer>
      </div>
    );
  }
}
