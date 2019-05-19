import React from "react";
import {NavLink} from "react-router-dom";

const setting = ( props ) => {

  function claer(){
    alert("Questions alredy cleaned!");
  }
    return(
     <div>
     <h1>Setting</h1>

     <br />

  <form class="form-inline">
  
  <br />

  <label class="sr-only" style={{color: "white"}} for="inlineFormInputName2">Team № 1</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName1" placeholder="Team name 1"/>

  <label class="sr-only" style={{color: "white"}} for="inlineFormInputName2">Team № 2</label>
  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Team name 2"/>

  <button type="submit" class="btn btn-primary mb-2">Save</button>
  </form>


   <br />
   <NavLink to="/categories"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Choose questions</h2></button></NavLink>
   <br />
   <NavLink to="/welcome" onClick={claer}> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Clear Questions</h2></button></NavLink> 

  <br />
   <NavLink to="/welcome"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Turn to home</h2></button></NavLink>

     
     </div>
    );
}

export default setting;