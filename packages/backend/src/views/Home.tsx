import React from "react";
import { Button, Message, Modal, Space, Table } from "@arco-design/web-react";
import axios from "axios";
import EditorPage from "./MarkDownEditor";

interface MarkDownHandleProps {
  onCancel?: () => void;

  onOk?(e: string): void;
}

class Home extends React.Component {
  state = {
    columns: [
      {
        title: "ID",
        dataIndex: "id",
        width: 50,
      },
      {
        title: "标题",
        dataIndex: "title",
        ellipsis: true,
        width: 400,
      },
      {
        title: "内容",
        dataIndex: "content",
        ellipsis: true,
      },
    ],
    data: [],
    visible: false,
    content: "",
    title: "",
  };

  async componentDidMount() {
    try {
      let articles = await axios.get("http://localhost:3001/article");
      if (articles.data.data) {
        this.setState({ data: articles.data.data });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async onSubmit(e: string) {
    let res = await axios.post("http://localhost:3001/article", {
      title: e,
      content: this.state.content,
    });
    if (res.data.data) {
      Message.success("添加成功");
    }
  }

  render() {
    return (
      <div>
        <Space className={"pb-5"} size={"medium"}>
          <Button
            type="primary"
            onClick={() => this.setState({ visible: true })}
          >
            Primary
          </Button>
          <Button>Default</Button>
          <Button>Default</Button>
          <Button>Default</Button>
        </Space>
        <Table
          rowKey={"id"}
          columns={this.state.columns}
          data={this.state.data}
          rowSelection={{
            type: "checkbox",
            onChange: () => {},
          }}
        />
        <Modal
          title={
            <EHeader
              onOk={(e) => {
                this.setState({ visible: false});
                this.onSubmit(e);
              }}
              onCancel={() => this.setState({ visible: false })}
            />
          }
          visible={this.state.visible}
          autoFocus={false}
          closable={false}
          focusLock={true}
          footer={null}
          className={"!w-screen h-full p-0"}
        >
          <EditorPage
            content={this.state.content}
            onChange={(e) => this.setState({ content: e })}
          />
        </Modal>
      </div>
    );
  }
}

function EHeader(props: MarkDownHandleProps) {
  const { onCancel, onOk } = props;
  const [title, setTitle] = React.useState("");
  return (
    <div className={"flex justify-between"}>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="输入标题"
        className={"text-2xl"}
      />
      <div className={"flex-auto"}></div>
      <Button type={"primary"} onClick={() => onOk?.(title)}>
        发布
      </Button>
      <Button className={"ml-4"} onClick={onCancel}>
        取消
      </Button>
    </div>
  );
}

export default Home;
