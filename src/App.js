import React from "react";
import Header from "./component/header";
import Main from "./component/main";
import Footer from "./component/footer";

import "./App.css"; 

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;