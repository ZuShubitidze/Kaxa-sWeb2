import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

// Runs a cleanup after each test case (e.g., clearing jsdom)
afterEach(() => {
  cleanup();
});

// Make render and screen globally available
global.render = render;
global.screen = screen;
