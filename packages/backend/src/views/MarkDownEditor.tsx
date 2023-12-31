import React, { useState } from "react";
import Vditor from "vditor";
import "vditor/dist/index.css";
import "../css/editor.css";

interface MarkDownProps {
  onChange?(value: string): void;

  content?: string;
}


const MarkDownEditor = (props: MarkDownProps) => {
  const { onChange, content } = props;
  const [value] = useState(content || "");
  React.useEffect(() => {
    const vditor = new Vditor("vditor", {
      height: "calc(100vh - 64px)",
      after: () => {
        vditor.setValue(value);
      },
      blur(value: string) {
        onChange?.(value);
      },
      counter:{
        enable:true,
      },
    });
  }, []);
  return <div id="vditor" className="vditor" />;
};

export default MarkDownEditor;
