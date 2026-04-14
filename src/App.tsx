import { AuthProvider } from "./auth/auth-context";
import { RequireAuth } from "./ui/auth/RequireAuth";
import {
  DashboardLayout,
  DashboardWidgetGroup,
} from "./ui/layout/DashboardLayout";
import { WelcomeWidget } from "./ui/widgets/WelcomeWidget";
import { AccountSummaryWidget } from "./ui/widgets/AccountSummaryWidget";
import { UsageStreakWidget } from "./ui/widgets/UsageStreakWidget";
import { RecentActivityWidget } from "./ui/widgets/RecentActivityWidget";
import { PlanStatusWidget } from "./ui/widgets/PlanStatusWidget";

export default function App() {
  return (
    <AuthProvider>
      <RequireAuth>
        <DashboardLayout>
          <DashboardWidgetGroup>
            <WelcomeWidget />
            <AccountSummaryWidget />
            <UsageStreakWidget />
            <RecentActivityWidget />
            <PlanStatusWidget />
          </DashboardWidgetGroup>
        </DashboardLayout>
      </RequireAuth>
    </AuthProvider>
  );
}
