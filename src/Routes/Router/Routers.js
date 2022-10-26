import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import CardDetails from "../../Pages/Shared/CardDetails/CardDetails";
import Checkout from "../../Pages/Shared/Checkout/Checkout";
import Error from "../../Pages/Shared/Error/Error";
import Login from "../../Pages/User/Login/Login";
import Register from "../../Pages/User/Register/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        loader: () => fetch('http://localhost:5000/allCourse')
      },
      {
        path: '/details/:id',
        element: <CardDetails></CardDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/checkout/:id',
        element: <Checkout></Checkout>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
])