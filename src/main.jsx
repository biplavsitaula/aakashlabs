import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./routes/About.jsx";
import ContactDetails from "./routes/ContactDetails.jsx";
import News from "./routes/News.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import NewsDetail from "./routes/NewsDetail.jsx";
import NewsProvider from "./components/store/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactDetails />,
      },
      {
        path: "/news",
        element: (
          <NewsProvider>
            <News />
          </NewsProvider>
        ),
      },
      {
        path: "/full-news",
        element: (
          <NewsProvider>
            <NewsDetail component={News} />
          </NewsProvider>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
