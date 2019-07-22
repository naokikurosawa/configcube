import * as React from "react";
import { Dropdown } from "react-bootstrap";

import CustomMenu from "./CustomMenu";
import CustomToggle from "./CustomToggle";

const CHANGE_PASSWORD = "changePassword";

export default class UserMenu extends React.Component {
  private signOutForm: HTMLFormElement | null = null;

  public render() {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="user-menu-dropdown">
          <i className="dripicons-user UserMenu"/>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey={CHANGE_PASSWORD}>パスワード変更</Dropdown.Item>
          <Dropdown.Item onSelect={this.onClickLogout}>ログアウト</Dropdown.Item>
        </Dropdown.Menu>
        <form action="/users/sign_out" method="post" ref={ref => this.signOutForm = ref}>
          <input type="hidden" name="_method" value="delete"/>
        </form>
      </Dropdown>
    );
  }

  private onClickLogout = ( eventKey: any, e: React.SyntheticEvent<{}> ) => {
    e.preventDefault();
    if ( this.signOutForm ) { this.signOutForm.submit(); }
  }
}
