import React, { Component } from "react";
import { Card, Button, Dropdown, Icon ,Menu } from "antd";

export default class Cards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { details, border, title, footer } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <Card className={"timeline__card card-border__" + border} title={title}>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link fr" href="#">
              <Icon type="dash" />
            </a>
          </Dropdown>
          <p>{details}</p>
          {footer && (
            <div className={"card-footer"}>
              {footer.type == "internal" ? (
                <Button type={footer.btn_type} className={footer.btn_class}>
                  {footer.text}
                </Button>
              ) : (
                <Button type={footer.btn_type} className={footer.btn_class}>
                  {footer.text}
                </Button>
              )}
            </div>
          )}
        </Card>
      </div>
    );
  }
}
