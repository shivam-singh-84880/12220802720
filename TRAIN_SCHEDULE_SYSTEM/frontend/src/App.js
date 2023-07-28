// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route /* Switch */ } from "react-router-dom"; // Remove 'Switch'
import { Container } from "react-bootstrap";
import { getAccessToken } from "./api";
import AllTrains from "./components/AllTrains";
import SingleTrain from "./components/SingleTrain";

const App = () => {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const token = await getAccessToken();
        setAccessToken(token);
      } catch (error) {
        console.error("Error getting access token:", error);
      }
    };

    fetchAccessToken();
  }, []);

  return (
    <Router>
      <Container className="mt-4">
        {/* Use div instead of Switch */}
        <div>
          <Route
            exact
            path="/"
            render={() => <AllTrains accessToken={accessToken} />}
          />
          <Route
            path="/train/:trainNumber"
            render={(props) => (
              <SingleTrain {...props} accessToken={accessToken} />
            )}
          />
        </div>
      </Container>
    </Router>
  );
};

export default App;
