import React, { useState } from "react";
import App from "./App";
import "./App.css";
import { Link } from "react-router-dom";

function About() {
  const [formInfo, setFormInfo] = useState({
    username: "",
    email: "",
    password: "",
    // email: "",
  });
  const [saveInfo, setSaveInfo] = useState([]);

  function handleChange(event) {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    const { name, surname, address, email } = formInfo;
    event.preventDefault();
    const newInfo = { ...formInfo, name, surname, address, email };
    setSaveInfo([...saveInfo, newInfo]);
    console.log(saveInfo);
  }

  return (
    <div className="wrapper">
      <h2>LogIn page</h2>
      <form onSubmit={handleSubmit}>
        {/* <fieldset> */}
        <label>
          <p>UserName</p>
          <input
            type="text"
            name="name"
            value={formInfo.name}
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
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formInfo.password}
            onChange={handleChange}
          />
        </label>

        {/* <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formInfo.email}
              onChange={handleChange}
            />
          </label> */}
        {/* </fieldset> */}
        <Link to="/Shop">
          <button type="submit">LogIn</button>
        </Link>
      </form>

      {saveInfo.map((info) => {
        return (
          <div>
            <h2>{info.name}</h2>
            <h2>{info.surname}</h2>
            <h2>{info.address}</h2>
            <h2>{info.email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default About;
