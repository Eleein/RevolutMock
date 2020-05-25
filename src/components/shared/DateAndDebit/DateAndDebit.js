import React from "react";
import styles from "./DateAndDebit.module.scss";
import format from "date-fns/format";
import cx from "classnames";

export function DateAndDebit({ date, debit, currencySymbol }) {
  const givenDate = format(date, "d, MMMM yyyy");

  return (
    <div className={cx(styles.layoutDateAndDebit, styles.stylesDateAndDebit)}>
      <div className={styles.date}>{givenDate}</div>
      <div className={styles.debit}>
        - {currencySymbol}
        {debit}
      </div>
    </div>
  );
}
