import React, { useState } from "react";
import { Modal, Sidebar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
