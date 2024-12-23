import { Table } from "antd";
import { leadList, leadProps } from "../constant/index";
import { useState } from "react";
import type { TableColumnsType } from "antd";
import dayjs from "dayjs";
import { IoIosArrowDown } from "react-icons/io";

export const LeadTable = () => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);

  const topicFilters = Array.from(
    new Set(leadList.map((item) => item.topic))
  ).map((topic) => ({
    text: topic,
    value: topic,
  }));

  const columns: TableColumnsType<leadProps> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="text-[#3569a9]">{text}</a>,
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Topic</span>
          <IoIosArrowDown style={{ fontSize: "14px", cursor: "pointer" }} />
        </div>
      ),
      dataIndex: "topic",
      key: "topic",
      filters: topicFilters,
      onFilter: (value, record) =>
        (record.topic || "").indexOf(value as string) === 0,
      filterIcon: false,
    },
    {
      title: "Status reason",
      dataIndex: "statusReason",
      key: "statusReason",
    },
    {
      title: "Created On",
      dataIndex: "createdOn",
      key: "createdOn",
      defaultSortOrder: "descend",
      sorter: (a, b) =>
        dayjs(a.createdOn).valueOf() - dayjs(b.createdOn).valueOf(),
    },
  ];

  const rowSelection = {
    selectedRowKeys: selectedRows,
    onChange: (selectedRowKeys: React.Key[]) => {
      console.log("Selected:", selectedRowKeys);
      setSelectedRows(selectedRowKeys);
    },
  };

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        className="shadow-sm mt-7"
        columns={columns}
        dataSource={leadList || []}
        scroll={{ x: 500 }}
        pagination={{ pageSize: 10 }}
        rowKey="id"
      />
    </div>
  );
};
