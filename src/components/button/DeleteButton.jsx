import React from "react";

function DeleteButton({ id, onDelete }) {
  return <button className="delete" onClick={() => onDelete(id)}></button>;
}

export default DeleteButton;
