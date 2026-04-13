import { render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows signed-in user name on the dashboard", () => {
  render(<App />);
  expect(screen.getByText(/Signed in as George Nangle/i)).toBeInTheDocument();
});
