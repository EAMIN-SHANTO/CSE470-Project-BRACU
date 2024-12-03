import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./routes/homepage.jsx";
import Write from "./routes/Write.jsx";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import SinglePostPage from "./routes/SinglePostPage.jsx";
const router = createBrowserRouter([
 { path:"/",
element: <Homepage/>,

  
},
{
  path:"/posts",
  element: <postListPage/>,
},
{
  path: "/:slug", //dinamic route for post
  element: <SinglePostPage />,
},

{
  path: "/write",
  element: <Write />,
},
{
  path: "/login",
  element: <LoginPage />,
},
{
  path: "/register",
  element: <RegisterPage />,
},

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
