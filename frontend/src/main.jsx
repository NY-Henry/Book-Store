import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import CreateBooks from "./pages/createBooks.jsx";
import DeleteBooks from "./pages/deleteBooks.jsx";
import EditBooks from "./pages/EditBook.jsx";
import Home from "./pages/Home.jsx";
import ShowBook from "./pages/ShowBooks.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/create",
    element: <CreateBooks />,
  },
  {
    path: "/books/delete/:id",
    element: <DeleteBooks />,
  },
  {
    path: "/books/edit/:id",
    element: <EditBooks />,
  },
  {
    path: "/books/details/:id",
    element: <ShowBook />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
