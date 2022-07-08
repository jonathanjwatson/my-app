import React, { useState } from "react";
import Card from "../Card/Card";

const Board = () => {
  const [myTasks, setMyTasks] = useState([
    {
      heading: "Go to the store",
      description: "Buy bluejeans",
      id: 1,
    },
    {
      heading: "Pickup kids from soccer",
      description: "Take the minivan",
      id: 2,
    },
    {
      heading: "Buy milk",
      description: "2%",
      id: 3,
    },
  ]);

  const handleClick = () => {
    console.log("clicking the button");
    // Create a new card
    // The card should have content.
    // Add a new todo object to state.
    const myTasksCopy = [...myTasks];
    myTasksCopy.push({
      heading: "Finish homework",
      description: "You know you want to!",
      id: myTasksCopy.length + 1,
    });
    // NEVER DIRECTLY MUTATE STATE
    setMyTasks(myTasksCopy);
    // TODO: Future development, accept users input for the content of the card
  };

  return (
    <div className="container">
      <div className="row">
        {myTasks.map((task) => {
          return (
            <Card
              heading={task.heading}
              description={task.description}
              id={task.id}
              key={`taskCard-${task.id}`}
            />
          );
        })}
        {/* <Card heading="Go to the Store" description="Buy bluejeans." id={1} />
        <Card
          heading="Pickup the kids from soccer"
          description="take the minivan"
          id={2}
        />
        <Card heading="Buy milk" description="" id={3} /> */}
      </div>
      <div className="row">
        <div className="col">
          <div className="btn btn-success" onClick={handleClick}>
            Add new
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
