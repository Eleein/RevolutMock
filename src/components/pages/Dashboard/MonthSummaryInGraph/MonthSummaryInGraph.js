import React from "react";
import styles from "./MonthSummaryInGraph.module.scss";
import { Chart } from "react-google-charts";

export function MonthSummaryInGraph({data}) {

  return (
    <div className={styles.chartLayout}>
      <Chart
        chartType={"LineChart"}
        width={"600px"}
        height={"400px"}
        data={data}
      />
    </div>
  );
}

