import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows the plan status widget on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /plan status/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Current status: At risk/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Next step: You should take action to get back on track this week\./i),
  ).toBeInTheDocument();
});
