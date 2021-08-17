import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

export default function AddRoom(props) {
  const [select, setSelect] = useState("");
  const validSelect = (e) => {
    setSelect(e.target.value);
  };

  const [RoomName, setRoomName] = useState("");
  const validRoom = (e) => {
    setRoomName(e.target.value);
  };

  const [RoomColor, setRoomColor] = useState("");
  const validRoomColor = (e) => {
    setRoomColor(e.target.value);
  };

  return (
    <div>
      <select onChange={validSelect}>
          <option value="Fixed">Choose Room</option>
        <option value="BedRoom">Bedroom</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Bathroom">Bathroom</option>
      </select>
      <br />
      <input onChange={validRoom} type="text" placeholder="Room Name" />
      <br />
      <input onChange={validRoomColor} type="text" placeholder="Room Color" />
      <br />
      <Link to="/"><button
        onClick={() => {props.validPost(select, RoomName, RoomColor);}}   >Add</button></Link>

      
    </div>
  );
}
