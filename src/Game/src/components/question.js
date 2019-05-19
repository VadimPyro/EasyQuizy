import React from "react";
import {NavLink} from "react-router-dom";
import test from "./db2.json";

const question = ( props ) => {
    return(
     <div>
     <h2> Please add question to game</h2>
     <br />
    { test.map((testDetail, index) => {
      return <div>

    <div class="card">
       <div style={{color: "black"}} class="card-header">
         History
       </div>
    <div class="card-body">
        <p style={{color: "black"}} class="card-text" key={index + 1}>{index}. { testDetail.Question}</p>
        <a href="#" class="btn btn-primary">Add</a>
      </div>
  </div>

  <br />
      
      </div> 

    })}

    <br />
   <NavLink to="/categories"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Back</h2></button></NavLink>
   <br />
   </div>
    );
}

export default question;