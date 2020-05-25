import React from "react";
import { DateAndDebit } from "./DateAndDebit";

export default {
  component: DateAndDebit,
  title: "Account Date and Debit",
};

const mockData = {
  date: new Date(),
  debit: 32,
  currencySymbol: "€",
};

export const standard = () => {
  return (
    <DateAndDebit
      date={mockData.date}
      debit={mockData.debit}
      currencySymbol={mockData.currencySymbol}
    />
  );
};
