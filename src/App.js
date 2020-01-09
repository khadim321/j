import React, { Component } from 'react';
import List from './Components/PostMethod';
import Getmethod from './Components/GetMethod';
import Restfullapi from './Components/RestfullApi';
import './App.css';


class App extends Component {
 render(){
   return(
     <div>
       <List/>
       <Getmethod/>
       <Restfullapi/>
     </div>
   )
 }

}

export default App;
