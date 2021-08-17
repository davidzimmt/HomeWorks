import React, {useState} from 'react'
import "../components/Design/HomePage.css"
import {Link} from "react-router-dom"
import AddRoom from './AddRoom.js'

export default function HomePage(props) {
    
   
    return (
        <div className="homepagediv">
            <br />
            <br />
            <br />
            <br />

            <Link to="/ExistingRoom">{props.info1.map((e) => {
        return <button>{e.n}</button>
      })}</Link>
        
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <Link to="./AddRoom" className="link1"><span className="plussize">&#43;</span></Link>
        </div>
    )
}
