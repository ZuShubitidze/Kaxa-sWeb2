import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("navigates to about page on link click", () => {
  render(<App />);
  expect(screen.getByText(/kaxa/i)).toBeInTheDocument();
});
