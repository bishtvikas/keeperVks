import React from "react";
import SavedTiles from "./SavedTiles";
import NoteSection from "./NoteSection.js";
import Feedback from "./Feedback";

function Hero(props) {
  // const bulb = require("../images/bulb.png");
  // const bell = require("../images/bell.png");
  // const pen = require("../images/pen.png");
  // const archive = require("../images/archive.png");
  // const bin = require("../images/bin.png");

  //state to keep the values of saved notes
  const [noteData, setNoteData] = React.useState({
    title: "",
    content: "",
  });

  // handleClick
  function handleChange(event) {
    const { name, type, value, checked } = event.target;
    setNoteData((prevNoteData) => {
      return {
        ...prevNoteData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  //state of array to keep data of noteData state
  const [arrayOfNote, setArrayOfNote] = React.useState([]);

  // submitHandler
  function submitHandler(event) {
      
      event.preventDefault();
      const newArrayOfNote = {
        ...noteData,
        id: new Date().getTime().toString(),
      };
      setArrayOfNote([...arrayOfNote, newArrayOfNote]);

      setNoteData({
        title: "",
        content: "",
      });
    }
  

  const notes = arrayOfNote.map(function (items) {
    return (
      <SavedTiles key={items.id} title={items.title} content={items.content} />
    );
  });

  // console.log("notes");
  // console.log(notes);

  return (
    // hero element container div start
    <div className="Hero-element-container">
      {/* // hero element div start */}
      <div className="Hero-element">
        

        {/* notes--section div */}
        {!props.menu.toggle && props.menu.id === "Home" && (
          <NoteSection
            noteData={noteData}
            notes={notes}
            submitHandler={submitHandler}
            handleChange={handleChange}
          />
        )}
        {props.menu.toggle && props.menu.id === "Home" && (
          <NoteSection
            noteData={noteData}
            notes={notes}
            submitHandler={submitHandler}
            handleChange={handleChange}
          />
        )}

        {!props.menu.toggle && props.menu.id === "Feedback" && <Feedback />}
        {props.menu.toggle && props.menu.id === "Feedback" && <Feedback />}
        {/* notes--section div end */}
      </div>
      {/* // hero element div end */}
    </div>
    // hero element container div end */}
  );
}

export default Hero;
