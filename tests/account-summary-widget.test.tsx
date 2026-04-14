import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows the account summary widget on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /account summary/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Plan: Starter/i)).toBeInTheDocument();
  expect(screen.getByText(/Projects: 2 \/ 5/i)).toBeInTheDocument();
});
