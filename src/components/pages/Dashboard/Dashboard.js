import React from "react";
import { Balance } from "components/pages/Dashboard/Balance/Balance";
import { MonthSummaryInGraph } from "components/pages/Dashboard/MonthSummaryInGraph/MonthSummaryInGraph";
import { DaySummary } from "components/shared/DaySummary/DaySummary";

export function Dashboard() {
  return (
    <div>
      <Balance />
      <MonthSummaryInGraph />
      <DaySummary />
    </div>
  );
}
