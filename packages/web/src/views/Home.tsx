import React from "react";
import {NavLink} from "react-router-dom";
import Icon from "../components/Icon";
import Icons from "../config/icons";
import Tag from "../components/Tag";

function Home() {
    return <div>
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
        <TestList/>
        <div className={"mt-24 flex items-center space-x-6"}>
            <div className={"w-8 h-8 rounded bg-[#f4f4f4] flex items-center justify-center pb-1"}>
                <Icon name={Icons.left} size={12}/>
            </div>
            <div className={`flex items-center space-x-4 text-base`}>
                <span>1</span>
                <span className={"text-[#FFBA9D]"}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
            </div>
            <div className={"w-8 h-8 rounded border border-[#474747] flex items-center justify-center pb-1 cursor-pointer"}>
                <Icon name={Icons.right} size={12}/>
            </div>
        </div>
    </div>;
}

function TestList() {
    const listItems = [];
    for (let i = 0; i < 4; i++) {
        listItems.push(
            <li key={i} className="mt-12">
                <div className="text-[#777777] text-xs">September 24.2020</div>
                <div className="mt-6 flex items-start">
                    <NavLink to="/post" className="text-lg text-[#474747] basis-4/5 hover:font-bold">Bad Design vs. Good
                        Design: 5
                        Examples We can
                        Learn From
                    </NavLink>
                    <div className="basis-1/5 inline-block">
                        <Tag label="#HCI" onClick={()=>console.log("aa")}/>
                    </div>
                </div>
                {
                    i === 3 ? null : <div className={"mt-12 h-px bg-[#dfdfdf]"}></div>
                }
            </li>
        );
    }
    return <ul>{listItems}</ul>;
}

export default Home;