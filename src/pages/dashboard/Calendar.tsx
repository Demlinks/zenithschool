import React from "react";
import { Add, FilterMobile } from "../../assets/images/dashboard/students";
import { Pencil } from "../../assets/images/dashboard/calendar";
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
const Calendar: React.FC = () => {
  // const [studentDropDown, setStudentDropDown] = useState<string>("");
  // const navigate = useNavigate();
  return (
    <div className="calendar">
      <div className="calendar-header">Calendar</div>
      <div className="calendar-body-container">
        <div className="calendar-body-container-header">
          <div className="font-Lora font-bold mr-5">
            <div className="text-[15px] leading-[19.2px] text-[#05878F]">
              TODAY
            </div>
            <div className="text-[15px] text-center leading-[19.2px] font-bold flex flex-col md:flex-row-reverse">
              <div>{new Date().getDate()}</div>
              <div className="md:mr-[6px]">{Date().split(" ")[1]}</div>
            </div>
          </div>
          <div className="flex flex-row self-center">
            <button className="mr-[10px] lg:mr-[15px] xl:mr-[20px]">
              <div className="w-[19.54px] h-auto mr-[5px] my-auto">
                <img
                  src={FilterMobile}
                  alt="filter"
                  className="object-contain object-center size-full"
                />
              </div>
              <div className=" font-Lora font-bold text-[15px] leading-[19.2px]">
                Filter
              </div>
            </button>
            <button>
              <div className="max-w-[15px] h-auto mr-[5px]">
                <img
                  src={Add}
                  alt="add"
                  className="object-contain object-center size-full"
                />
              </div>
              <div className=" font-Lora font-bold text-[15px] leading-[19.2px]">
                Add
              </div>
            </button>
            <button className="shadow-none hidden md:flex flex-row ml-[10px] lg:ml-[15px] xl:ml-[20px] self-center items-center">
              <div className="max-w-[13px] h-auto mr-[8px]">
                <img
                  src={Pencil}
                  alt="add"
                  className="object-contain object-center size-full"
                />
              </div>
              <div className=" font-Poppins font-normal text-[14px] leading-[19.5px] text-[#05878F]">
                Edit
              </div>
            </button>
          </div>
        </div>
        <div className="calendar-body-content">
          <div className="calendar-body-content-calendar">
            <>
              <CalendarComponent events={events} />
            </>
          </div>
          <div className="calendar-body-content-upcoming">
            <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[10px] md:mb-[30px] lg:mb-[36px] xl:mb-[40px] text-center">
              Upcoming Events
            </h2>
            {events.filter(event => event.start.getTime() >= Date.now()).map((event, index) => (
              <div
                key={index}
                className="date-container flex flex-row items-center mb-[30px] md:mb-[35px] xl:mb-[40px] gap-[20px] md:gap-[30px]"
              >
                <div className="upcoming-date">
                  <div className="text-[18px] leading-none font-bold font-Lora">
                    {event.start.toUTCString().split(" ")[1]}
                  </div>
                  <div className="text-[11px] font-normal">
                    {event.start.toUTCString().split(" ")[2]}
                  </div>
                </div>
                <div className=" font-Poppins font-medium text-[15px]">{event.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
