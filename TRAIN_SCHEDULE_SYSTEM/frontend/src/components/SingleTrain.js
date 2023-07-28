import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import axios from "axios";

const SingleTrain = ({ accessToken }) => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get(
          `http://20.244.56.144/train/trains/${trainNumber}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setTrain(response.data);
      } catch (error) {
        console.error("Error fetching train:", error);
      }
    };

    fetchTrain();
  }, [trainNumber, accessToken]);

  return (
    <div>{train ? <Card>{/* Train details */}</Card> : <p>Loading...</p>}</div>
  );
};

export default SingleTrain;
