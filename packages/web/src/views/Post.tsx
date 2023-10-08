import React, { useCallback, useEffect, useState } from "react";
import Tag from "../components/Tag";
import Icon from "../components/Icon";
import Icons from "../config/icons";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import remarkGfm from "remark-gfm";
import { useLocation } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";

interface Article {
  id: number;
  title: string;
  content: string;
}

function Post() {
  const [data, setData] = useState<Article>();
  const location = useLocation();
  const { id } = location.state;

  const Code = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={oneDark}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  const getArticle = useCallback(async () => {
    let article = await axios.get(`http://localhost:3001/article/${id}`);
    setData(article.data.result);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getArticle().then((r) => r);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <div className="text-xs text-[#777777]">User interface</div>
      <div className="my-6 text-2xl text-[#474747] leading-9">
        {data?.title}
      </div>
      <div className="text-xs text-[#777777] flex items-center">
        <span>October 24.2020</span>
        <div className={"mx-2 bg-[#DFDFDF] h-4 w-px"} />
        <span>Shane Hobbins</span>
      </div>
      {/*文章内容*/}
      <article className="mt-12 mb-16">
        <ReactMarkdown
          className={"prose max-w-none prose-stone"}
          components={Code}
          children={data?.content || ""}
          //@ts-ignore
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
        />
      </article>

      {/*标签*/}
      <div className={"flex items-center space-x-2"}>
        <Tag label={"#HCI"} />
        <Tag label={"#Design Thinking"} />
      </div>

      <div className={"flex items-center space-x-6 mt-10"}>
        <span>分享至</span>
        <Icon name={Icons.qq} />
        <Icon name={Icons.wechat} />
        <Icon name={Icons.bilibili} />
        <Icon name={Icons.github} />
      </div>
      <div className={"mt-6 h-px bg-[#DFDFDF]"} />

      {/*评论*/}
      <div className={"mt-12"}>
        <span>Add a Comment</span>

        <div className={"flex items-center space-x-6 mt-6"}>
          <div className={"basis-1/3"}>
            <div className={"text-base leading-8"}>Name*</div>
            <input
              className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"}
              placeholder={"Shane Hobbins"}
            />
          </div>
          <div className={"basis-1/3"}>
            <div className={"text-base leading-8"}>Email*</div>
            <input
              className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"}
              placeholder={"info@interface.com"}
            />
          </div>
          <div className={"basis-1/3"}>
            <div className={"text-base leading-8"}>Website</div>
            <input
              className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"}
              placeholder={"www.interface.com"}
            />
          </div>
        </div>

        <div className={"my-9 flex items-center"}>
          <input type={"checkbox"} />
          <div className={"text-xs ml-2.5"}>
            Save my name, email, and website in this browser for the next time I
            comment
          </div>
        </div>

        <div>
          <div className={"text-base leading-8"}>Message</div>
          <textarea
            className={"p-4 bg-[#F4F4F4] text-xs rounded w-full"}
            style={{ minHeight: "100px" }}
            placeholder={"Hi there"}
          />
        </div>

        <div
          className={"mt-6 mb-16 px-6 py-1.5 bg-[#474747] rounded inline-block"}
        >
          <span className={"text-base leading-8 text-white"}>Post</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
