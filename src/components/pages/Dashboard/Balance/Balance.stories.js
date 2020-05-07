import React from "react";
import { Balance } from "./Balance";

const accountInfo = {
  id: 3,
  name: "default",
  currentBalance: 44.56,
  currency: "euro",
    currencySymbol: '€',
  relatedAccounts: [
    { name: "test1", id: 1 },
    { name: "test2", id: 2 },
  ],
};

export default {
  component: Balance,
  title: "Account Balance",
};

export const standard = () => {
  return (
    <div className='outerLayout'>
      <div className='innerLayout'
      >
        <Balance
          id={accountInfo.id}
          name={accountInfo.name}
          currentBalance={accountInfo.currentBalance}
          currency={accountInfo.currency}
          currencySymbol={accountInfo.currencySymbol}
          relatedAccounts={accountInfo.relatedAccounts}
        />
      </div>
    </div>
  );
};
