import React from 'react';
import './App.css';
import Welcome from "./components/welcome";
import Game from "./components/game";
import Setting from "./components/setting";
import Question from "./components/question";
import Results from "./components/results";
import Categories from "./components/categories";
import Answer from "./components/answer";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return ( 
    <BrowserRouter>
    <body>
      <div className="App">
     
  
        <header className="App-header">

           <Route path='/welcome' component={Welcome} />
           <Route path='/setting' component={Setting} />
           <Route path='/game' component={Game} />
           <Route path='/question' component={Question} />
           <Route path='/results' component={Results} />
           <Route path='/categories' component={Categories} />
           <Route path='/answer' component={Answer} />
       
        </header>
      </div>
      </body>

  </BrowserRouter>
  );

}

export default App;
