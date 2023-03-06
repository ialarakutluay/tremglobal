import React, { Component } from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import AddUser from "./forms/AddUser";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container">
         <Navbar title = "Tremglobal."/>
          <hr/>
          
          <Switch>
            <Route exact path = "/" component = {AddUser} />
          </Switch>

        </div>
      </Router>

      

     
     
      
    );
  }
}

export default App;
