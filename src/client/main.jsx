import React from "react";
import ReactDOM from "react-dom/client";
import StudentList from "./features/student/StudentList.jsx";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import Root from "./layout/Root.jsx";
import StudentDetails from "./features/student/studentdetails.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <StudentList /> },
      { path: "/students", element: <StudentList /> },
      { path: "/students/:id", element: <StudentDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
