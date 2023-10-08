import {
  Button,
  Input,
  Message,
  Modal,
  Space,
  Table,
} from "@arco-design/web-react";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Tag() {
  const [visible, setVisible] = useState(false);
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedRow, setSelectedRow] = useState<any[]>([]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      width: 50,
    },
    {
      title: "标签",
      dataIndex: "name",
      ellipsis: true,
      width: 400,
    },
    {
      title: "创建时间",
      dataIndex: "updated_at",
      ellipsis: true,
    },
  ];

  const getTags = async () => {
    try {
      let res = await axios.get("http://localhost:3001/tag");
      if (res.data.data) {
        setTags(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onRemove = async () => {
    let res = await axios.post("http://localhost:3001/tag/remove", {
      ids: selectedRow.map((item) => item.id),
    });
    if (res.data.data) {
      await getTags();
      Message.success("删除成功");
    }
  };

  const onSubmit = async () => {
    let isUpdate: boolean = selectedRow.length === 1 && selectedRow[0].id;
    if (!input) {
      Message.error("请输入标签名");
      return;
    }
    try {
      let res = isUpdate
        ? await axios.post("http://localhost:3001/tag/update", {
            id: selectedRow[0].id,
            name: input,
          })
        : await axios.post("http://localhost:3001/tag/create", {
            name: input,
          });
      if (res.data.data) {
        await getTags();
        setVisible(false);
        Message.success(isUpdate ? "修改成功" : "添加成功");
        if(isUpdate) selectedRow[0].name = input;
      }
    } catch (e: any) {
      Message.error(e.response.data.message);
    }
  };

  const onEdit = async () => {
    setVisible(true);
    setInput(selectedRow[0].name);
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div>
      <Space className={"pb-5"} size={"medium"}>
        <Button type="primary" onClick={() => setVisible(true)}>
          添加
        </Button>
        <Button onClick={onEdit} disabled={selectedRow.length !== 1}>
          编辑
        </Button>
        <Button
          disabled={!selectedRow.length}
          status="danger"
          onClick={onRemove}
        >
          删除
        </Button>
        <Button>查看</Button>
      </Space>
      <Table
        rowKey={"id"}
        columns={columns}
        data={tags}
        rowSelection={{
          type: "checkbox",
          onChange: (_e, selectedRows) => {
            setSelectedRow(selectedRows);
          },
        }}
      />
      <Modal
        title="添加标签"
        visible={visible}
        onOk={onSubmit}
        onCancel={() => setVisible(false)}
        autoFocus={false}
        focusLock={true}
      >
        <Input
          placeholder="Basic usage"
          value={input}
          onChange={(e) => setInput(e)}
        />
      </Modal>
    </div>
  );
}

export default Tag;
