import React from "react";
import { Link } from "react-router-dom";
export const ListItem = ({ note }) => {
  return (
    <div>
      <Link to={`/note/${note.id}`}>
        <div className="notes-list-item">
        <h3>{note.body}</h3>
        </div>
      </Link>
    </div>
  );
};
