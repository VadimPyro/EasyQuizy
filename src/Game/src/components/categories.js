import React from "react";
import {NavLink, BrowserRouter, Route} from "react-router-dom";

import data from "./db2.json";
import category from "./data/category.json";
import question from "./data/questions.json";
import { If } from 'rc-if-else';
class categories extends React.Component {
 
  constructor() {
    super();
    this.state = {
      showReply: false
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }

  

  render() {



    const myObjStr = JSON.stringify(categories);
   

    return(
       <div>
         
       <h3> Please chose category</h3>

       <br />
      
      
      {category.map((catDetail, index) => {
        
     return <ul class="list-group">
     <NavLink to="/question"> 
     <li class="list-group-item active" key={index} >  { catDetail.category }</li> 
     { /* this.state.showReply && <p key={index}>{index}. { catDetail.Question } </p> */ } 
     </NavLink> 
     <br />
        </ul>
      })}
  
      <br />
   <NavLink to="/welcome"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Turn to home</h2></button></NavLink>
       </div>

    );
}
}
export default categories;

