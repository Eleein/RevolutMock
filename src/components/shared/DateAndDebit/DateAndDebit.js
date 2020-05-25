import React from "react";
import styles from "./DateAndDebit.module.scss";
import format from "date-fns/format";

export function DateAndDebit({ date, debit, currencySymbol }) {
  const givenDate = format(date, "d, MMMM yyyy");

  return (
    <div className={styles.layoutDateAndDebit}>
      <div className={styles.date}>{givenDate}</div>
      <div className={styles.debit}>
        {" "}
        - {currencySymbol}
        {debit}
      </div>
    </div>
  );
}
