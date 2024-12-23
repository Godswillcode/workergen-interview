import { Table, Input } from "antd";
import { leadList, leadProps } from "../constant/index";
import { useState } from "react";
import type { TableColumnsType } from "antd";
import dayjs from "dayjs";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import anaLysisLogo from "../images/logoAnalysis.png";
import { LeadDetails } from "./LeadDetails";

export const LeadTable = () => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedLead, setSelectedLead] = useState<leadProps | undefined>()

  //   const topicFilters = Array.from(
  //     new Set(leadList.map((item) => item.topic))
  //   ).map((topic) => ({
  //     text: topic,
  //     value: topic,
  //   }));

  const handleGetLead = (lead: leadProps) => {
    setOpenDetails(true);
    setSelectedLead(lead);
  };

  const searchFilteredData = leadList.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const columns: TableColumnsType<leadProps> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, val) => <a className="text-[#3569a9]" onClick={() => setSelectedLead(val)}>{val.name}</a>,

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
      //   filters: topicFilters,
      //   onFilter: (value, record) =>
      //     (record.topic || "").indexOf(value as string) === 0,
      //   filterIcon: false,
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
      defaultSortOrder: "ascend",
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
      <LeadDetails
      data={selectedLead}
        open={openDetails}
        handleClose={() => setOpenDetails(false)}
      />

      <div
        style={{ width: "20.2rem" }}
        className="relative text-[12px] mt-5 p-[1.3px] rounded-md bg-gradient-to-r from-[#9BA5FF] via-[#ce8178] to-[#62C4C3]"
      >
        <div className="bg-white rounded-md">
          <Input
            placeholder="Sort, filter and search with Copilot"
            allowClear
            style={{ width: "20rem" }}
            suffix={<Image src={anaLysisLogo} alt="logo" className="h-4 w-4" />}
            //   onPressEnter={(e) => setSearchTerm(e.currentTarget.value)}

            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-[12px] "
          />
        </div>
      </div>
      <Table
        rowSelection={rowSelection}
        className="shadow-sm mt-1"
        columns={columns}
        dataSource={searchFilteredData || []}
        scroll={{ x: 500 }}
        pagination={{ pageSize: 10 }}
        rowKey="id"
      />
    </div>
  );
};
