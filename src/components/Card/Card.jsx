import React from "react";

const Card = (props) => {
  //   console.log(props.heading);
  return (
    <div className="col-6">
      <h1>{props.id}. {props.heading}</h1>
      <p>{props.description}</p>
      <button className="btn btn-info">Edit</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
};

export default Card;
