import React from "react";
import { Paper } from "../../assets/images";
import {
  ArrowDownMobile,
  TotalStaff,
  TotalStudents,
  TotalSubjects,
} from "../../assets/images/dashboard/overview";
import CalendarComponent from "../../components/dashboard/CalendarComponent";

const events = [
  {
    title: "Cultural Day 2022",
    start: new Date(2024, 7, 20),
    end: new Date(2024, 7, 20),
  },
  {
    title: "Democracy Day 2022",
    start: new Date(2024, 7, 12),
    end: new Date(2024, 7, 12),
  },
  {
    title: "Demo Day 2024",
    start: new Date(2024, 7, 13),
    end: new Date(2024, 7, 13),
  },
  {
    title: "Teacher's Workshop",
    start: new Date(2024, 7, 15),
    end: new Date(2024, 7, 15),
  },
  {
    title: "Parent-Teacher Conference",
    start: new Date(2024, 8, 1),
    end: new Date(2024, 8, 1),
  },
  {
    title: "School Anniversary",
    start: new Date(2024, 8, 5),
    end: new Date(2024, 8, 5),
  },
  {
    title: "Midterm Break",
    start: new Date(2024, 8, 8),
    end: new Date(2024, 8, 12),
  },
  {
    title: "Science Fair",
    start: new Date(2024, 8, 18),
    end: new Date(2024, 8, 18),
  },
  {
    title: "Sports Day",
    start: new Date(2024, 8, 25),
    end: new Date(2024, 8, 25),
  },
  {
    title: "Winter Break",
    start: new Date(2024, 11, 20),
    end: new Date(2025, 0, 4), // January 4, 2025
  },
  {
    title: "Art Exhibition",
    start: new Date(2025, 0, 10),
    end: new Date(2025, 0, 10),
  },
  {
    title: "Spring Concert",
    start: new Date(2025, 2, 5),
    end: new Date(2025, 2, 5),
  },
  {
    title: "Graduation Day",
    start: new Date(2025, 5, 15),
    end: new Date(2025, 5, 15),
  },
  {
    title: "Summer Camp",
    start: new Date(2025, 6, 1),
    end: new Date(2025, 6, 15),
  },

  // Add other events...
];

const daysOfWeek: DaysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
];

const classPeriods: ClassPeriod[] = [
  {
    "8:20 am -9:00 am": [
      "Mathematics",
      "Mathematics",
      "SPORTS",
      "Mathematics",
      "Mathematics",
    ],
  },
  {
    "9:00 am -9:40 am": [
      "Literature",
      "Literature",
      "SPORTS",
      "Literature",
      "Literature",
    ],
  },
  {
    "9:40 am -10:20 am": [
      "English",
      "English",
      "English",
      "English",
      "English",
    ],
  },
  {
    "10:20 am -10:50 am": [null, null, "LONG BREAK", null, null],
  },
  {
    "10:50 am -11:30 am": [
      "Social Studies",
      "Social Studies",
      "Social Studies",
      "Social Studies",
      "Social Studies",
    ],
  },
  {
    "11:30 am -12:10 pm": [
      "Civic Education",
      "Civic Education",
      "Civic Education",
      "Civic Education",
      "Civic Education",
    ],
  },
  {
    "12:10 pm -12:50 pm": ["Agric", "Agric", "Agric", "Agric", "Agric"],
  },
  {
    "12:50 pm -1:00 pm": [null, null, "SHORT BREAK", null, null],
  },
  {
    "1:00 pm -1:40 pm": [
      "Fine Art",
      "Fine Art",
      "Fine Art",
      "Fine Art",
      "CLUB AND SOCIETY",
    ],
  },
  {
    "8:20 am -9:00 am": [
      "French",
      "French",
      "French",
      "French",
      "CLUB AND SOCIETY",
    ],
  },
];

// const classTimetables: ClassTimetable[] = [
//   {
//     'JSS 1 A': [
//       { 'First Term': classPeriods },
//       { 'Second Term': classPeriods },
//       { 'Third Term': classPeriods },
//     ],
//   },
//   {
//     'JSS 1 A': [
//       { 'First Term': classPeriods },
//       { 'Second Term': classPeriods },
//       { 'Third Term': classPeriods },
//     ],
//   },
//   {
//     'JSS 1 A': [
//       { 'First Term': classPeriods },
//       { 'Second Term': classPeriods },
//       { 'Third Term': classPeriods },
//     ],
//   },
// ];

