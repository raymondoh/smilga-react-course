import React, { useState } from "react";

import { Hero, Navbar, Sidebar, Submenu } from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
}

export default App;
