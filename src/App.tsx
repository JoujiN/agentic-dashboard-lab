import { AuthProvider } from "./auth/auth-context";
import { RequireAuth } from "./ui/auth/RequireAuth";
import { DashboardLayout } from "./ui/layout/DashboardLayout";
import { WelcomeWidget } from "./ui/widgets/WelcomeWidget";
import { AccountSummaryWidget } from "./ui/widgets/AccountSummaryWidget";
import { UsageStreakWidget } from "./ui/widgets/UsageStreakWidget";

export default function App() {
  return (
    <AuthProvider>
      <RequireAuth>
        <DashboardLayout>
          <WelcomeWidget />
          <AccountSummaryWidget />
          <UsageStreakWidget />
        </DashboardLayout>
      </RequireAuth>
    </AuthProvider>
  );
}
