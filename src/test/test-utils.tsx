// ./test-utils.js
import { render } from "@testing-library/react";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "../routes"; // wherever your routes are defined

// Render with React Router v7 Data APIs
export function renderWithRouter(initialEntries = ["/"]) {
  const router = createMemoryRouter(routes, { initialEntries });
  return render(<RouterProvider router={router} />);
}

export function renderWithRouterComponent(ui: any, { route = "/" } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}
