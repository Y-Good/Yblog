import React from "react";
import { NavLink } from "react-router-dom";
import Tag from "../components/Tag";
import axios from "axios";
import Pagination from "../components/Pagination";

class Home extends React.Component {
  state = {
    articles: [],
    count: 0,
  };

  getArticle = async (page?: number) => {
    try {
      let user = await axios.get("http://localhost:3001/article", {
        params: {
          page: page || 0,
          pageSize: 5,
        },
      });
      this.setState({
        articles: user?.data?.result?.data,
        count: user?.data?.result?.count,
      });
    } catch (e) {
      console.log(e);
    }
  };

  async componentDidMount() {
    await this.getArticle();
  }

  render() {
    return (
      <div style={{ width: "65ch" }}>
        <div className="text-2xl text-[#474747]">最近文章</div>
        <div className="mt-6">
          <div className="flex space-x-12 text-base items-center">
            <div>全部</div>
            <div>Desgin Theory</div>
            <div>Tech</div>
            <div>Interface</div>
          </div>
          <div className="h-px mt-2 bg-[#DFDFDF]"></div>
        </div>
        <TestList articles={this.state.articles} />
        {this.state.articles.length > 0 ? (
          <Pagination
            total={this.state.count}
            pageSize={5}
            onChange={(val) => this.getArticle(val - 1)}
          />
        ) : null}
      </div>
    );
  }
}

// @ts-ignore
function TestList({ articles }) {
  const listItems = [];
  for (let i = 0; i < articles.length; i++) {
    listItems.push(
      <li key={i} className="mt-12">
        <div className="text-[#777777] text-xs">September 24.2020</div>
        <div className="mt-6 flex items-start">
          <NavLink
            to="/blog/post"
            state={{ id: articles[i].id }}
            className="text-lg text-[#474747] hover:font-bold text-ellipsis line-clamp-2"
            style={{ flex: "8" }}
          >
            {articles[i].title}
          </NavLink>
          <div className="inline-block pl-12" style={{ flex: "auto" }}>
            <Tag label="#HCI" onClick={() => console.log("aa")} />
          </div>
        </div>
        {i === articles.length - 1 ? null : (
          <div className={"mt-12 h-px bg-[#dfdfdf]"}></div>
        )}
      </li>,
    );
  }
  return <ul>{listItems}</ul>;
}

export default Home;
