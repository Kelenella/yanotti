import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Root from "./routes/root";
// import ErrorPage from "./error-page";
// import Contact from "./routes/contact";

// const router = createBrowserRouter([
//   {
//     path: "/yanotti",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "contacts/:contactId",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>
);
