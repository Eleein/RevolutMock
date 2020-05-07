import React from "react";
import styles from "./Balance.module.scss";
import europeanUnion from "../../../../images/europeanUnion.jpeg";
import cx from 'classnames';

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
      <h1 className={cx(styles.balance)}>
        <span className={styles.dollars}>
          {currencySymbol}
          {dollars}.
        </span>
        <span className={styles.cent}>{cents}</span>
      </h1>
      <div>
        <img src={europeanUnion} alt="euro" className={styles.euroIcon} />
        {currency}
      </div>
    </div>
  );
}
