import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows the usage streak widget on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /usage streak/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Current streak: 2 days/i)).toBeInTheDocument();
});
