import * as React from "react";

interface ICustomMenu {
  className?: string;
  style?: object;
}

export default class CustomMenu extends React.Component<ICustomMenu> {
  public render() {
    const { style, className } = this.props;
    return (
        <ul className={`${className} notify-list`} style={style}>
          {React.Children.toArray(this.props.children).map(( child, i ) => <li key={i}>{child}</li>)}
        </ul>
    );
  }
}
