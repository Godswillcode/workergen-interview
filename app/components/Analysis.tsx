import Image from "next/image";
import anaLysisLogo from "../images/logoAnalysis.png";
import { CiClock2 } from "react-icons/ci";
// import { IoIosArrowUp } from "react-icons/io";
import janeAvatar from ".././images/avatarJane.png";
import allanAvatar from ".././images/allanAvatar.png";
import cafeAvatar from ".././images/cafeAvatar.png";
import FKAvatar from ".././images/FK.png";
import sliderDot from ".././images/CaroselLine.png";
import { BsEnvelopeArrowUp } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Analysis = () => {
  return (
    <div className="relative text-[10px] shadow-xl mt-3 p-[1.3px] rounded-md bg-gradient-to-r from-[#9BA5FF] via-[#ce8178] var-[#62C4C3]  via-[#9BA5FF] via-[#62C4C3] to-[#ce8178] ">
      <div className="bg-white p-3 rounded-[5px] w-full h-full">
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2">
          <div className="flex items-center gap-2">
            <Image src={anaLysisLogo} alt="logo" className="h-4 w-4" />
            <h3 className="font-semibold ">
              Hi Mona, <span className="text-[#325BC9]">68% </span> of goals
              achieved and the rest can be achieved by focusing on 20 top leads.{" "}
            </h3>
          </div>

          <div className="text-[8px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center pb-1 gap-1">
                <CiClock2 /> <span>month until Q4 ends</span>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className="pr-1 -mb-10">|</span>
                  Target
                  <span className="font-semibold pl-1">$45 million</span>
                </div>

                <div>68% of target achieved</div>
              </div>
            </div>
            <div className="w-full h-[6px] flex mb-1 rounded-lg overflow-hidden bg-gray-200">
              <div className="bg-[#A4C6A6]" style={{ width: "25%" }}></div>
              <div className="bg-[#85B4F3]" style={{ width: "8%" }}></div>
              <div className="bg-[#E0ABFE]" style={{ width: "8%" }}></div>
              <div className="bg-[#FEC983]" style={{ width: "5%" }}></div>
              <div className="bg-[#F0EFF8]" style={{ width: "54%" }}></div>
            </div>
            <div className="flex md:flex-row flex-col md:items-start gap-2">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-[#A4C6A6] rounded-full" />
                <span>Won $18m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-[#85B4F3] rounded-full" />
                <span>Committed $8m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-[#E0ABFE] rounded-full" />
                <span>Best case $7m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-[#FEC983] rounded-full" />
                <span>Qualified $3m</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 bg-[#F0EFF8] rounded-full" />
                <span>Leads $75m</span>
              </div>
            </div>

            {/* <IoIosArrowUp /> */}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 mt-5">
          <div className="col-span-2">
            <h4 className="pb-3">
              Copilot has pinpointed 20 key leads that shows the string purchase
              intent and are actively engaging. These leads needs your focus.{" "}
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div className="border shadow-sm p-2 rounded-md">
                <div className="flex items-center gap-2">
                  <Image
                    src={janeAvatar}
                    alt="jane avatar"
                    className="h-8 w-8"
                  />
                  <div>
                    <h4 className="font-semibold">Jane Reyes</h4>
                    <p className="text-gray-500">COO - Northwind Traders</p>
                  </div>
                </div>
                <div className="bg-[#EFEFEF] mt-2 pl-2 mb-2 pb-2 rounded text-[#2C445D]">
                  <div className="flex justify-end">
                    <div className="bg-white -mr-1 h-5 w-5 rounded-full flex items-center justify-center">
                      <BsStars color="#325BC9" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2 -mt-3">
                    <BsEnvelopeArrowUp size={14} />
                    <span className="font-semibold">
                      Engage with jane Reyes
                    </span>
                  </div>
                  <p>
                    Jane may be interested in upgrading expresso machine for her
                    in store coffe shops.
                  </p>
                </div>
                <p>Expand business . High buying intent</p>
              </div>

              <div className="border shadow-sm p-2 rounded-md">
                <div className="flex items-center gap-2">
                  <Image src={allanAvatar} alt="avatar" className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">Allan Munger</h4>
                    <p className="text-gray-500">
                      Head of Real Estate development . Contoso Coffee
                    </p>
                  </div>
                </div>
                <div className="bg-[#EFEFEF] mt-2 pl-2 mb-2 pb-2 rounded text-[#2C445D]">
                  <div className="flex justify-end">
                    <div className="bg-white -mr-1 h-5 w-5 rounded-full flex items-center justify-center">
                      <BsStars color="#325BC9" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-2 -mt-3">
                    <CgCalendarDates size={14} />
                    <span className="font-semibold">
                      Prepare for meeting with Allan
                    </span>
                  </div>
                  <div className="flex justify-between gap-1">
                    <p>
                      Prepare for high paying intent meeting Copilot schedule
                      for 2 PM regarding upgrading service contract.
                    </p>
                    <div className="flex justify-center">
                      <MdOutlineKeyboardArrowRight
                        color="#325BC9"
                        className="bg-white -mr-1 h-5 w-5 rounded-full flex items-center justify-center"
                      />
                    </div>
                  </div>
                </div>
                <p>Upcoming coming . Due today</p>
              </div>
            </div>

            <div className="flex justify-center mt-9">
              <Image src={sliderDot} alt="dots" height={7} />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="border" />
            <div className="flex-1">
              <h4 className="pb-3">Other key activities</h4>

              <div className="border rounded px-2 py-[5px]">
                <div className="flex items-center gap-2">
                  <Image src={cafeAvatar} alt="avatar" className="h-8 w-8" />
                  <div>
                    <h4 className="font-semibold">
                      Cafe A100 for Woodland Bank
                    </h4>
                    <p className="text-gray-500">
                      Woodland Bank . $280,000 . 8 days close
                    </p>
                  </div>
                </div>

                <div className="bg-[#EFEFEF] flex justify-between items-center mt-2 pl-2  mb-2 rounded text-[#2C445D]">
                  <div className="flex items-center gap-2">
                    <BsEnvelopeArrowUp size={13} />
                    <span className="font-semibold">
                      Review draft and reply to Chris Naido
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <BsStars
                      color="#325BC9"
                      className="bg-white p-1 -mr-1 h-6 w-6 rounded-full flex items-center justify-center"
                    />
                  </div>
                </div>
              </div>

              {/* last */}

              <div className="border rounded px-2 py-[5px] mt-2 mb-2">
                <div className="flex items-center gap-2">
                  <Image src={FKAvatar} alt="jane avatar" className="h-7 w-7" />
                  <div>
                    <h4 className="font-semibold">
                      Partnership opportunity for Fabrikam
                    </h4>
                    <p className="text-gray-500">
                      Fabrikam's . $5,000,000 . 12 days close
                    </p>
                  </div>
                </div>

                <div className="bg-[#EFEFEF] flex justify-between items-center mt-2 pl-2  mb-2 rounded text-[#2C445D]">
                  <div className="flex items-center gap-2">
                    <CgCalendarDates size={13} />
                    <span className="font-semibold">
                      Prepare for me Fabrikam's Key stakeholder meeting
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <BsStars
                      color="#325BC9"
                      className="bg-white p-1 -mr-1 h-6 w-6 rounded-full flex items-center justify-center"
                    />
                  </div>
                </div>
              </div>

              <span className="text-[#325BC9] hover:text-black cursor-pointer font-semibold">
                Show all key activities
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
