import React from "react";
import {NavLink} from "react-router-dom";
import '../App.css';
import ReactDOM from 'react-dom';


class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button  type="button" class="btn btn-primary btn-lg btn-block" onClick={this.props.closePopup}>Next question</button>
          </div>
        </div>
      );
    }
  };


class PopupIncorect extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1 style={{color: 'red'}}>{this.props.text}</h1>
          <button  type="button" class="btn btn-primary btn-lg btn-block" onClick={this.props.closePopupIncorect}>Next team</button>
          </div>
        </div>
      );
    }
  }  






class Answer extends React.Component {
     
    constructor() {
        super();
        this.state = {
          showPopup: false,
          showPopupIncorect: false
        };
      }
      togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
      togglePopupIncorect() {
        this.setState({
          showPopupIncorect: !this.state.showPopupIncorect,
        });
      }


      render() {
    
    

    return(
        <div class="ganarol">
      

        <div class="list-group">
            <a href="#" style={{ textDecoration: 'none'}}  class="list-group-item list-group-item-action active">
                <div class="d-flex w-100 justify-content-between">  </div>
                <p class="mb-1" >The first presedent of Ukraine was?</p>
            </a>
            <br />

            <NavLink to="/game">  <a href="#"  className ="listAnswer"  class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between"></div> 
          <p class="mb-1"  style={{color:'black'}}>A: Bogdan Khmelnitskiy</p> 
            </a> </NavLink>
  
            <a href="#" class="list-group-item list-group-item-action">
               <div class="d-flex w-100 justify-content-between"> </div>
               <p style={{color: "black"}} class="mb-1" onClick={this.togglePopup.bind(this)}  >B:  Leonid Kravchuk</p>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">  </div>
              <p style={{color: "black"}} onClick={this.togglePopupIncorect.bind(this)} class="mb-1">C:  Petro Poroshenko</p>
            </a>

            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between"> </div>
                <p style={{color: "black"}} class="mb-1">D: Leonid Kuchma.</p>
            </a>
        </div>


        {this.state.showPopup ? 
            <Popup
              text='This is corect answer!'
              closePopup={this.togglePopup.bind(this)}
            />
            : null
        }


        {this.state.showPopupIncorect ? 
            <PopupIncorect
              text='This is incorect answer!'
              closePopupIncorect={this.togglePopupIncorect.bind(this)}
            />
            : null
        }
        
        </div>
       );
    }
};


export default Answer;

