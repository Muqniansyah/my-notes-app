import React from "react";

function ArsipButton({ id, moveData }) {
  return <button className="arsip" onClick={() => moveData(id)}></button>;
}

export default ArsipButton;
