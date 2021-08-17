import React from 'react'
import {Link} from "react-router-dom"
import AddRoom from './AddRoom.js'
import HomePage from "./HomePage";
import "./Design/ExRoom.css"

export default function ExistingRoom(props) {

    return (
        <div>
            <div className="bigdiv">
            {props.info1.map((e) => {
        return <h1 className="ERh1">Room Selected: {e.s}
        <br />
        Room Name: {e.n} 
        <br />
        Room Color: {e.c}
        </h1>  
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
      <button>Add</button>
      </div>
        </div>
    )
}
