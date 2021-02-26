import React, { useState } from "react";
import App from "./App";
import "./App.css";

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
        <fieldset>
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
          </div>
        );
      })}
    </div>
  );
}

export default About;

// import React, { useState } from "react";
// import App from "./App";
// import "./App.css";

// import axios from "axios";
// import { setUserSession } from "./Utils/Common";

// function LogIn(props) {
//   const [loading, setLoading] = useState(false);
//   const username = useFormInput("");
//   const password = useFormInput("");
//   const [error, setError] = useState(null);

//   // handle button click of login form
//   const handleLogin = () => {
//     setError(null);
//     setLoading(true);
//     axios
//       .post("http://localhost:4000/users/signin", {
//         username: username.value,
//         password: password.value,
//       })
//       .then((response) => {
//         setLoading(false);
//         setUserSession(response.data.token, response.data.user);
//         props.history.push("/dashboard");
//       })
//       .catch((error) => {
//         setLoading(false);
//         if (error.response.status === 401)
//           setError(error.response.data.message);
//         else setError("Something went wrong. Please try again later.");
//       });
//   };

//   return (
//     <div>
//       LogIn
//       <br />
//       <br />
//       <div>
//         Username
//         <br />
//         <input type="text" {...username} autoComplete="new-password" />
//       </div>
//       <div style={{ marginTop: 10 }}>
//         Password
//         <br />
//         <input type="password" {...password} autoComplete="new-password" />
//       </div>
//       {error && (
//         <>
//           <small style={{ color: "red" }}>{error}</small>
//           <br />
//         </>
//       )}
//       <br />
//       <input
//         type="button"
//         value={loading ? "Loading..." : "Login"}
//         onClick={handleLogin}
//         disabled={loading}
//       />
//       <br />
//     </div>
//   );
// }

// const useFormInput = (initialValue) => {
//   const [value, setValue] = useState(initialValue);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };
//   return {
//     value,
//     onChange: handleChange,
//   };
// };

// export default LogIn;
