import React from "react";
import {NavLink} from "react-router-dom";
import data from "./myDB.json";
import "../App.css";



class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
        <button class="btn btn-primary btn-lg btn-block" onClick={this.props.closePopup}>OK</button>
        </div>
      </div>
    );
  }
}


class Game extends React.Component {

 
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  
  render() {
 
   
    return(
   <div onClick=  {this.togglePopup.bind(this)}>

  
 
  

   <table style={{background:"MediumBlue"}}>
   <tr>
    <td > <button type="button" class="btn btn-lg btn-primary" disabled ><h1>History</h1></button></td>
    <td ><button type="button" class="btn btn-lg btn-primary" disabled><h1>Astronomy</h1></button></td>
    <td ><button type="button" class="btn btn-lg btn-primary" disabled><h1>Programing</h1></button></td>
    <td ><button type="button" class="btn btn-lg btn-primary" disabled><h1>Travelling</h1></button></td>
    <td ><button type="button" class="btn btn-lg btn-primary" disabled><h1>Movies</h1></button></td>
   </tr>

   <tr>

  <td ><NavLink to="/answer"><button  type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 100</h1></button> </NavLink></td>
  <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 100</h1></button> </NavLink></td>
  <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 100</h1></button> </NavLink></td>
  <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 100</h1></button> </NavLink></td>
  <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 100</h1></button> </NavLink></td>
   </tr>

   <tr>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 200</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 200</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 200</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 200</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 200</h1></button> </NavLink></td>
   </tr>

   <tr>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 300</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 300</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 300</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 300</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 300</h1></button> </NavLink></td>
   </tr>

   <tr>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 400</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 400</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 400</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 400</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 400</h1></button> </NavLink></td>
   </tr>

   <tr>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 500</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 500</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 500</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 500</h1></button> </NavLink></td>
   <td ><NavLink to="/answer"><button type="button" class="btn btn-primary btn-lg btn-block"><h1>$ 500</h1></button> </NavLink></td>
  </tr>

  </table>


  <br />
   <NavLink to="/welcome"> <button type="button" class="btn btn-primary">Turn to home</button></NavLink>
   
   {this.state.showPopup ? 
    <Popup
      text='Team 1 selects the question'
      closePopup={this.togglePopup.bind(this)}
    />
    : null
  }



  </div>
 
      );
    }
};

export default Game;