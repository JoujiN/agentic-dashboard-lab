import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows three recent activity items on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /recent account activity/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Missed 3 days this week/i)).toBeInTheDocument();
  expect(screen.getByText(/No new projects created/i)).toBeInTheDocument();
  expect(screen.getByText(/Last login 4 days ago/i)).toBeInTheDocument();
});
