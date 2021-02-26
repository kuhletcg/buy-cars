import React, { useState } from "react";
import App from "./App";
import "./App.css";

function About() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    surname: "",
    address: "",
    email: "",
    car: "",
  });
  const [saveInfo, setSaveInfo] = useState([]);

  function handleChange(event) {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    const { name, surname, address, email, car } = formInfo;
    event.preventDefault();
    const newInfo = { ...formInfo, name, surname, address, email, car };
    setSaveInfo([...saveInfo, newInfo]);
    console.log(saveInfo);
  }

  return (
    <div className="wrapper">
      <h2>Registration page</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={formInfo.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Surname</p>
            <input
              type="text"
              name="surname"
              value={formInfo.surname}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Address</p>
            <input
              type="address"
              name="address"
              value={formInfo.address}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formInfo.email}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Car</p>
            <input
              type="car"
              name="car"
              value={formInfo.car}
              onChange={handleChange}
            />
            <select name="menu_files" class="form-control">
              <option id="text1"> Mercerdes </option>
              <option id="text2"> Mazda</option>
              <option id="text2"> GTI Golf 7</option>
              <option id="text1"> VW Polo</option>
              <option id="text2"> </option>
            </select>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {saveInfo.map((info) => {
        return (
          <div>
            <h2>{info.name}</h2>
            <h2>{info.surname}</h2>
            <h2>{info.address}</h2>
            <h2>{info.email}</h2>
            <h2>{info.car}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default About;
