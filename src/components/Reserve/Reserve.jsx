import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

export const Reserve = () => {
  let navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("")
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    ReservationName: "",
    DateReservation: "",
  });


const initialState = {
  ReservationName: "",
  DateReservation: "",
};

const clearState = () => {
  setData({ ...initialState });
};

useEffect(() => {
  if (data.ReservationName.length < 1 || data.DateReservation.length < 1) {
    setMessage("Please, fill the gaps ");
    setBtnDisabled(true);
  } else {
    setMessage(null);
    setBtnDisabled(false);
  }
}, [data]);

const handleInputChange = (event) => {
  setData({
    ...data,
    [event.target.name]: event.target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Sending data..." + data.ReservationName + " " + data.DateReservation);
  localStorage.setItem("user", JSON.stringify(data));
  clearState();
  setTimeout(() => {
  navigate("/");
  }, 3000);
  setVisible(false);
};

return (
  <>
    <h1>Reserva en el restaurante</h1>
    <form onSubmit={handleSubmit} className="formulario">
      <input
        className="inputito"
        type="text"
        placeholder="name"
        value={data.ReservationName}
        onChange={handleInputChange}
        name="ReservationName"
      />
      <br />
      <br />
      <input
        className="inputito"
        type="date"
        placeholder="Fecha reserva"
        value={data.DateReservation}
        onChange={handleInputChange}
        name="DateReservation"
      />
      <br />
      <br />
      <button type="submit" disabled={btnDisabled}>
        Enviar
      </button>
      <br />
      <br /> <hr />
    </form>
    <p>{visible ? message : "Redirecting to Home..."}</p>
  </>
);
};

export default Reserve;
