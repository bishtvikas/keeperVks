import React from "react";

function SavedTiles(props) {
  const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let time = new Date()
  let year = time.getUTCFullYear();
  let month = time.getUTCMonth();
  let day = time.getUTCDate();
  let hr = time.getHours();
  let min = time.getMinutes();
 
  //  console.log(`${hr}:${min} ${day}-${monthName[month]}-${year}`)
 

 

  return (
    <>
      <div className="tiles-box">
        <div className="tiles-title">{`Title : ${props.title}`}</div>
        <div className="tiles-content">{props.content}</div>
        <div>
        <p className="timeOfNote">{`Time: ${hr}:${min} ${day}-${monthName[month]}-${year}`}</p>
        <button className="savedtile-btn" id="delete-btn">Delete</button>
        <button className="savedtile-btn" id="edit-btn">Edit</button>
        </div>
      </div>
    </>
  );
}

export default SavedTiles;
