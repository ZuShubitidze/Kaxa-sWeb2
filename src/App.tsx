import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </Suspense>
  );
}
