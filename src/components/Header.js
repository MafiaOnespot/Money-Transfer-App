import React, { Fragment } from "react";

const Header = props => (
  <Fragment>
    <h1 className="mainTitle">Money Transfer App</h1>
    <h2 className="description">Send Fake Money To Fake People.</h2>
    <h1 className="balance">
      Balance: <span className="balance__number">₹ {props.balance} </span>
    </h1>
  </Fragment>
);

export default Header;
