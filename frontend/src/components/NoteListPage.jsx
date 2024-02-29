import React, { useState, useEffect } from "react";
import { ListItem } from "./ListItem";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
function NoteListPage() {
  let [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);

  let getNotes = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    // setNotes(data);
    console.log(data);
    setNotes(data);
  };
  // getNotes();
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
        <div className="add-button-container">
          <Link to="/note/new">
            <IoIosAddCircle size={50}></IoIosAddCircle>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NoteListPage;
