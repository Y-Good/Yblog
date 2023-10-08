import Icon from "./Icon";
import Icons from "../config/icons";
import React, { ReactElement, useState } from "react";

interface PaginationProps {
  total: number;
  defaultCurrent?: number;
  pageSize?: number;
  onChange?: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { total, defaultCurrent, onChange, pageSize } = props;
  const [current, setCurrent] = useState(defaultCurrent || 1);
  const pages = Math.ceil(total / (pageSize || 1));
  const style: string =
    "w-8 h-8 rounded border flex items-center justify-center pb-1";

  const spanItems: ReactElement[] = [];

  for (let i = 0; i < pages; i++) {
    spanItems.push(
      <span
        key={i}
        className={`cursor-pointer ${
          i + 1 === current ? "text-[#FFBA9D]" : "text-[#777777]"
        }`}
        onClick={() => {
          onChange?.(i + 1);
          setCurrent(i + 1);
        }}
      >
        {i + 1}
      </span>,
    );
  }

  return (
    <div className={"mt-24 flex items-center space-x-6"}>
      <div
        className={
          style +
          " " +
          (current === 1 ? "bg-[#f4f4f4]" : "border-[#474747] cursor-pointer")
        }
        onClick={() => {
          if (current === 1) return;
          setCurrent(current - 1);
          onChange?.(current - 1);
        }}
      >
        <Icon name={Icons.left} size={12} />
      </div>
      <div className={`flex items-center space-x-4 text-base`}>{spanItems}</div>
      <div
        className={
          style +
          " " +
          (current === pages
            ? "bg-[#f4f4f4]"
            : "border-[#474747] cursor-pointer")
        }
        onClick={() => {
          if (current === pages) return;
          setCurrent(current + 1);
          onChange?.(current + 1);
        }}
      >
        <Icon name={Icons.right} size={12} />
      </div>
    </div>
  );
}

export default Pagination;
