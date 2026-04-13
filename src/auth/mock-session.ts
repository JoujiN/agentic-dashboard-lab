import type { AuthSession } from "./auth-types";

export const mockSignedInSession: AuthSession = {
  access_token: "mock-token",
  user: {
    id: "user-1",
    email: "george@example.com",
    fullName: "George Nangle",
  },
};

export const mockSignedOutSession: AuthSession = null;
