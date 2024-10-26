import { useEffect, useState } from "react";

const usePassengers = () => {
  const [passengers, setPassengers] = useState([] as Passenger[]);
  const [selectedPassenger, setSelectedPassenger] = useState({} as Passenger);

  const getPassengers = () => {
    fetch("http://localhost:4000/passengers")
      .then(res => res.json())
      .then(data => setPassengers(data))
      .catch(err => console.error(err));
  };

  const removePassenger = (id: string) => {
    fetch(`http://localhost:4000/passengers/${id}`, {
      method: "DELETE",
    })
      .then(() => getPassengers())
      .catch(err => console.error(err));
  };

  const createPassenger = (passenger: Passenger) => {
    fetch("http://localhost:4000/passengers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passenger),
    })
      .then(() => getPassengers())
      .catch(err => console.error(err));
  };

  const getPassenger = (id: string) => {
    fetch(`http://localhost:4000/passengers/${id}`)
      .then(res => res.json())
      .then(data => setSelectedPassenger(data))
      .catch(err => console.error(err));
  };

  const editPassenger = (passenger: Passenger) => {
    fetch(`http://localhost:4000/passengers/${passenger.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(passenger),
    }).catch(err => console.error(err));
  };

  useEffect(() => {
    getPassengers();
  }, []);

  return {
    selectedPassenger,
    passengers,
    removePassenger,
    createPassenger,
    editPassenger,
    getPassenger,
  };
};

export default usePassengers;
