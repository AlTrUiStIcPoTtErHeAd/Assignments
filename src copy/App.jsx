

import React from "react";
import Counter from "./Component/counter";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";
import TodoList from "./Component/TodoList";
function App() {
  let name = "Adeesh";
  return (
    <div>
      <Header prop={name} />
      <Main />
      <Footer /> 
      <Counter/>

      
    </div>
  );
}

export default App;
