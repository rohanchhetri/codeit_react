import React, { useState } from "react";

const TextDisplay = (props) => {
  const { text, setText } = props;

  return (
    <div>
      <p>i am child compoennt</p>
      <p>childer text:{text}</p>
      <button onClick={() => setText("i am child")}>
        push from child to parent
      </button>
    </div>
  );
};

export default TextDisplay;
