// import React, { useEffect, useState } from "react";
// import "./styles.css";

import { useEffect } from "react";

// export default function App() {
//   return (
//     <div>
//       Parent:
//       <Child />
//       <p>Unmount Child, while it is still loading</p>
//     </div>
//   );
// }

// use async operation with automatic abortion on unmount
export function useAsync(asyncFn, onSuccess) {
  useEffect(() => {
    let isMounted = true;
    asyncFn().then((data) => {
      if (isMounted) onSuccess(data);
    });
    return () => {
      isMounted = false;
    };
  }, [asyncFn, onSuccess]);
}

// const Child = () => {
//   const [state, setState] = useState("loading (1 sec)...");
//   useAsync(delay, setState);
//   return <div>Child: {state}</div>;
// };

// const delay = () =>
//   new Promise((resolve) => setTimeout(() => resolve("data fetched"), 1000));