import React from "react";
import { MonthSummaryInGraph } from "./MonthSummaryInGraph";

export default {
  title: "Month summary",
  component: MonthSummaryInGraph,

};

const myData = [
  ["x", "expenses"],
  [0, 0],
  [2.5, 23],
  [5, 10],
  [7.5, 30],
  [10, 31],
];
export const standard = () => {
  return <MonthSummaryInGraph data={myData} />;
};

//fetch call returned


