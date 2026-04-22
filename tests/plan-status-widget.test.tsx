import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows the plan status widget on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /plan status/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Current status: At risk/i)).toBeInTheDocument();
  expect(
    screen.getByText(
      /Next step: you can start with one small action today because you missed 3 days this week and you have not created a new project recently\./i,
    ),
  ).toBeInTheDocument();
});
