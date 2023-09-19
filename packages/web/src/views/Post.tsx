import {ReactElement} from "react";
import Tag from "../components/Tag";
import Icon from "../components/Icon";
import Icons from "../config/icons";
import ReactMarkdown from "react-markdown";

function Post(): ReactElement {
    return <div>
        <div className="text-xs text-[#777777]">User interface</div>
        <div className="my-6 text-2xl text-[#474747] leading-9">Bad Design vs. Good Design: 5 Examples We can Learn
            From
        </div>
        <div className="text-xs text-[#777777] flex items-center">
            <span>October 24.2020</span>
            <div className={"mx-2 bg-[#DFDFDF] h-4 w-px"}/>
            <span>Shane Hobbins</span>
        </div>
        {/*文章内容*/}
        <div className="mt-12 mb-16">
            <ReactMarkdown># Hello, *CSDN* ,I am yma16!</ReactMarkdown>
        </div>

        {/*标签*/}
        <div className={"flex items-center space-x-2"}>
            <Tag label={"#HCI"}/>
            <Tag label={"#Design Thinking"}/>
        </div>

        <div className={"flex items-center space-x-6 mt-10"}>
            <span>分享至</span>
            <Icon name={Icons.qq}/>
            <Icon name={Icons.wechat}/>
            <Icon name={Icons.bilibili}/>
            <Icon name={Icons.github}/>
        </div>
        <div className={"mt-6 h-px bg-[#DFDFDF]"}/>

        {/*评论*/}
        <div className={"mt-12"}>
            <span>Add a Comment</span>

            <div className={"flex items-center space-x-6 mt-6"}>
                <div className={"basis-1/3"}>
                    <div className={"text-base leading-8"}>Name*</div>
                    <input className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"} placeholder={"Shane Hobbins"}/>
                </div>
                <div className={"basis-1/3"}>
                    <div className={"text-base leading-8"}>Email*</div>
                    <input className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"} placeholder={"info@interface.com"}/>
                </div>
                <div className={"basis-1/3"}>
                    <div className={"text-base leading-8"}>Website</div>
                    <input className={"rounded bg-[#F4F4F4] p-3 text-xs w-full"} placeholder={"www.interface.com"}/>
                </div>
            </div>

            <div className={"my-9 flex items-center"}>
                <input type={"checkbox"}/>
                <div className={"text-xs ml-2.5"}>
                    Save my name, email, and website in this browser for the next time I comment
                </div>
            </div>

            <div>
                <div className={"text-base leading-8"}>Message</div>
                <textarea className={"p-4 bg-[#F4F4F4] text-xs rounded w-full"} style={{minHeight: "100px"}}
                          placeholder={"Hi there"}/>
            </div>

            <div className={"mt-6 mb-16 px-6 py-1.5 bg-[#474747] rounded inline-block"}>
                <span className={"text-base leading-8 text-white"}>Post</span>
            </div>
        </div>
    </div>
}


export default Post;
