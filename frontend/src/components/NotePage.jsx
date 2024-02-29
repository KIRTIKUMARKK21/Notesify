import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import ArrowLeft from "../assets/icons8-arrow-50.png";
import { IoIosArrowBack } from "react-icons/io";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const NotePage = ({ history }) => {
  //   let noteId = props.match.params.id;
  const params = useParams();
  const navigate = useNavigate();
  let noteId = params.id;

  const [note, setNote] = useState(null);

  useEffect(() => {
    console.log(noteId);
    getNote();
  }, [noteId]);

  const showAlert = () => {
    // Display an alert message
    alert("Note is empty");
  };

  let getNote = async () => {
    let response = await fetch(`/api/notes/${noteId}`);
    let data = await response.json();
    // console.log(data);

    setNote(data);

    const dat = await sleep();
    console.log(note, dat);

    // sleep(2000).then(() => {
    //   console.log(note);
    // });
  };

  useEffect(() => {
    // console.log(note);
    console.log(note?.body.length);
  }, [note]);

  const changeHandler = (e) => {
    console.log("event called");
    // console.log(e);s
    // console.log(e.target.value);
    setNote({ body: e.target.value });
    // await sleep(2000);
    // console.log(note);
    // console.log(note.body.length);
  };

  let updateNote = async () => {
    console.log(note.body.length);
    if (note.body.length < 1) {
      showAlert();
      //   navigate(`/note/:${noteId}`);
    } else {
      await fetch(`/api/notes/${noteId}/update/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      navigate("/");
    }
  };

  let imageClickHandler = () => {
    updateNote();
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };
  let addNote = async () => {
    await fetch(`/api/notes/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h3>
            <IoIosArrowBack size={50} onClick={imageClickHandler} />
          </h3>
          {noteId !== "new" ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={addNote}>Add Note</button>
          )}
        </div>
        <input
          type="text"
          onChange={(e) => changeHandler(e)}
          defaultValue={note?.body}
        ></input>
      </div>
    </>
  );
};
