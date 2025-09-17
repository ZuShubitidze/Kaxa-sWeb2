import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import { Link } from "react-router-dom";
import WorkPage from "./pages/WorkPage";
import Navbar from "./components/navbar";

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
      { path: ":id", element: <WorkPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
