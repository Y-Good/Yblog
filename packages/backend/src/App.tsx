import { IconCalendar } from "@arco-design/web-react/icon";
import { useNavigate, useRoutes } from "react-router-dom";
import React from "react";
import "./css/home.css";
import { Layout, Menu, Card } from "@arco-design/web-react";
import routes from "./route/routes";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;

function App() {
  const navigate = useNavigate();
  const useClickMenuItem = (key: string, e: any, keyPath: string[]) => {
    navigate(key);
  };
  return (
    <Layout className="layout-demo">
      <Header
        className={"px-5 flex justify-between items-center"}
        style={{ borderBottom: " 1px solid var(--color-border)" }}
      >
        <div className="text-xl font-bold">Yblog</div>
        <div className={"flex space-x-2"}>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </Header>
      <Layout>
        <Sider>
          <Menu
            defaultOpenKeys={["1"]}
            defaultSelectedKeys={["/home"]}
            onClickMenuItem={useClickMenuItem}
          >
            <SubMenu
              key="1"
              title={
                <span>
                  <IconCalendar />
                  基础
                </span>
              }
            >
              <MenuItem key="/home">文章</MenuItem>
              <MenuItem key="/tag">标签</MenuItem>
            </SubMenu>
            <SubMenu key="2" title="Navigation 2">
              <MenuItem key="2_1">Menu 1</MenuItem>
              <MenuItem key="2_2">Menu 2</MenuItem>
            </SubMenu>
            <SubMenu key="3" title="Navigation 3">
              <MenuItem key="3_1">Menu 1</MenuItem>
              <MenuItem key="3_2">Menu 2</MenuItem>
              <MenuItem key="3_3">Menu 3</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          <Card className={"h-full"}>{useRoutes(routes)}</Card>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
