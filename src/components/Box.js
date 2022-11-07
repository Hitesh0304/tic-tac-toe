import React from "react";

const Box = (props) => {
  return (
    <div className={"column"} id={props.id} onClick={props.clickHandler}>
      {props.board.find((x) => x.position === props.id)
        ? props.board.find((x) => x.position === props.id).player
        : ""}
    </div>
  );
};

export default Box;
