// import React, { useState, useEffect } from "react";
// import "./App.css";

// function Shop({ match }) {
//   const fetchItems = async () => {
//     const fetchItem = await fetch(
//       `http://fornite-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`
//     );
//     const item = await fetchItem.json();
//     setItem(item);
//     console.log(item);
//   };
//   useEffect(() => {
//     fetchItems();

//     console.log(match);
//   }, []);

//   const [item, setItem] = useState({
//     images: {},
//   });

//   return (
//     <div>
//       <h1>{item.name}</h1>
//       <img src={item.images.transparent} alt="" />
//     </div>
//   );
// }
// export default Shop;
