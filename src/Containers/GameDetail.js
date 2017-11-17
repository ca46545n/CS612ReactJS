import React,{Component} from 'react';
import {connect} from 'react-redux';
class GuitarDetail extends Component{
  render(){
    if(!this.props.selectedguitar){
      return(
        <div>
        <article>
        <div id = "section1">
        </div>

        <div id = "section2">
        <center><img src="game.png" alt="martin 000-17" height="275" width="380" /></center>
          <br />
          <br />
          <center><h4>Welcome all Female gamers! I have choosen 3 of what i consider the most amazing games of all time, and have placed them in 3 diffrent catagories. </h4></center>
        </div>

        <div id = "section3">
        </div>
        </article>
        </div>
      );
    }
    return(
      <div>
        <article>
      <h3><div>{this.props.selectedguitar.title1}</div></h3>
      <div>Date:{this.props.selectedguitar.date1}</div>
      <center><img src={this.props.selectedguitar.image1} alt="martin 000-17" height="180" width="350" /></center>
      <div>{this.props.selectedguitar.description1}</div>
      <h3><div>{this.props.selectedguitar.title2}</div></h3>
      <div>Date:{this.props.selectedguitar.date2}</div>
      <center><img src={this.props.selectedguitar.image2} alt="martin 000-17" height="180" width="350" /></center>
      <div>{this.props.selectedguitar.description2}</div>
      <h3><div>{this.props.selectedguitar.title3}</div></h3>
      <div>Date:{this.props.selectedguitar.date3}</div>
      <center><img src={this.props.selectedguitar.image3} alt="martin 000-17" height="180" width="350" /></center>
      <div>{this.props.selectedguitar.description3}</div>
        </article>
      </div>
    );
  }
}
function mapstatetoprops(state){
  return{
    selectedguitar:state.active_guitar
  };
}

export default connect(mapstatetoprops)(GuitarDetail);
