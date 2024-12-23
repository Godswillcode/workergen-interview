import { Table, Input, Popover } from "antd";
import { leadList, leadProps } from "../constant/index";
import { useState } from "react";
import type { TableColumnsType } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import anaLysisLogo from "../images/logoAnalysis.png";
import { LeadDetails } from "./LeadDetails";
import { IoArrowDown } from "react-icons/io5";

export const LeadTable = () => {
  const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedLead, setSelectedLead] = useState<leadProps | undefined>()

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
      
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Name</span>
          <IoIosArrowDown className="text-gray-400 text-[14px]"  />
        </div>
      ),
      dataIndex: "name",
      key: "name",
      render: (_, val) => <Popover content={val.aboutMe} title={`About ${val.name}`}><a className="text-[#3569a9]" onClick={() => handleGetLead(val)}>{val.name}</a></Popover>,

    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Topic</span>
          <IoIosArrowDown className="text-gray-400 text-[14px]"  />
        </div>
      ),
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Status reason</span>
          <IoIosArrowDown className="text-gray-400 text-[14px]"  />
        </div>
      ),
      dataIndex: "statusReason",
      key: "statusReason",
    },
    {
      title: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>Created On</span>
          <IoArrowDown className="text-gray-400 text-[14px]" />
          <IoIosArrowDown className="text-gray-400 text-[14px]"  />
        </div>
      ),
      dataIndex: "createdOn",
      key: "createdOn",
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
        pagination={{ pageSize: 7 }}
        rowKey="id"
      />
    </div>
  );
};
