import React, { useState } from "react";
import CircularProgressBar from "../dashboard/CircularProgressBar";
import StudentChat from "../dashboard/StudentChart";
import { PathDown, PathUp } from "../../assets/images/dashboard/students";

const TuitionFinance: React.FC = () => {
  const [totalTuitionDropDown, setTotalTuitionDropDown] =
    useState<boolean>(true);
  return (
    <div
      className={`tuition-finance ${
        totalTuitionDropDown
          ? "max-h-full md:max-h-full rounded-none mx-0 bg-white"
          : "min-h-[60px] md:max-h-full rounded-[20px] mx-[30px] md:rounded-none bg-[#ECFEFF] md:bg-white"
      }`}
    >
      <button
        onClick={() => {
          setTotalTuitionDropDown(!totalTuitionDropDown),
            window.matchMedia("(min-width: 768px)").matches &&
              setTotalTuitionDropDown(true);
        }}
        className={`min-w-full flex md:hidden flex-row justify-between items-center cursor-pointer font-Lora font-bold text-[15px] leading-[19.2px] text-center ${totalTuitionDropDown? "px-[51px] md:px-0" : "px-[21px] md:px-0"}`}
      >
        <div
          className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
            totalTuitionDropDown ? "text-black md:text-[#05878F]" : "text-black"
          }`}
        >
          Total Tuiton
        </div>
        <div className="max-w-[17px] h-[15px] md:max-h-[10px]">
          <img
            src={totalTuitionDropDown ? PathUp : PathDown}
            alt={`${totalTuitionDropDown ? "arrow up" : "arrow down"}`}
            className="block md:hidden size-full object-contain object-center"
          />
        </div>
      </button>
      {/* <span className="block md:hidden">Tuition</span> */}

      <div
        className={`tuition-finance-status ${
          totalTuitionDropDown ? "flex" : "hidden"
        }`}
      >
        <div className="tuition-finance-status-one">
          <div className="text-center text-[15px] leading-[22.5px] font-Poppins font-medium mr-[15px]">
            <div className="mb-[15px] md:mb-[20px] text-[rgba(41,204,151,1)]">
              Completed
            </div>
            <div>
              <CircularProgressBar
                style={{
                  percentage: 60,
                  textSize: 18,
                  textColor: "rgba(41,204,151,1)",
                  fontWeight: 600,
                  pathColor: "rgba(41,204,151,1)",
                  trailColor: "rgba(234,250,245)",
                  weight: 13,
                  size: 120,
                }}
              />
            </div>
          </div>
          <div className="text-center text-[15px] leading-[22.5px] font-Poppins font-medium mx-[15px]">
            <div className="text-center mb-[15px] md:mb-[20px] text-[#98654F]">
              Incomplete
            </div>
            <div>
              <CircularProgressBar
                style={{
                  percentage: 40,
                  textSize: 18,
                  textColor: "#98654F",
                  fontWeight: 600,
                  pathColor: "#98654F",
                  trailColor: "#F5F0ED",
                  weight: 13,
                  size: 120,
                }}
              />
            </div>
          </div>

          <div className="text-center text-[15px] leading-[22.5px] font-Poppins font-medium ml-[15px]">
            <div className="text-center mb-[15px] md:mb-[20px] text-[#FF2E2E]">
              Void
            </div>
            <div>
              <CircularProgressBar
                style={{
                  percentage: 0,
                  textSize: 18,
                  textColor: "#FF2E2E",
                  fontWeight: 600,
                  pathColor: "#FF2E2E",
                  trailColor: "#FFEAEA",
                  weight: 13,
                  size: 120,
                }}
              />
            </div>
          </div>
        </div>
        <div className="tuition-finance-status-two">
          <div className="w-[56.11%] flex-1 flex flex-col justify-end mr-[10px] pt-[16px] pb-0 px-[15px] md:pt-[42px] md:pb-[34px] md:px-[30px] shadow-none md:shadow-[0px_1px_25px_0px_rgba(56,_159,_166,_0.1)] rounded-[15px] shrink-0">
            <div className="capitalize md:uppercase text-center text-[15px] leading-[19.2px] font-Lora font-bold text-black mb-[15px] md:mb-[17px] whitespace-nowrap">
              Number Of Students
            </div>

            <StudentChat />
          </div>
          <div className="flex flex-col items-center w-[40.54%] ml-[10px] pt-[16px] pb-0 px-[15px] md:py-[42px] md:px-[41px] shadow-none md:shadow-[0px_1px_25px_0px_rgba(56,_159,_166,_0.1)] rounded-[15px]">
            <div className="capitalize md:uppercase mb-[15px] md:mb-[42px] text-center text-[15px] leading-[19.2px] font-Lora font-bold text-black">
              Started Pack
            </div>
            <div>
              <CircularProgressBar
                style={{
                  percentage: 70,
                  textSize: 18,
                  textColor: "rgba(2,73,182,1)",
                  fontWeight: 600,
                  pathColor: "rgba(2,73,182,1)",
                  trailColor: "rgba(199,212,255,1)",
                  weight: 20,
                  size: 120,
                }}
              />
            </div>
            <div className="flex flex-row justify-between mt-[10px] md:mt-[26px] text-[13px] leading-[19.5px] font-Poppins font-medium text-black">
              <div className="flex flex-row justify-between mr-[6.5px]">
                <div className="rounded-full bg-[rgba(2,73,182,1)] size-[14px] mr-[5px]"></div>
                <div>Collected</div>
              </div>
              <div className="flex flex-row justify-between ml-[6.5px]">
                <div className="rounded-full bg-[rgba(199,212,255,1)] size-[14px] mr-[5px]"></div>
                <div>Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionFinance;
