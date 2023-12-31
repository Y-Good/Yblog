import React, { ReactElement } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Icon from "./components/Icon";
import Icons from "./config/icons";

function App(): ReactElement {
  return (
    <div className="min-h-screen grid grid-rows-layout">
      <header className="flex items-center justify-between mx-56 p-8">
        <div>小呆比</div>
        <Nav />
        <div className="flex items-center">
          <input
            className="h-10 bg-gray-100 rounded text-xs w-52 p-3 outline-0"
            placeholder="Search"
          ></input>
          <div className="bg-amber-600 rounded w-10 h-10 text-xs text-center leading-10 text-white">
            <Icon name={Icons.search} />
          </div>
        </div>
      </header>

      <div className={"py-24 max-w-prose mx-auto"}>
        <Outlet />
      </div>

      <footer className="flex items-center justify-between px-56 py-10 bg-[#f4f4f4]">
        <div className="text-xs">Copyright © 2020 Meliora, Inc</div>
        <div className="flex space-x-6 text-base items-center">
          <Icon name={Icons.qq} />
          <Icon name={Icons.wechat} />
          <Icon name={Icons.bilibili} />
          <Icon name={Icons.github} />
        </div>
      </footer>
    </div>
  );
}

function Nav() {
  const routes = [
    { path: "/blog/home", title: "首页" },
    { path: "/blog/about", title: "博客" },
    { path: "/blog/con", title: "联系我们" },
    { path: "/blog/more", title: "更多" },
  ];

  const activeStyle = (val: boolean) =>
    val ? "text-[#474747] font-bold" : "text-[#777777]";

  const generateRoute = routes.map((item) => (
    <NavLink
      defaultChecked={true}
      className={({ isActive }) => activeStyle(isActive)}
      to={item.path}
      key={item.path}
    >
      {item.title}
    </NavLink>
  ));

  return (
    <nav>
      <div className="flex items-center space-x-12 text-[#777777] leading-8">
        {generateRoute}
      </div>
    </nav>
  );
}

export default App;
