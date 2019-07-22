import * as React from "react";

interface ICustomToggle {
  onClick: ( e: React.MouseEvent<HTMLAnchorElement> ) => void;
}

export default class CustomToggle extends React.Component<ICustomToggle> {
  public render() {
    return (
      <div style={{height: 57, paddingTop: 16}}>
        <a href="#" onClick={this.handleClick}>
          {this.props.children}
        </a>
      </div>
    );
  }

  private handleClick = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    e.preventDefault();
    this.props.onClick(e);
  }
}
