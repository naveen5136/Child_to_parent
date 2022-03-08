import React from "react";

export default function Child({ parentToChild }) {
  const data = "This is Child ";
  return (
    <>
      <button onClick={() => parentToChild(data)}> Child Button </button>
    </>
  );
}
