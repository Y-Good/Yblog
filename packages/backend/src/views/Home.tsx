import React from "react";
import "../css/home.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
} from "@arco-design/web-react";
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

class Home extends React.Component {
  render() {
    return (
      <Layout className="layout-collapse-demo">
        <Header>Header</Header>
        <Layout>
          <Sider>
            <Menu defaultOpenKeys={["1"]}>
              <SubMenu
                key="1"
                title={
                  <span>
                    <IconCalendar />
                    Navigation 1
                  </span>
                }
              >
                <MenuItem key="1_1">Menu 1</MenuItem>
                <MenuItem key="1_2">Menu 2</MenuItem>
                <SubMenu key="2" title="Navigation 2">
                  <MenuItem key="2_1">Menu 1</MenuItem>
                  <MenuItem key="2_2">Menu 2</MenuItem>
                </SubMenu>
                <SubMenu key="3" title="Navigation 3">
                  <MenuItem key="3_1">Menu 1</MenuItem>
                  <MenuItem key="3_2">Menu 2</MenuItem>
                  <MenuItem key="3_3">Menu 3</MenuItem>
                </SubMenu>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>sdasdasdsad</Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
