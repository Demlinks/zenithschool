import React, { useState } from "react";
import CircularProgressBar from "../../../components/dashboard/CircularProgressBar";
import {
  PathDown,
  PathRight,
  PathUp,
} from "../../../assets/images/dashboard/students";
import GuardianSVG from "../../../components/svg/GuardianSVG";
import { Link, useNavigate } from "react-router-dom";

const StudentAdminOverview: React.FC = () => {
  const [studentDropDown, setStudentDropDown] = useState<string>("");
  const navigate = useNavigate();
  return (
    <div className="student-overview">
      <div className="student-overview-header">Students</div>
      <div className="student-overview-class-container">
        <div
          className={`student-overview-class ${
            studentDropDown === "Crèche"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(studentDropDown === "Crèche" ? "" : "Crèche"),
              !window.matchMedia("(min-width: 768px)").matches && navigate("creche")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Crèche"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Crèche
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Crèche" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Crèche" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px]  static md:relative ${
              studentDropDown === "Crèche" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"creche"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "K.G 1"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(studentDropDown === "K.G 1" ? "" : "K.G 1"),
              !window.matchMedia("(min-width: 768px)").matches && navigate("k.g 1")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "K.G 1"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              K.G 1
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "K.G 1" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "K.G 1" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "K.G 1" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"k.g 1"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className=" max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "K.G 2"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(studentDropDown === "K.G 2" ? "" : "K.G 2"),
              !window.matchMedia("(min-width: 768px)").matches && navigate("k.g 2")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "K.G 2"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              K.G 2
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "K.G 2" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "K.G 2" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "K.G 2" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"k.g 2"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Nursery 1"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Nursery 1" ? "" : "Nursery 1"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("nursery 1")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Nursery 1"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Nursery 1
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Nursery 1" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Nursery 1" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Nursery 1" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"nursery 1"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Nursery 2"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Nursery 2" ? "" : "Nursery 2"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("nursery 2")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Nursery 2"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Nursery 2
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Nursery 2" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Nursery 2" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Nursery 2" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"nursery 2"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Primary 1"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Primary 1" ? "" : "Primary 1"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("primary 1")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Primary 1"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Primary 1
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Primary 1" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Primary 1" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Primary 1" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"primary 1"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Primary 2"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Primary 2" ? "" : "Primary 2"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("primary 2")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Primary 2"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Primary 2
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Primary 2" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Primary 2" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Primary 2" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"primary 2"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Primary 3"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Primary 3" ? "" : "Primary 3"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("primary 3")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Primary 3"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Primary 3
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Primary 3" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Primary 3" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Primary 3" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"primary 3"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Primary 4"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Primary 4" ? "" : "Primary 4"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("primary 4")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Primary 4"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Primary 4
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Primary 4" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Primary 4" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Primary 4" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"primary 4"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`student-overview-class ${
            studentDropDown === "Primary 5"
              ? "max-h-[72px] md:max-h-full"
              : "max-h-[72px]"
          }`}
        >
          <button
            onClick={() => {
              setStudentDropDown(
                studentDropDown === "Primary 5" ? "" : "Primary 5"
              ),
              !window.matchMedia("(min-width: 768px)").matches && navigate("primary 5")
            }}
            className="min-w-full flex flex-row justify-between items-center cursor-pointer"
          >
            <div
              className={`flex-1 text-center text-lg md:text-[20px] 2xl:text-[24px] font-semibold font-Poppins ${
                studentDropDown === "Primary 5"
                  ? "text-black md:text-[#05878F]"
                  : "text-black"
              }`}
            >
              Primary 5
            </div>
            <div className="max-w-[8.24px] md:max-w-[17px] h-[15px] md:max-h-[10px]">
              <img
                src={studentDropDown === "Primary 5" ? PathUp : PathDown}
                alt={`${
                  studentDropDown === "Primary 5" ? "arrow up" : "arrow down"
                }`}
                className="hidden md:block size-full object-contain object-center"
              />
              <img
                src={PathRight}
                alt="arrow right"
                className="block md:hidden size-full object-contain object-center"
              />
            </div>
          </button>
          <div
            className={`mt-[25px] static md:relative ${
              studentDropDown === "Primary 5" ? "hidden md:block" : "hidden"
            }`}
          >
            <div className="font-Poppins text-lg font-medium flex flex-col items-center mb-[25px]">
              <div>TOTAL</div>
              <div>25</div>
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div className="mx-[30px]">
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="font-Lora font-bold text-[8px] mb-[10.23px] text-center text-[#29CC97]">
                  COMPLETED
                </div>
                <div className="font-Poppins">
                  <CircularProgressBar
                    style={{
                      percentage: 60,
                      textSize: 9.21,
                      textColor: "rgba(41,204,151,1)",
                      fontWeight: 600,
                      pathColor: "rgba(41,204,151,1)",
                      trailColor: "rgba(234,250,245)",
                      weight: 7,
                      size: 61.39,
                    }}
                  />
                </div>
              </div>
            </div>
            <Link to={"primary 5"} className="content-center right-0 bottom-[-37px] absolute p-2 rounded-full size-[30px] bg-[#05878F]">
              <div className="max-w-[15px] max-h-[12px] student-overview-class-desktop-nav">
                <GuardianSVG />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAdminOverview;
