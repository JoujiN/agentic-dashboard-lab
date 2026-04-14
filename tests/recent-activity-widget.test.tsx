import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows three recent activity items on the authenticated dashboard", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /recent activity/i }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Created the Q2 planning board/i)).toBeInTheDocument();
  expect(screen.getByText(/Invited Maya to the workspace/i)).toBeInTheDocument();
  expect(screen.getByText(/Reviewed the onboarding checklist/i)).toBeInTheDocument();
});
