import React from "react";
import {NavLink} from "react-router-dom";



const mysql = require('mysql')
const connection = mysql.createConnection({
host     : 'db4free.net',
user     : 'eazeequzee',
password : 'eazeequzee',
database : 'eazeequzee'
});

connection.connect()

connection.query('SELECT * FROM `results`', function (err, rows, fields) {
if (err) throw err

console.log('The solution is: ', rows[0].solution)
})

connection.end()



const results = ( props ) => {
    return( <div>
 <h1>  Results</h1>
 <ul style={{color:'black'}} class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center">
       Team №1 
      16.05.2019
      <span class="badge badge-primary badge-pill">$6000</span>
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
      Team №2
      17.05.2019
   <span class="badge badge-primary badge-pill">$8000</span>
   </li>
   
</ul>

<br />
   <NavLink to="/welcome"> <button type="button" class="btn btn-primary btn-lg btn-block"><h2>Turn to home</h2></button></NavLink>
</div>
    );
}

export default results;