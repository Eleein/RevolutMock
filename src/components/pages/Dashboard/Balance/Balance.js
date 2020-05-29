import React from "react";
import styles from "./Balance.module.scss";
import { ReactComponent as EuFlag } from "images/eu_flag.svg";
import { ReactComponent as ArrowDown } from "images/arrowDown.svg";
import cx from "classnames";

/* shape of the information is this:
account balance(current)
currency
icon
dropdown
* */

export function Balance({
  id,
  name,
  currentBalance,
  currency,
  currencySymbol,
  relatedAccounts,
}) {
  const [dollars, cents] = currentBalance.toString().split(".");

  return (
    <div>
      {/* todo  Remove cx  if you are not using multiple classes*/}
      <div className={styles.balanceAndAccountsLayout}>
        <h1 className={cx(styles.balance)}>
          <span className={styles.dollars}>
            {currencySymbol}
            {dollars}
          </span>
          <span className={styles.cent}>.{cents}</span>
        </h1>
        <ArrowDown className={styles.arrowDown} />
      </div>
      <div className={styles.containerEuroIcon}>
        <EuFlag className={styles.euroIcon} />
        <p className={styles.currencyName}>{currency}</p>
      </div>
    </div>
  );
}
