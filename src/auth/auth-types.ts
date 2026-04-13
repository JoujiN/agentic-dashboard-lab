export type AuthUser = {
  id: string;
  email: string;
  fullName: string;
};

export type AuthSession = {
  access_token: string;
  user: AuthUser;
} | null;

export type AuthContextValue = {
  session: AuthSession;
  user: AuthUser | null;
  isAuthenticated: boolean;
  signIn: () => void;
  signOut: () => void;
};
