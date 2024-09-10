import { MobileHeader } from "./Profile";

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

// class timetable instance model
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

export const Timetable = ({ daysOfWeek }: { daysOfWeek: DaysOfWeek }) => {
  return (
    <div className="timetable-section-1">
      <div className="timetable">
        <div className="flex flex-col items-center justify-center gap-0.5 md:gap-3">
          <h4 className="text-clr1 timetable-header block md:hidden">
            First Term
          </h4>

          <div className="timetable-header-1-box">
            <h4 className="timetable-header-1">JSS 1A Timetable</h4>
          </div>

          <div className="timetable-wrapper-1">
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

const TimetablesGuardian = () => {
  return (
    <section className=" bg-[linear-gradient(259.46deg,_#05878F_10.76%,_rgba(5,_135,_143,_1)_107.57%)] md:bg-none">
      <MobileHeader title="Timetable" subtitle="JSS 1A" />

      <div className="rounded-t-[30px] flex flex-col gap-0 md:gap-5 pt-[20px] md:pt-0 md:mt-[30px] md:px-[30px] bg-white">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <Timetable key={index} daysOfWeek={daysOfWeek} />
          ))}
      </div>
    </section>
  );
};

export default TimetablesGuardian;
