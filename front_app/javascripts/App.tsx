import * as debug from "debug";
import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Store } from "redux";

import UserMenu from "./Components/UserMenu";
import { IRootState } from "./reducers";

const logoImg = require( "../images/logo_white.png" );

interface IAppProps {
  store: Store<IRootState>;
}

export default class App extends React.PureComponent<IAppProps> {
  public render() {
    debug( "render:App" )( "now rendering." );
    return (
      <ReduxProvider store={this.props.store}>
        <div>
          <header id="topnav">
            <div className="topbar-main navbar m-b-0 b-0">
              <div className="container-fluid">
                <div className="topbar-left">
                  <a href="index.html" className="logo">
                    <img src={logoImg} alt="" height="30"/>
                  </a>
                </div>
                <div className="menu-extras">
                  <ul className="nav navbar-right list-inline">
                    <li className="dropdown user-box list-inline-item">
                      <UserMenu/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div className="wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="page-title-box">
                    <ol className="breadcrumb float-right m-0 p-0">
                      <li><a href="#">Codefox</a></li>
                      <li className="active">Dashboard</li>
                    </ol>
                    <h4 className="page-title m-0 m-font-light">一覧</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReduxProvider>
    );
  }
}
