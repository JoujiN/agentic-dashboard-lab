import { fireEvent, render, screen } from "@testing-library/react";
import App from "../src/App";

test("shows signed-in user name on the dashboard", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /account dashboard/i, level: 1 }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Signed in as George Nangle/i)).toBeInTheDocument();
});

test("lets the user sign out and sign back in", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: /sign out/i }));

  expect(screen.getByText(/Please sign in to view your dashboard/i)).toBeInTheDocument();
  expect(screen.queryByText(/Signed in as George Nangle/i)).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

  expect(screen.getByText(/Signed in as George Nangle/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument();
});
