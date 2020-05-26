import React from "react";
import styles from "components/shared/DaySummary/DaySummary.module.scss";
import cx from "classnames";
import { formatNamedDate } from "utils/date";

export function DaySummary({ date, debit, currencySymbol, sign }) {
  const givenDate = formatNamedDate(date);

  return (
    <div className={cx(styles.layoutDateAndDebit, styles.stylesDateAndDebit)}>
      <div className={styles.date}>{givenDate}</div>
      <div className={styles.debit}>
         {sign} {currencySymbol}
        {debit}
      </div>
    </div>
  );
}
