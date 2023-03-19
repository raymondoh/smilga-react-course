import React, { useState, useEffect } from "react";
import { Tours, Loading } from "./components";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = id => {
    try {
      const newTours = tours.filter(tour => tour.id !== id);
      setTours(newTours);
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchTours = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setTours(data);
      }
      setLoading(false);
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  if (error) {
    return "shit";
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button type="button" style={{ marginTop: "2rem" }} className="btn" onClick={() => fetchTours()}>
            fetch more tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} onRemoveTour={removeTour} />
    </main>
  );
};
export default App;
