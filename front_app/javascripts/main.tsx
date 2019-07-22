import "./css";

import * as React from "react";
import { render } from "react-dom";

import App from "./App";

const targetElement = document.getElementById( "AppTarget" );

render(
  <App/>,
  targetElement,
);

if ( module.hot ) {
  module.hot.accept( "./App", () => {
    const NextApp = require<{ default: typeof App }>( "./App" ).default;
    render(
      <NextApp/>,
      targetElement,
    );
  } );
}
