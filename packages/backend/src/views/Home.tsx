import React from "react";
import "../css/home.css";
import {
  Layout,
  Menu,
  Breadcrumb,
  Button,
  Message,
  Card,
} from "@arco-design/web-react";
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from "@arco-design/web-react/icon";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "../route/routes";
import ABC from "./ABC";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

function Home() {
  return (
    <Layout className="layout-demo">
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
        <Content>
            <Card>{useRoutes(routes)}</Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Home;
