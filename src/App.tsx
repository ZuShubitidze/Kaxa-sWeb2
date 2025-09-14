import { Link, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Contactpage from "./pages/Contactpage";
import Navbar from "./components/navbar";
import WorkPage from "./pages/WorkPage";

function NotFound() {
  return (
    <h2>
      404 - Page Not Found <Link to="/">Return Home</Link>
      <Link to="/">უკან დაბრუნება</Link>
    </h2>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="contact" element={<Contactpage />} />
        <Route path="/:id" element={<WorkPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
