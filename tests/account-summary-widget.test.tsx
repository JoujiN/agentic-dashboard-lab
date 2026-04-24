import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows the plan widget on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /your plan/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Plan: Starter/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects used: 2 of 5/i)).toBeInTheDocument();
});
