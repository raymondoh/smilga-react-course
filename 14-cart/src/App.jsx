import { useState } from "react";

import "./App.css";
import { Navbar, CartContainer } from "./components";
import { useGlobalContext } from "./context/context";

function App() {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "36rem" }}>
          Loading...
        </div>
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
