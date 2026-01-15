import { vi } from "vitest";

// mock Contactpage so its asset imports are never evaluated
vi.mock("@/pages/Contactpage", () => ({
  __esModule: true,
  default: () => <div />,
}));

// other mocks if necessary...
import { test } from "vitest";
import { renderWithRouter } from "./test-utils";

test("Homepage renders", () => {
  renderWithRouter(["/"]);
});
