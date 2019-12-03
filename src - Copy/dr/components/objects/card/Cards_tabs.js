
import React, { Component } from "react";
import { Card, Button, Dropdown, Icon ,Menu } from "antd";

export default class Cards_tabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details, border, title  } = this.props;
  
    return (
      <div>
        <Card className={"timeline__card card-border__" + border} title="" bordered={false}>
          <h3>{title}</h3>
          <p>{details}</p>
        </Card>
      </div>
    );
  }
}
