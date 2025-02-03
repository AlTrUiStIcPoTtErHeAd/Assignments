import React from "react";

function Header({ prop }) {
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "algerian",
        backgroundColor: "cyan",
      }}
    >
      <h1> I Am {prop}</h1>
    </div>
  );
}

export default Header;