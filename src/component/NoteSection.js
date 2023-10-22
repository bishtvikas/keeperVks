import React from "react";

function NoteSection(props) {
  return (
    <>
      <div className="notes--section">
        {/* notes--fields div */}

        <div
          className="note--field"
          // onClick ={handleClick2}
        >
          {/* form notes--div */}

          <form className="notes--div" onSubmit={props.submitHandler}>
            <input
              type="text"
              id="title"
              name="title"
              onChange={props.handleChange}
              value={props.noteData.title}
              className="notes--input"
              placeholder="Title"
              autoComplete="off"
            />

            <textarea
              autoComplete="off"
              type="text"
              id="content"
              name="content"
              onChange={props.handleChange}
              value={props.noteData.content}
              className="notes--input"
              placeholder="Take a note..."
              rows="3"
            />

            <button id="saveBtn">Save Note</button>
          </form>

          {/* form notes--div*/}
        </div>
        {/* notes fields div */}
        <div className="SavedTiles--container">{props.notes}</div>
      </div>
    </>
  );
}

export default NoteSection;
