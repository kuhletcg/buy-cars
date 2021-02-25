import React from "react";
import App from "./App";
import "./App.css";

function About() {
  return (
    <div className="wrapper">
      <h2>Registration page</h2>
      <form>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" />
          </label>
          <label>
            <p>Surname</p>
            <input name="surname" />
          </label>
          <label>
            <p>Address</p>
            <input name="address" />
          </label>
          <label>
            <p>Email</p>
            <input name="email" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//     <div>
//       <h1>About page</h1>
//       <p>
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Surname</th>
//             <th>Location</th>
//             <th>Email</th>
//           </tr>
//           <tr>
//             <th>{}</th>
//             <th>Nkabinde</th>
//             <th>Riverside</th>
//             <th>Kuhle@gmail.com</th>
//           </tr>
//           <tr>
//             <th>Sizwe</th>
//             <th>Zwane</th>
//             <th>Riverside</th>
//             <th>mszweesi@gmail.com</th>
//           </tr>
//         </table>
//       </p>
//     </div>
//   );
// }
export default About;
