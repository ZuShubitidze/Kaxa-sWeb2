// import { screen } from "@testing-library/react";
// import { renderWithRouter } from "./test-utils";

// test("renders Home Page Header correctly", () => {
//   renderWithRouter(["/"]); // initialEntries = homepage
//   expect(screen.getByRole("region", { name: /carousel/i })).toBeInTheDocument();
// });

import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import routes from "../routes";

test("homepage renders carousel", () => {
  const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  render(<RouterProvider router={router} />);
});
