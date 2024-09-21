import React, { memo } from "react";

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday"];

const classPeriods = [
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
const TimetableSection: React.FC = () => {
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
                      {subjects.map((subject: string, index: number) => (
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

export default memo(TimetableSection);
