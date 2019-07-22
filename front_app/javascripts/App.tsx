import * as debug from "debug";
import * as React from "react";

import UserMenu from "./Components/UserMenu";

const logoImg = require( "../images/logo_white.png" );

export default class App extends React.PureComponent<{}> {
  public render() {
    debug( "render:App" )( "now rendering." );
    return (
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

          <footer className="footer">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="copyright pull-none">
                              2019 © LauncherBot LLC.
                          </div>
                      </div>
                      <div className="col-md-6">
                          <ul className="float-right list-inline m-b-0 pull-none">
                              <li className="list-inline-item">
                                  <a href="#">About</a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="#">Help</a>
                              </li>
                              <li className="list-inline-item">
                                  <a href="#">Contact</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </footer>
        </div>
      </div>
    );
  }
}
