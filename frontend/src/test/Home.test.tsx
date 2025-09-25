import { test } from "vitest";
import { renderWithRouter } from "./test-utils";

test("Homepage renders", () => {
  renderWithRouter(["/"]);
});
