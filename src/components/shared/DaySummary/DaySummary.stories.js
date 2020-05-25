import React from "react";
import { DaySummary } from "components/shared/DaySummary/DaySummary";

export default {
  component: DaySummary,
  title: "Account Date and Debit",
};

const mockData = {
  date: new Date(),
  debit: 32,
  currencySymbol: "€",
  sign: "-"
};

export const standard = () => {
  return (
    <DaySummary
      date={mockData.date}
      debit={mockData.debit}
      currencySymbol={mockData.currencySymbol}
      sign={mockData.sign}
    />
  );
};
