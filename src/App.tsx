// import { Link, Route, Routes } from "react-router-dom";
// import Homepage from "./pages/Homepage";
// import Aboutpage from "./pages/Aboutpage";
// import Contactpage from "./pages/Contactpage";
// import Navbar from "./components/navbar";
// import Workpage from "./pages/Workpage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navbar />}>
//         <Route index element={<Homepage />} />
//         <Route path="about" element={<Aboutpage />} />
//         <Route path="contact" element={<Contactpage />} />
//         <Route path="/:id" element={<WorkPage />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

export default function App() {
  return <RouterProvider router={router} />;
}
