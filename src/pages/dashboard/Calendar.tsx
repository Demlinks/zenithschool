import React, { useState } from "react";
import { Add, FilterMobile } from "../../assets/images/dashboard/students";
import { Pencil } from "../../assets/images/dashboard/calendar";
import CalendarComponent from "../../components/dashboard/CalendarComponent";
import { useQuery } from "@tanstack/react-query";
import { getCalender, useCreateCalender } from "../../services/api/staffApis";
import Loader from "../../shared/Loader";
import SlidePanel from "../../shared/SlidePanel";
import AddCalender from "./AddCalender";
import { IEvent } from "../../types/user.type";
// const events = [];

export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
const Calendar: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["calender"],
    queryFn: () => getCalender(),
  });

  const [isFiltering, setIsFiltering] = useState<boolean>(false);
  // CONSOLE LOGGING ERROR IF REQUEST FAILS
  isError && console.log(error);
  const calender: {
    event: string;
    date: string;
    id: number;
  }[] =
    (data &&
      data.data.data.map(
        (event: { event: string; date: string; id: number }) => ({
          ...event,
          date: formatDate(event.date), // Format the date string
        })
      )) ||
    [];
  data && console.log(calender);
  
  // const filterByGender = (gender: string) => {
  //   if (gender === "") {
  //     setFilteredData(staffs);
  //   } else {
  //     setFilteredData(staffs.filter((item) => item.gender === gender));
  //   }
  // };
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  const { mutate } = useCreateCalender();

  const handleAddStaff = (newEvent: IEvent) => {
    mutate(newEvent, {
      onSuccess: (response) => {
        const userdata = response;
        if (userdata) {
          console.log(userdata);
        }
      },
      onError: (error: Error) => {
        console.error("Login failed:", error);
        // setLoading(false);
        // Handle error (e.g., show an error message)
      },
    });
    setIsSliderOpen(false);
    console.log(newEvent);
  };

  if (isLoading) {
    return <Loader />;
  }

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
            <div className="filter">
              <button
                onClick={() => setIsFiltering(!isFiltering)}
                className="mr-[10px] lg:mr-[15px] xl:mr-[20px]"
              >
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
              <div
                className={`genders ${
                  isFiltering ? "flex flex-col" : "hidden"
                }`}
              >
                <button onClick={() => {}}>All</button>
                <button onClick={() => {}}>Male</button>
                <button onClick={() => {}}>Female</button>
              </div>
            </div>

            <button>
              <div className="max-w-[15px] h-auto mr-[5px]">
                <img
                  src={Add}
                  alt="add"
                  className="object-contain object-center size-full"
                />
              </div>
              <div
                onClick={() => setIsSliderOpen(true)}
                className="font-Lora font-bold text-[15px] leading-[19.2px]"
              >
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
              <CalendarComponent events={calender} />
            </>
          </div>
          <div className="calendar-body-content-upcoming">
            <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[10px] md:mb-[30px] lg:mb-[36px] xl:mb-[40px] text-center">
              Upcoming Events
            </h2>
            {calender
              // .filter((event) => event.date.split("-") >= Date.now())
              .map((event, index) => (
                <div
                  key={index}
                  className="date-container flex flex-row items-center mb-[30px] md:mb-[35px] xl:mb-[40px] gap-[20px] md:gap-[30px]"
                >
                  <div className="upcoming-date">
                    <div className="text-[18px] leading-none font-bold font-Lora">
                      {event.date.split(" ")[1].slice(0, 2)}
                    </div>
                    <div className="text-[11px] font-normal">
                      {event.date.split(" ")[0]}
                    </div>
                  </div>
                  <div className=" font-Poppins font-medium text-[15px]">
                    {event.event}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <SlidePanel isOpen={isSliderOpen} onClose={() => setIsSliderOpen(false)}>
        <h2 className="my-[20px] text-center text-[#05878F] font-Poppins text-[15px]">
          Add New Staff
        </h2>
        <AddCalender
          onSubmit={handleAddStaff}
          onClose={() => setIsSliderOpen(false)}
        />
      </SlidePanel>
    </div>
  );
};

export default Calendar;
