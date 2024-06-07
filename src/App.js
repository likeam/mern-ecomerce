
import './App.css'
import Checkout from './features/cart/Checkout';
import CartPage from './pages/CartPage';
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProductDetailPage from './pages/ProductDetailPage';
import SignupPage from './pages/SignupPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/signin",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/cart",
    element:<CartPage></CartPage>,
    },
    {
      path: "/checkout",
      element:<Checkout></Checkout>,
      },
      {
        path: "/product-detail",
        element:<ProductDetailPage></ProductDetailPage>,
        },
]);


export default function App() {
  return (
    <>
      <div className="App">
      <RouterProvider router={router} />
      </div>
    </>
  )
}