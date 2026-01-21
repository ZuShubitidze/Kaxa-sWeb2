import { Link } from "react-router-dom";
import { lazy } from "react";
import Root from "./components/navbar";
import Products from "./pages/Products";
import CompletedWorks from "./pages/CompletedWorks";
import ContactPage from "./pages/ContactPage";
import WorkPage from "./pages/WorkPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

function NotFound() {
  return (
    <div>
      <h2>404 – Page Not Found</h2>
      <p>
        <Link to="/">Return Home</Link> | <Link to="/">უკან დაბრუნება</Link>
      </p>
    </div>
  );
}

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "products", element: <Products /> },
      { path: "completed-works", element: <CompletedWorks /> },
      { path: "work/:id", element: <WorkPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

export default routes;
