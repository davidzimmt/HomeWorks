import './App.css';
import React, {useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import HomePage from "./components/HomePage.js"
import AddRoom from './components/AddRoom.js';
import ExistingRoom from './components/ExistingRoom.js';



function App(props) {

  const [info, setInfo] = useState([]);

  const addNewPost=(Select,Name,Color)=>{
    setInfo([...info,{s:Select, n:Name, c:Color}])
  

  }
 
  
  
  
  
  return (
    <div className="App">

      <h1>Smart House</h1>

      <Router>
        <Switch>
          <Route exact path = "/" component={()=>{return <HomePage info1={info}  />}}/>
          <Route exact path = "/AddRoom" component={()=>{return <AddRoom  validPost={addNewPost} />}}/>
          <Route exact path = "/ExistingRoom" component={()=>{return <ExistingRoom info1={info} />}}/>
          
            
          
          
        </Switch>
      </Router>
      
    
    </div>
  );
}

export default App;