const TimetableSection = ({ daysOfWeek }: { daysOfWeek: DaysOfWeek }) => {
  return (
    <div className="timetable-section">
      <div className="timetable">
        <h3 className="timetable-header">
          <span className="hidden md:inline-block">Class</span> Timetable
        </h3>

        <div className="flex flex-col gap-3">
          <h4 className="text-clr1 timetable-header block md:hidden">JSS 1A</h4>

          <div className="timetable-wrapper">
            <table className="w-full bg-white">
              <thead>
                <tr>
                  <th className="table-header">Time</th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="table-header">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {classPeriods.map((period, index) => {
                  const [time] = Object.keys(period);
                  const [subjects] = Object.values(period);

                  return (
                    <tr key={index}>
                      <td className="table-data border-[0.1px] border-black">
                        {time}
                      </td>
                      {subjects.map((subject: string | null, index: number) => (
                        <td
                          key={index}
                          className={`table-data ${
                            subject && !subject.includes("BREAK")
                              ? "border-[0.1px] border-black"
                              : "font-bold"
                          }`}
                        >
                          {subject}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Overview: React.FC = () => {
  return (
    <>
      {/* mobile screen header */}
      <div className="overview-m-header">
        <div className="flex flex-col items-center font-Lora">
          <div className="flex flex-row justify-center items-center w-full mb-[20px] ml:mb-[22px]">
            {/* <div className="max-w-[22px] max-h-[20px] ml:max-w-[24px] ml:max-h-[22px]">
              <img
                src={MenuIcon}
                alt="logo"
                className="size-full object-center object-contain"
              />
            </div> */}
            <div className="size-[55px] ml:size-[60px] py-[11px] px-[12.5px] bg-white md:bg-[#ECFEFF] rounded-full flex justify-center items-center">
              <img
                src={Paper}
                alt="logo"
                className="max-w-[21.7px] max-h-[26.14px] object-center"
              />
            </div>
            {/* <div className="w-[28px] h-[26px] ml:w-[30px] ml:h-[28px] dashboard-m-search">
              <SearchSVG />
            </div> */}
          </div>
          <div className="text-lg leading-[23.04px] font-bold text-white">
            Zenith School
          </div>
        </div>
        <div className="absolute bottom-[-22px] right-[15.22%] left-[15.22%] bg-[#FFFF] flex flex-row justify-between items-center font-Poppins py-[8px] px-[14px] ml:px-[16px] rounded-[20px] shadow-[0px_8px_26px_0px_rgba(4,_106,_126,_0.17)]">
          <div className="text-[13px] ml:text-[15px] text-center leading-[22.5px] font-medium 2xl:font-bold mr-[11px] text-[#05878F]">
            2023/2024 Acad<span className="hidden ml:inline">emic</span> Session
          </div>
          <div className="max-w-[13px] max-h-[13px] ml:max-w-[15px] ml:max-h-[15px]">
            <img
              src={ArrowDownMobile}
              alt="dropdown"
              className="size-full object-center object-contain"
            />
          </div>
        </div>
      </div>
      {/* mobile screen header */}

      <div className="overview-body">
        <div className="mx-0 md:mx-[10px] lg:mx-[15px] xl:mx-[20px] 2xl:mx-[30px] basis-full xl:basis-[61.01%]">
          {/* overview total */}
          <div className="overview-total">
            <div className="overview-total-students bg-[rgba(236,_254,_255,_1)] ml-[0px] md:ml-[15px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[30px]">
              <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
                <img
                  src={TotalStudents}
                  alt="Total Students"
                  className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
                  Total Students
                </div>
                <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[rgba(68,_191,_103,_1)]">
                  1250
                </div>
              </div>
            </div>
            <div className="overview-total-students bg-[#FBEDD9] mx-[30px] md:mx-[25px]">
              <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
                <img
                  src={TotalStaff}
                  alt="Total Students"
                  className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
                  Total Staff
                </div>
                <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[#FFA427]">
                  105
                </div>
              </div>
            </div>
            <div className="overview-total-students mr-[0px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px] 2xl:mr-[30px] bg-[#C7D4FF]">
              <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
                <img
                  src={TotalSubjects}
                  alt="Total Students"
                  className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
                  Total Subjects
                </div>
                <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[#2C4084]">
                  25
                </div>
              </div>
            </div>
          </div>
          {/* overview total */}

          {/* mobile calender */}
          <div className="overview-calendar-mobile">
            <CalendarComponent />
            <hr className="mb-[17px] max-w-[200px] mx-auto bg-[rgba(196,196,196,1)]" />
            <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[20px] md:mb-[30px] lg:mb-[36px] xl:mb-[42px] text-center xl:text-left">
              Upcoming Events
            </h2>
            {events.slice(0, 2).map((event, index) => (
              <div
                key={index}
                className="flex flex-row items-center mb-[25px] md:mb-[35px] xl:mb-[40px]"
              >
                <div className="mr-[20px] md:mr-[30px] px-[8px] py-[6px] md:px-[12px] md:py-[10px] bg-[rgba(253,235,187,1)] text-center rounded-[10px]">
                  <div className="text-[18px] leading-none font-bold font-Lora">
                    {event.start.toUTCString().split(" ")[1]}
                  </div>
                  <div className="text-[11px] font-normal">
                    {event.start.toUTCString().split(" ")[2]}
                  </div>
                </div>
                <div className=" font-Poppins font-medium text-[13px]">
                  {event.title}
                </div>
              </div>
            ))}
          </div>
          {/* mobile calender */}

          <TimetableSection daysOfWeek={daysOfWeek} />

          {/* <div>Number of Students and Starter Pack</div> */}
        </div>

        {/* large screen right-side - desktop calender */}
        <div className="overview-calendar">
          <>
            <CalendarComponent events={events} />
          </>
          <hr className="mb-[40px] max-w-[200px] mx-auto bg-[rgba(196,196,196,1)]" />
          <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[10px] md:mb-[30px] lg:mb-[36px] xl:mb-[42px]">
            Upcoming Events
          </h2>
          {events.slice(0, 4).map((event, index) => (
            <div
              key={index}
              className="flex flex-row items-center mb-[30px] md:mb-[35px] xl:mb-[40px]"
            >
              <div className="mr-[20px] md:mr-[30px] px-[8px] py-[6px] md:px-[12px] md:py-[10px] bg-[rgba(253,235,187,1)] text-center rounded-[10px]">
                <div className="text-[18px] leading-none font-bold font-Lora">
                  {event.start.toUTCString().split(" ")[1]}
                </div>
                <div className="text-[11px] font-normal">
                  {event.start.toUTCString().split(" ")[2]}
                </div>
              </div>
              <div className=" font-Poppins font-medium">{event.title}</div>
            </div>
          ))}
        </div>
        {/* large screen right-side - desktop calender */}
      </div>
    </>
  );
};

export default Overview;
