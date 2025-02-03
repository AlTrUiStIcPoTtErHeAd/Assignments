import React from "react";
import TodoList from "./TodoList";

function Main() {
  return (
    <div
      style={{
        height: "70vh",
        backgroundColor: "yellow",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "cursive",
        fontSize: "1.5rem",
      }}
    >
      <TodoList />
    </div>
  );
}

export default Main;
