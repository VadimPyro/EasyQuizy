import React from "react";
import {BrowserRouter, Route, NavLink} from "react-router-dom";

const Welcome = () => (
  <div>
    <h1> Welcome to the Quiz game  </h1>
    <br />
    <NavLink to="/game"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2> Start new game</h2></button></NavLink>
    <br />
    <NavLink to="/game"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Resume Game</h2></button></NavLink>
    <br />
    <NavLink to="/setting"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Setting</h2></button></NavLink>
    <br />
    <NavLink to="/results"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>See results</h2></button></NavLink>
  
  </div>
);

export default Welcome;
