import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Homepage from "./pages/Homepage";
import Workpage from "./pages/Workpage";
import Products from "./pages/Products";
import CompletedWorks from "./pages/CompletedWorks";

function NotFound() {
  return (
    <h2>
      404 - Page Not Found <Link to="/">Return Home</Link>
      <Link to="/">უკან დაბრუნება</Link>
    </h2>
  );
}

const routes = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <Aboutpage /> },
      { path: "contact", element: <Contactpage /> },
      { path: "products", element: <Products /> },
      { path: "completed-works", element: <CompletedWorks /> },
      { path: ":id", element: <Workpage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
