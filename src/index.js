import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./Pages/App"
import store from "./Store/store.jsx"
import RootLayout from "./Pages/RootLayout"
import ErrorPage from "./Pages/ErrorPage"

import Services from "./Pages/Services.jsx"
import Blog from "./Pages/Blog.jsx"
import AboutMe from "./Pages/AboutMe.jsx"



const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <App /> },
        { path: "Blog", element: <Blog /> },    
        { path: "Services", element: <Services /> },    
        { path: "AboutMe", element: <AboutMe /> },    
      ]
    }
  ]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

