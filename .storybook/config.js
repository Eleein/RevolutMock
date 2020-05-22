import React from "react";
import { addDecorator } from "@storybook/react";
import "./global.storybook.scss";
import "styles/global.scss";

addDecorator((getStory) => {
  return (
    <div className="outerLayout">
      <div className="innerLayout"> {getStory()}</div>
    </div>
  );
});
