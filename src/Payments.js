// import React from "react";
// import ReactDOM from "react-dom";

// import "./styles.css";

// const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// class DataFetcher extends React.Component {
//   state = {
//     isLoading: false,
//     error: null,
//     posts: [],
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     fetch(this.props.url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw Error("Error fetching posts!");
//         }
//       })
//       .then((posts) => this.setState({ posts, isLoading: false }))
//       .catch((error) => this.setState({ error }));
//   }

//   render() {
//     return this.props.children(this.state);
//   }
// }

// class AppRenderProps extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>With Render Props</h1>
//         <DataFetcher url={BASE_URL}>
//           {({ error, isLoading, posts }) => {
//             if (error) {
//               return <p style={{ color: "red" }}>{error.message}</p>;
//             }

//             if (isLoading) {
//               return <p>Loading posts...</p>;
//             }

//             return (
//               <div>
//                 <h1>App</h1>
//                 {posts.map((post) => (
//                   <>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                   </>
//                 ))}
//               </div>
//             );
//           }}
//         </DataFetcher>
//       </div>
//     );
//   }
// }

// function useDataFetcher(url) {
//   const [posts, setPosts] = React.useState([]);
//   const [isLoading, setIsLoading] = React.useState(false);
//   const [error, setError] = React.useState(null);

//   React.useEffect(() => {
//     setIsLoading(true);
//     fetch(url)
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw Error("Error fetching posts!");
//         }
//       })
//       .then((posts) => {
//         setPosts(posts);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         setError(error);
//       });
//   }, [url]);

//   return { posts, isLoading, error };
// }

// function AppHooks() {
//   const { posts, isLoading, error } = useDataFetcher(BASE_URL);

//   if (error) {
//     return <p style={{ color: "red" }}>{error.message}</p>;
//   }

//   if (isLoading) {
//     return <p>Loading posts...</p>;
//   }

//   return (
//     <div>
//       <h1>App</h1>
//       {posts.map((post) => (
//         <>
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </>
//       ))}
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<AppHooks />, rootElement);

// export default useDataFetcher;
// import React, { useState } from "react";
// import App from "./App";
// import "./App.css";
// import { Link } from "react-router-dom";

// function Payments() {
//   return (
//     <View style={styles.container}>
//       <Rave
//         buttonText="Pay Now"
//         raveKey="<your-api-key-here>"
//         amount={20000}
//         billingEmail="ayoshokz@gmail.com"
//         billingMobile="08101274387"
//         billingName="Oluwatobi Shokunbi"
//         ActivityIndicatorColor="green"
//         onCancel={() => this.onCancel()}
//         onSuccess={(tranRef) => {
//           alert(tranRef);
//         }}
//         btnStyles={{ backgroundColor: "green" }}
//         textStyles={{ color: "white" }}
//         onError={() => {
//           alert("error");
//         }}
//         txref="1234"
//       />
//     </View>
//   );
// }

// export default Payments;

import React, { useState } from "react";
import App from "./App";
import "./App.css";
import { Link } from "react-router-dom";

function Payments() {
  const [formInfo, setFormInfo] = useState({
    accountNo: "",
    email: "",
    password: "",
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
      <h2>Payments page</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Account no.</p>
            <input
              type="account no."
              name="account no."
              value={formInfo.accountNo}
              onChange={handleChange}
            />
          </label>
          <label>
            <p>Card no</p>
            <input
              type="card no."
              name="card no"
              value={formInfo.cardNol}
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
        </fieldset>
        <Link to="/Home">
          <button type="submit">Pay</button>
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

export default Payments;
