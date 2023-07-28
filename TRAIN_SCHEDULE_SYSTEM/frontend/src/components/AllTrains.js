import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";

const AllTrains = ({ accessToken }) => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get("http://20.244.56.144/train/trains", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setTrains(response.data);
      } catch (error) {
        console.error("Error fetching trains:", error);
      }
    };

    fetchTrains();
  }, [accessToken]);

  // Sorting logic...

  return (
    <div>
      <h2>All Trains</h2>
      <Table striped bordered hover>
        {/* Table header */}
        <tbody>{/* Train rows */}</tbody>
      </Table>
    </div>
  );
};

export default AllTrains;
