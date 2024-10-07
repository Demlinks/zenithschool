// // import React from "react";
// // import { Paper } from "../../assets/images";
// // import {
// //   ArrowDownMobile,
// //   TotalStaff,
// //   TotalStudents,
// //   TotalSubjects,
// // } from "../../assets/images/dashboard/overview";
// // import CalendarComponent from "../../components/dashboard/CalendarComponent";

// // const events = [
// //   {
// //     title: "Cultural Day 2022",
// //     start: new Date(2024, 7, 20),
// //     end: new Date(2024, 7, 20),
// //   },
// //   {
// //     title: "Democracy Day 2022",
// //     start: new Date(2024, 7, 12),
// //     end: new Date(2024, 7, 12),
// //   },
// //   {
// //     title: "Demo Day 2024",
// //     start: new Date(2024, 7, 13),
// //     end: new Date(2024, 7, 13),
// //   },
// //   {
// //     title: "Teacher's Workshop",
// //     start: new Date(2024, 7, 15),
// //     end: new Date(2024, 7, 15),
// //   },
// //   {
// //     title: "Parent-Teacher Conference",
// //     start: new Date(2024, 8, 1),
// //     end: new Date(2024, 8, 1),
// //   },
// //   {
// //     title: "School Anniversary",
// //     start: new Date(2024, 8, 5),
// //     end: new Date(2024, 8, 5),
// //   },
// //   {
// //     title: "Midterm Break",
// //     start: new Date(2024, 8, 8),
// //     end: new Date(2024, 8, 12),
// //   },
// //   {
// //     title: "Science Fair",
// //     start: new Date(2024, 8, 18),
// //     end: new Date(2024, 8, 18),
// //   },
// //   {
// //     title: "Sports Day",
// //     start: new Date(2024, 8, 25),
// //     end: new Date(2024, 8, 25),
// //   },
// //   {
// //     title: "Winter Break",
// //     start: new Date(2024, 11, 20),
// //     end: new Date(2025, 0, 4), // January 4, 2025
// //   },
// //   {
// //     title: "Art Exhibition",
// //     start: new Date(2025, 0, 10),
// //     end: new Date(2025, 0, 10),
// //   },
// //   {
// //     title: "Spring Concert",
// //     start: new Date(2025, 2, 5),
// //     end: new Date(2025, 2, 5),
// //   },
// //   {
// //     title: "Graduation Day",
// //     start: new Date(2025, 5, 15),
// //     end: new Date(2025, 5, 15),
// //   },
// //   {
// //     title: "Summer Camp",
// //     start: new Date(2025, 6, 1),
// //     end: new Date(2025, 6, 15),
// //   },

// //   // Add other events...
// // ];

// // const daysOfWeek: DaysOfWeek = [
// //   "Monday",
// //   "Tuesday",
// //   "Wednesday",
// //   "Thurday",
// //   "Friday",
// // ];

// // const classPeriods: ClassPeriod[] = [
// //   {
// //     "8:20 am -9:00 am": [
// //       "Mathematics",
// //       "Mathematics",
// //       "SPORTS",
// //       "Mathematics",
// //       "Mathematics",
// //     ],
// //   },
// //   {
// //     "9:00 am -9:40 am": [
// //       "Literature",
// //       "Literature",
// //       "SPORTS",
// //       "Literature",
// //       "Literature",
// //     ],
// //   },
// //   {
// //     "9:40 am -10:20 am": [
// //       "English",
// //       "English",
// //       "English",
// //       "English",
// //       "English",
// //     ],
// //   },
// //   {
// //     "10:20 am -10:50 am": [null, null, "LONG BREAK", null, null],
// //   },
// //   {
// //     "10:50 am -11:30 am": [
// //       "Social Studies",
// //       "Social Studies",
// //       "Social Studies",
// //       "Social Studies",
// //       "Social Studies",
// //     ],
// //   },
// //   {
// //     "11:30 am -12:10 pm": [
// //       "Civic Education",
// //       "Civic Education",
// //       "Civic Education",
// //       "Civic Education",
// //       "Civic Education",
// //     ],
// //   },
// //   {
// //     "12:10 pm -12:50 pm": ["Agric", "Agric", "Agric", "Agric", "Agric"],
// //   },
// //   {
// //     "12:50 pm -1:00 pm": [null, null, "SHORT BREAK", null, null],
// //   },
// //   {
// //     "1:00 pm -1:40 pm": [
// //       "Fine Art",
// //       "Fine Art",
// //       "Fine Art",
// //       "Fine Art",
// //       "CLUB AND SOCIETY",
// //     ],
// //   },
// //   {
// //     "8:20 am -9:00 am": [
// //       "French",
// //       "French",
// //       "French",
// //       "French",
// //       "CLUB AND SOCIETY",
// //     ],
// //   },
// // ];

// // // const classTimetables: ClassTimetable[] = [
// // //   {
// // //     'JSS 1 A': [
// // //       { 'First Term': classPeriods },
// // //       { 'Second Term': classPeriods },
// // //       { 'Third Term': classPeriods },
// // //     ],
// // //   },
// // //   {
// // //     'JSS 1 A': [
// // //       { 'First Term': classPeriods },
// // //       { 'Second Term': classPeriods },
// // //       { 'Third Term': classPeriods },
// // //     ],
// // //   },
// // //   {
// // //     'JSS 1 A': [
// // //       { 'First Term': classPeriods },
// // //       { 'Second Term': classPeriods },
// // //       { 'Third Term': classPeriods },
// // //     ],
// // //   },
// // // ];

// // const TimetableSection = ({ daysOfWeek }: { daysOfWeek: DaysOfWeek }) => {
// //   return (
// //     <div className="timetable-section">
// //       <div className="timetable">
// //         <h3 className="timetable-header">
// //           <span className="hidden md:inline-block">Class</span> Timetable
// //         </h3>

// //         <div className="flex flex-col gap-3">
// //           <h4 className="text-clr1 timetable-header block md:hidden">JSS 1A</h4>

// //           <div className="timetable-wrapper">
// //             <table className="w-full bg-white">
// //               <thead>
// //                 <tr>
// //                   <th className="table-header">Time</th>
// //                   {daysOfWeek.map((day, index) => (
// //                     <th key={index} className="table-header">
// //                       {day}
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>

// //               <tbody>
// //                 {classPeriods.map((period, index) => {
// //                   const [time] = Object.keys(period);
// //                   const [subjects] = Object.values(period);

// //                   return (
// //                     <tr key={index}>
// //                       <td className="table-data border-[0.1px] border-black">
// //                         {time}
// //                       </td>
// //                       {subjects.map((subject: string | null, index: number) => (
// //                         <td
// //                           key={index}
// //                           className={`table-data ${
// //                             subject && !subject.includes("BREAK")
// //                               ? "border-[0.1px] border-black"
// //                               : "font-bold"
// //                           }`}
// //                         >
// //                           {subject}
// //                         </td>
// //                       ))}
// //                     </tr>
// //                   );
// //                 })}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const Overview: React.FC = () => {
// //   return (
// //     <>
// //       {/* mobile screen header */}
// //       <div className="overview-m-header">
// //         <div className="flex flex-col items-center font-Lora">
// //           <div className="flex flex-row justify-center items-center w-full mb-[20px] ml:mb-[22px]">
// //             {/* <div className="max-w-[22px] max-h-[20px] ml:max-w-[24px] ml:max-h-[22px]">
// //               <img
// //                 src={MenuIcon}
// //                 alt="logo"
// //                 className="size-full object-center object-contain"
// //               />
// //             </div> */}
// //             <div className="size-[55px] ml:size-[60px] py-[11px] px-[12.5px] bg-white md:bg-[#ECFEFF] rounded-full flex justify-center items-center">
// //               <img
// //                 src={Paper}
// //                 alt="logo"
// //                 className="max-w-[21.7px] max-h-[26.14px] object-center"
// //               />
// //             </div>
// //             {/* <div className="w-[28px] h-[26px] ml:w-[30px] ml:h-[28px] dashboard-m-search">
// //               <SearchSVG />
// //             </div> */}
// //           </div>
// //           <div className="text-lg leading-[23.04px] font-bold text-white">
// //             Zenith School 
// //           </div>
// //         </div>
// //         <div className="absolute bottom-[-22px] right-[15.22%] left-[15.22%] bg-[#FFFF] flex flex-row justify-between items-center font-Poppins py-[8px] px-[14px] ml:px-[16px] rounded-[20px] shadow-[0px_8px_26px_0px_rgba(4,_106,_126,_0.17)]">
// //           <div className="text-[13px] ml:text-[15px] text-center leading-[22.5px] font-medium 2xl:font-bold mr-[11px] text-[#05878F]">
// //             2024/2025 Acad<span className="hidden ml:inline">emic</span> Session
// //           </div>
// //           <div className="max-w-[13px] max-h-[13px] ml:max-w-[15px] ml:max-h-[15px]">
// //             <img
// //               src={ArrowDownMobile}
// //               alt="dropdown"
// //               className="size-full object-center object-contain"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       {/* mobile screen header */}

// //       <div className="overview-body">
// //         <div className="mx-0 md:mx-[10px] lg:mx-[15px] xl:mx-[20px] 2xl:mx-[30px] basis-full xl:basis-[61.01%]">
// //           {/* overview total */}
// //           <div className="overview-total">
// //             <div className="overview-total-students bg-[rgba(236,_254,_255,_1)] ml-[0px] md:ml-[15px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[30px]">
// //               <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
// //                 <img
// //                   src={TotalStudents}
// //                   alt="Total Students"
// //                   className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
// //                 />
// //               </div>
// //               <div className="text-center md:text-left">
// //                 <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
// //                   Total Students
// //                 </div>
// //                 <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[rgba(68,_191,_103,_1)]">
// //                   1250
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="overview-total-students bg-[#FBEDD9] mx-[30px] md:mx-[25px]">
// //               <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
// //                 <img
// //                   src={TotalStaff}
// //                   alt="Total Students"
// //                   className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
// //                 />
// //               </div>
// //               <div className="text-center md:text-left">
// //                 <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
// //                   Total Staff
// //                 </div>
// //                 <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[#FFA427]">
// //                   105
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="overview-total-students mr-[0px] md:mr-[15px] lg:mr-[20px] xl:mr-[25px] 2xl:mr-[30px] bg-[#C7D4FF]">
// //               <div className="bg-transparent md:bg-white p-0 md:p-[10.69px] mb-[20px] md:mb-0  mr-0 md:mr-[10.29px] rounded-full">
// //                 <img
// //                   src={TotalSubjects}
// //                   alt="Total Students"
// //                   className="max-w-[45px] md:max-w-[34.36px] h-auto object-center object-contain"
// //                 />
// //               </div>
// //               <div className="text-center md:text-left">
// //                 <div className="font-Poppins text-[15px] leading-[22.5px] md:text-[12px] md:leading-[18px] font-medium mb-[10px] md:mb-[4.29px]">
// //                   Total Subjects
// //                 </div>
// //                 <div className="font-bold font-Lora text-[28px] leading-[35.84px] md:text-[22.3px] md:leading-[28.54px] text-black md:text-[#2C4084]">
// //                   25
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //           {/* overview total */}

// //           {/* mobile calender */}
// //           <div className="overview-calendar-mobile">
// //             <CalendarComponent />
// //             <hr className="mb-[17px] max-w-[200px] mx-auto bg-[rgba(196,196,196,1)]" />
// //             <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[20px] md:mb-[30px] lg:mb-[36px] xl:mb-[42px] text-center xl:text-left">
// //               Upcoming Events
// //             </h2>
// //             {events.slice(0, 2).map((event, index) => (
// //               <div
// //                 key={index}
// //                 className="flex flex-row items-center mb-[25px] md:mb-[35px] xl:mb-[40px]"
// //               >
// //                 <div className="mr-[20px] md:mr-[30px] px-[8px] py-[6px] md:px-[12px] md:py-[10px] bg-[rgba(253,235,187,1)] text-center rounded-[10px]">
// //                   <div className="text-[18px] leading-none font-bold font-Lora">
// //                     {event.start.toUTCString().split(" ")[1]}
// //                   </div>
// //                   <div className="text-[11px] font-normal">
// //                     {event.start.toUTCString().split(" ")[2]}
// //                   </div>
// //                 </div>
// //                 <div className=" font-Poppins font-medium text-[13px]">
// //                   {event.title}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           {/* mobile calender */}

// //           <TimetableSection daysOfWeek={daysOfWeek} />

// //           {/* <div>Number of Students and Starter Pack</div> */}
// //         </div>

// //         {/* large screen right-side - desktop calender */}
// //         <div className="overview-calendar">
// //           <>
// //             <CalendarComponent events={events} />
// //           </>
// //           <hr className="mb-[40px] max-w-[200px] mx-auto bg-[rgba(196,196,196,1)]" />
// //           <h2 className="text-[15px] md:text-[18px] xl:text-[22px] font-bold font-Lora mb-[10px] md:mb-[30px] lg:mb-[36px] xl:mb-[42px]">
// //             Upcoming Events
// //           </h2>
// //           {events.slice(0, 4).map((event, index) => (
// //             <div
// //               key={index}
// //               className="flex flex-row items-center mb-[30px] md:mb-[35px] xl:mb-[40px]"
// //             >
// //               <div className="mr-[20px] md:mr-[30px] px-[8px] py-[6px] md:px-[12px] md:py-[10px] bg-[rgba(253,235,187,1)] text-center rounded-[10px]">
// //                 <div className="text-[18px] leading-none font-bold font-Lora">
// //                   {event.start.toUTCString().split(" ")[1]}
// //                 </div>
// //                 <div className="text-[11px] font-normal">
// //                   {event.start.toUTCString().split(" ")[2]}
// //                 </div>
// //               </div>
// //               <div className=" font-Poppins font-medium">{event.title}</div>
// //             </div>
// //           ))}
// //         </div>
// //         {/* large screen right-side - desktop calender */}
// //       </div>
// //     </>
// //   );
// // };

// // export default Overview;

// interface classStudentIdI {
//   /id: number;
//   student_class: string;.....
//   /guardian_email: string;
//   /first_name: string;....
//   /last_name: string;....
//   /middle_name: string;.....
//   /image: string;.......
//   /date_of_birth: string;
//   /gender: string;
//   /fathers_name: string;
//   /mothers_name: string | null;
//   /fathers_contact: string;
//   /mothers_contact: string;
//   /fathers_occupation: string;
//   /mothers_occupation: string;
//   /home_address: string;
//   /state_of_origin: string;
//   /home_town: string;
//   /country: string;
//   /starter_pack_collected: boolean;..........
//   /religion: string | null;
//   total_tuition_paid: number; no no no
//   schoolclass: number; no no no
//   guardian: number; no no no
// }

// {
//   id: "",
//   last_name: "",
//   first_name: "",
//   middle_name: "",
//   image: "",
//   class: "",
//   date_of_birth: null,
//   gender: "",
//   father_name: "",
//   father_occupation: "",
//   father_contact: "",
//   mother_name: "",
//   mother_occupation: "",
//   mother_contact: "",
//   home_address: "",
//   guardian_email: "",
//   hometown: "",
//   state_of_origin: "",
//   country: "",
//   religion: "",
//   starter_pack: false,
// }



// AddButon with ID

// import React, { memo, useEffect, useMemo, useState } from "react";
// import DatePicker from "react-datepicker";
// // import { Purity_Bliss } from "../../assets/images/users";
// import "../../style/addbutton.css";
// import useClasses from "../../hooks/useClasses";
// // import { Cloudinary } from "@cloudinary/url-gen/index";
// // import { auto } from "@cloudinary/url-gen/actions/resize";
// // import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
// // import { AdvancedImage } from "@cloudinary/react";
// // import useImageURLGen from "../../hooks/useImageURLGen";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { addStudent } from "../../services/api/calls/postApis";
// interface AddButtonProps {
//   addToggle: boolean;
//   setAddToggle: (toggle: boolean) => void;
//   className: string;
//   classNameID: number;
//   studentIDs: number[];
// }

// interface FormInterface {
//   // id: number;
//   last_name: string;
//   first_name: string;
//   middle_name: string;
//   image: File | null;
//   student_class: string;
//   schoolclass: number;
//   date_of_birth: Date | null;
//   gender: string;
//   fathers_name: string;
//   fathers_occupation: string;
//   fathers_contact: string;
//   mothers_name: string;
//   mothers_occupation: string;
//   mothers_contact: string;
//   home_address: string;
//   guardian_email: string;
//   home_town: string;
//   state_of_origin: string;
//   country: string;
//   religion: string;
//   starter_pack_collected: boolean | null;
// }

// const AddButton: React.FC<AddButtonProps> = ({
//   addToggle,
//   setAddToggle,
//   className: classNameLowerCase,
//   // studentIDs,
//   classNameID,
// }) => {
//   // GETTING CLASS Data
//   const { classNameData: classes } = useClasses();
//   //Ends
//   const className = useMemo(() => {
//     return (
//       (classes &&
//         classes.filter((classes) =>
//           classes.name.toLowerCase().includes(classNameLowerCase)
//         )) ||
//       ""
//     );
//   }, [classNameLowerCase, classes]);

//   //////////////////////////////////////////////
//   const {
//     data: AddButtonData,
//     isError: AddButtonError,
//     // error: classStudentsIdError,
//     isLoading: AddButtonLoading,
//   } = useQuery({
//     queryKey: ["addbutton"],
//     queryFn: () => addStudent,
//     // enabled: classNameID.length > 0,
//   });

//   useEffect(() => {
//     console.log(
//       "classStudentID Dataaaaaaaaaaaaaa :",
//       AddButtonData,
//       AddButtonError,
//       // error: classStudentsIdError,
//       AddButtonLoading
//     );
//   }, [AddButtonData, AddButtonError, AddButtonLoading]);

//   ////////////////////////////////////////////////

//   const [formData, setFormData] = useState<FormInterface>({
//     // id: 0,
//     last_name: "",
//     first_name: "",
//     middle_name: "",
//     image: null,
//     student_class: "",
//     schoolclass: 0,
//     date_of_birth: null,
//     gender: "",
//     fathers_name: "",
//     fathers_occupation: "",
//     fathers_contact: "",
//     mothers_name: "",
//     mothers_occupation: "",
//     mothers_contact: "",
//     home_address: "",
//     guardian_email: "",
//     home_town: "",
//     state_of_origin: "",
//     country: "",
//     religion: "",
//     starter_pack_collected: null,
//   });
//   useEffect(() => {
//     // className.length > 0 && console.log("ClasssName", className[0].name);
//     className.length > 0 &&
//       setFormData((prev) => ({ ...prev, student_class: className[0].name }));
//     classNameID &&
//       setFormData((prev) => ({ ...prev, schoolclass: classNameID }));
//   }, [className, classNameID, classes]);
//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     if (value.trimStart() === formData[name as keyof FormInterface]) {
//       return;
//     }
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   // const handleInputIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const value = parseInt(e.target.value, 10);
//   //   if (isNaN(value) || value === studentIDs || value === 0) {
//   //     return;
//   //   }

//   //   setFormData((prev) => ({ ...prev, id: value }));
//   // };
//   // const handleInputIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const value = parseInt(e.target.value, 10);
//   //   // const inputElement = e.target as HTMLInputElement;

//   //   // if (isNaN(value) || value === studentIDs || value === 0) {
//   //   //   inputElement.setCustomValidity(
//   //   //     "ID must be a number greater than 0 and different from the class ID."
//   //   //   );
//   //   //   inputElement.reportValidity();
//   //   //   return;
//   //   // }

//   //   // inputElement.setCustomValidity(""); // Clear the error message if input is valid
//   //   setFormData((prev) => ({ ...prev, id: value }));
//   // };

//   // const handleInputIDChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const value = Math.max(1, parseInt(e.target.value, 10) || 1);
//   //   setFormData((prev) => ({ ...prev, id: value }));
//   // };

//   const handleDateChange = (date: Date | null) => {
//     const today = new Date();
//     const normalizedToday = new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate()
//     );
//     if (date && date?.getTime() > normalizedToday.getTime()) {
//       setFormData((prevState) => ({
//         ...prevState,
//         date_of_birth: null,
//       }));
//       // console.log("Future");
//       return true;
//     }
//     setFormData((prevState) => ({
//       ...prevState,
//       date_of_birth: date,
//     }));
//   };
//   //

//   // const { uploadImage, image, setImage, url, isLoadingURL, isErrorURL } =
//   // useImageURLGen();
//   // useEffect(() => {
//   //   if (image) {
//   //     uploadImage();
//   //   }
//   // }, [image]);
//   // useEffect(() => {
//   //   url && setFormData((prev) => ({ ...prev, image: url }));
//   // }, [url]);

//   // ///////////////////////
//   // POST Request
//   const mutation = useMutation({
//     mutationFn: (variables: { id: number; newData: object }) =>
//       addStudent(variables),
//   });
//   // const mutation = useMutation({
//   //   mutationFn: (newTodo) => {
//   //     return axios.post("/todos", newTodo);
//   //   },
//   // });
//   // const mutation = useMutation(({ id, newData }: { id: number; newData: object }) =>
//   //   addStudent({ id, newData })
//   // );
//   const [imageFile, setImageFile] = useState<string>("");
//   return (
//     <div className={` ${addToggle ? "block" : "hidden"}`}>
//       <form
//         encType="multipart/form-data"
//         onSubmit={(e) => {
//           e.preventDefault();
//           alert("Submitted : " + JSON.stringify(formData));

//           const data = new FormData();

//           // Append image if it exists
//           if (formData.image) {
//             data.append("image", formData.image);
//           }
//           // const data = new FormData();

//           // // Append image if it exists
//           // if (imageFile) {
//           //   data.append("image", imageFile);
//           // }
//           const formatDate = (date: Date | null) => {
//             if (!date) return "";
//             const year = date.getFullYear();
//             const month = String(date.getMonth() + 1).padStart(2, "0");
//             const day = String(date.getDate()).padStart(2, "0");
//             return `${year}-${month}-${day}`;
//           };

//           // formData && setFormData({...formData, date_of_birth : })
//           // Loop through formData and append each field
//           Object.entries(formData).forEach(([key, value]) => {
//             if (key === "date_of_birth") {
//               data.append(key, formatDate(value as Date | null));
//             } else if (key !== "image") {
//               data.append(key, value as string);
//             }
//           });

//           // mutation.mutate(formData)
//           mutation.mutate({ id: classNameID, newData: data });
//           // setFormData({
//           //   id: 0,
//           //   last_name: "",
//           //   first_name: "",
//           //   middle_name: "",
//           //   image: "",
//           //   student_class: "",
//           //   date_of_birth: null,
//           //   gender: "",
//           //   fathers_name: "",
//           //   fathers_occupation: "",
//           //   fathers_contact: "",
//           //   mothers_name: "",
//           //   mothers_occupation: "",
//           //   mothers_contact: "",
//           //   home_address: "",
//           //   guardian_email: "",
//           //   home_town: "",
//           //   state_of_origin: "",
//           //   country: "",
//           //   religion: "",
//           //   starter_pack_collected: false,
//           // });
//         }}
//         className=" my-[40px] md:my-[39px] md:mx-[10px] lg:mx-[20px]"
//       >
//         {/* <div className="hidden md:block mb-[25px] md:ml-[10px] font-Poppins font-medium text-lg">
//           <span>ID: </span>
//           <span>
//             <input
//               required
//               min={1}
//               type="number"
//               name="id"
//               id="id"
//               //   value={data.id}
//               value={formData.id}
//               onChange={handleInputIDChange}
//               // onBlur={handleInputIDChange}
//               // onClick={handleInputIDChange}
//               // onInvalid={(e) => {
//               //   const target = e.target as HTMLInputElement;
//               //   if (target.validity.valueMissing) {
//               //     target.setCustomValidity("ID is required.");
//               //   } else if (target.validity.rangeUnderflow) {
//               //     target.setCustomValidity("ID must be greater than 0.");
//               //   } else if(studentIDs.some((classid) => classid === Number(target))){
//               //     target.setCustomValidity("ID must be different from the class ID")
//               //   }
//               // }}
//               // onInput={handleInputIDChange}
//               className={`bg-white inline w-[75px] outline-none border-[rgb(16,16,16)] border px-[5px]`}
//             />
//           </span>
//         </div> */}
//         <div className="flex flex-col items-center justify-center mb-[40px] md:mb-[15px]">
//           <div className="relative max-w-[200px] size-[200px] md:max-w-[150px] md:size-[150px]  rounded-full overflow-hidden mr-[5px] ml-[10px] border-2 border-solid border-[#05878F] md:border-[#ECFEFF] mb-[15px] md:mb-[5px]">
//             {/* Loading Uploading */}
//             {/* <div
//               className={`absolute z-10 bg-white/70 blur-sm w-full h-full top-0 right-0 ${
//                 isLoadingURL ? "block" : "hidden"
//               }`}
//             ></div>
//             <div
//               className={`absolute z-20 bg-transparent  w-full h-full top-0 right-0 flex-row justify-center items-center font-bold ${
//                 isLoadingURL ? "flex" : "hidden"
//               }`}
//             >
//               <span className="">Uploaing...</span>
//             </div> */}

//             {/* Error uploading */}
//             {/* <div
//               className={`absolute z-10 bg-white/70 blur-sm w-full h-full top-0 right-0 ${
//                 isErrorURL ? "block" : "hidden"
//               }`}
//             ></div>
//             <div
//               className={`absolute z-20 bg-transparent  w-full h-full top-0 right-0 flex-row justify-center items-center font-bold ${
//                 isErrorURL ? "flex" : "hidden"
//               }`}
//             >
//               <span className="">Error uploading</span>
//             </div> */}
//             <img
//               src={imageFile}
//               alt=""
//               className="size-full scale-105 object-cover object-center border rounded-full"
//             />

//             {/* <AdvancedImage cldImg={img} /> */}
//           </div>
//           <input
//             required={formData.image ? false : true}
//             onChange={(e) => {
//               if (e.target.files) {
//                 const selectedFile = e.target.files[0];
//                 setImageFile(URL.createObjectURL(selectedFile));
//                 // setImage(selectedFile); // Set the image file
//                 setFormData((prev) => ({ ...prev, image: selectedFile }));
//                 // e.target.value = "";
//               }
//             }}
//             type="file"
//             accept="image/*"
//             className="size-full scale-90 mx-auto"
//           />
//           {/* <input
//               required
//               onChange={(e) => {
//                 e.target.files && setImage(e.target.files[0]);
//               }}
//               type="file"
//               accept="image/*"
//               // id="input-hidden"
//               className="scale-75"
//               // className="size-full object-cover object-center border rounded-full"
//             /> */}
//           {/* <button onClick={uploadImage} className="text-[15px] md:text-[12px] xl:text-[13px] border border-solid border-black px-2" >Upload Image</button> */}
//           {/* <div className="hidden md:block font-Poppins font-medium">
//             <div className="text-xl leading-[30px]">
//               <input
//                 required
//                 type="text"
//                 name="name"
//                 id="name"
//                 // value={data.name}
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 // ref={textAreaRef}
//                 placeholder="Enter student name"
//                 className={`bg-white text-center text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full mb-[2px] outline-none border-[rgb(16,16,16)] border px-[5px]`}
//               />
//             </div>
//           </div> */}
//         </div>
//         <div>
//           <div className="flex student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="last_name">Surname:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="last_name"
//                 id="last_name"
//                 value={formData.last_name}
//                 onChange={handleInputChange}
//                 // value={data.name}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="flex student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="first_name">First Name:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="first_name"
//                 id="first_name"
//                 value={formData.first_name}
//                 onChange={handleInputChange}
//                 // value={data.name}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="flex student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="middle_name">Middle Name:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="middle_name"
//                 id="middle_name"
//                 value={formData.middle_name}
//                 onChange={handleInputChange}
//                 // value={data.name}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           {/* <div className="flex student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="id">ID:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 min={1}
//                 type="number"
//                 name="id"
//                 id="id"
//                 value={formData.id}
//                 // onChange={handleInputIDChange}
//                 onChange={(e) => {
//                   const target = e.target as HTMLInputElement;
//                   const enteredID = Number(target.value);

//                   if (isNaN(enteredID)) {
//                     target.setCustomValidity("Please enter a valid ID.");
//                   } else if (studentIDs.includes(enteredID)) {
//                     target.setCustomValidity(
//                       "ID must be different from the student ID."
//                     );
//                   } else {
//                     target.setCustomValidity(""); // Clear custom validation
//                   }

//                   handleInputIDChange(e); // Also call your onChange handler
//                 }}
//                 // onBlur={(e) => {
//                 //   const target = e.target as HTMLInputElement;
//                 //   const enteredID = Number(target.value);

//                 //   if (isNaN(enteredID)) {
//                 //     target.setCustomValidity("Please enter a valid ID.");
//                 //   } else if (studentIDs.includes(enteredID)) {
//                 //     target.setCustomValidity("ID must be different from the class ID.");
//                 //   } else {
//                 //     target.setCustomValidity(""); // Clear custom validation
//                 //   }
//                 //   handleInputIDChange(e); // Also call your onChange handler
//                 // }}

//                 // onBlur={handleInputIDChange}
//                 // onClick={handleInputIDChange}
//                 // onInvalid={(e) => {
//                 //   const target = e.target as HTMLInputElement;
//                 //   if (target.validity.valueMissing) {
//                 //     target.setCustomValidity("ID is required.");
//                 //   } else if (target.validity.rangeUnderflow) {
//                 //     target.setCustomValidity("ID must be greater than 0.");
//                 //   } else if (
//                 //     studentIDs.includes(Number(target.value))
//                 //   ) {
//                 //     target.setCustomValidity(
//                 //       "ID must be different from the class ID"
//                 //     );
//                 //   }
//                 // }}
//                 // onInput={(e: React.FormEvent<HTMLInputElement>) => {
//                 //   const target = e.currentTarget;
//                 //   target.setCustomValidity(""); // Clear the custom validity on input
//                 //   handleInputIDChange(e as React.ChangeEvent<HTMLInputElement>);
//                 // }}
//                 // onInput={handleInputIDChange}
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div> */}
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="student_class">Class:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 disabled
//                 readOnly
//                 type="text"
//                 name="student_class"
//                 id="student_class"
//                 value={formData.student_class}
//                 // onChange={() => {setFormData({...formData, class : className})}}
//                 // value={data.age}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border cursor-not-allowed`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="student_class">Class ID:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 disabled
//                 readOnly
//                 type="text"
//                 name="student_class"
//                 id="student_class"
//                 value={formData.schoolclass}
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border cursor-not-allowed`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="date_of_birth">DOB:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <DatePicker
//                 required
//                 // selected={data.date_of_birth}
//                 selected={formData.date_of_birth}
//                 onChange={handleDateChange}
//                 // onChange={() => {}}
//                 dateFormat="yyyy MM dd" // Format: "05 June 2011"
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border `}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="gender">Gender:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">

//               <select
//                 required
//                 value={formData.gender}
//                 onChange={handleInputChange}
//                 // onChange={(e) =>
//                 //   setFormData({
//                 //     ...formData,
//                 //     gender: e.target.value,
//                 //   })
//                 // }
//                 name="gender"
//                 id="gender"
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               >
//                 <option value={""}>Select Gender:</option>
//                 <option value={"Male"}>Male</option>
//                 <option value={"Female"}>Female</option>
//               </select>
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="fathers_name">Father's Name:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="fathers_name"
//                 id="fathers_name"
//                 value={formData.fathers_name}
//                 onChange={handleInputChange}
//                 // value={data.fathers_name}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="fathers_occupation">Father's Occupation:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="fathers_occupation"
//                 id="fathers_occupation"
//                 value={formData.fathers_occupation}
//                 onChange={handleInputChange}
//                 // value={data.fathers_occupation}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="fathers_contact">Father's Contact:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="tel"
//                 name="fathers_contact"
//                 id="fathers_contact"
//                 value={formData.fathers_contact}
//                 onChange={handleInputChange}
//                 pattern="^\+?\d{0,4}?\s?-?\(?\d{1,4}?\)?\s?-?\d{1,4}\s?-?\d{1,9}$"
//                 title="Please enter a valid phone number"
//                 placeholder="+234 012 345 6789"
//                 // value={data.fathers_contact}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="mothers_name">Mother's Name:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="mothers_name"
//                 id="mothers_name"
//                 value={formData.mothers_name}
//                 onChange={handleInputChange}
//                 // value={data.mothers_name}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="mothers_occupation">Mother's Occupation:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="mothers_occupation"
//                 id="mothers_occupation"
//                 value={formData.mothers_occupation}
//                 onChange={handleInputChange}
//                 // value={data.mothers_occupation}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="mothers_contact">Mother's Contact:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="tel"
//                 name="mothers_contact"
//                 id="mothers_contact"
//                 value={formData.mothers_contact}
//                 onChange={handleInputChange}
//                 pattern="^\+?\d{0,4}?\s?-?\(?\d{1,4}?\)?\s?-?\d{1,4}\s?-?\d{1,9}$"
//                 title="Please enter a valid phone number"
//                 placeholder="+234 012 345 6789"
//                 // value={data.mothers_contact}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details mb-[5px]">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="home_address">Home Address:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <textarea
//                 required
//                 // type="text"
//                 name="home_address"
//                 id="home_address"
//                 value={formData.home_address}
//                 onChange={handleInputChange}
//                 // value={data.home_address}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full inline md:w-full whitespace-pre-wrap  outline-none md:text-left resize-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="guardian_email">Guardian's Email:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="email"
//                 name="guardian_email"
//                 id="guardian_email"
//                 value={formData.guardian_email}
//                 onChange={handleInputChange}
//                 // value={data.guardian_email}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="home_town">Hometown:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="home_town"
//                 id="home_town"
//                 value={formData.home_town}
//                 onChange={handleInputChange}
//                 // value={data.home_town}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="state_of_origin">State of Origin:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="state_of_origin"
//                 id="state_of_origin"
//                 value={formData.state_of_origin}
//                 onChange={handleInputChange}
//                 // value={data.state_of_origin}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="country">Country:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <input
//                 required
//                 type="text"
//                 name="country"
//                 id="country"
//                 value={formData.country}
//                 onChange={handleInputChange}
//                 // value={data.country}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               />
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="religion">Religion:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               {/* <input
//                 required
//                 type="text"
//                 name="religion"
//                 id="religion"
//                 value={formData.religion}
//                 onChange={handleInputChange}
//                 // value={data.religion}

//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               /> */}
//               <select
//                 required
//                 value={formData.religion}
//                 onChange={handleInputChange}
//                 // onChange={(e) =>
//                 //   setFormData({
//                 //     ...formData,
//                 //     gender: e.target.value,
//                 //   })
//                 // }
//                 name="religion"
//                 id="religion"
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               >
//                 <option value={""}>Select Religion:</option>
//                 <option value={"Christianity"}>Christianity</option>
//                 <option value={"Islam"}>Islam</option>
//                 <option value={"Traditional"}>Traditional</option>
//               </select>
//             </div>
//           </div>
//           <div className="student-addbutton-db-details">
//             <div className="student-addbutton-db-details-key">
//               <label htmlFor="starter_pack_collected">Starter's Pack:</label>
//             </div>
//             <div className="student-addbutton-db-details-property">
//               <select
//                 required
//                 value={
//                   formData.starter_pack_collected === true
//                     ? "collected"
//                     : formData.starter_pack_collected === false
//                     ? "not_collected"
//                     : ""
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     starter_pack_collected:
//                       e.target.value === "collected"
//                         ? true
//                         : e.target.value === "not_collected"
//                         ? false
//                         : null,
//                   })
//                 }
//                 name="starter_pack_collected"
//                 id="starter_pack_collected"
//                 className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
//               >
//                 <option value={""}>Select:</option>
//                 <option value={"collected"}>Collected</option>
//                 <option value={"not_collected"}>Not Collected</option>
//               </select>

//             </div>
//           </div>
//         </div>
//         <div className="flex flex-row justify-end text-white font-Poppins text-[15px] md:text-[12px] xl:text-[13px]">
//           <input
//             type="submit"
//             // onClick={() => {}}
//             className="mr-[10px] rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
//             value={"Submit"}
//           />
//           <input
//             type="button"
//             onClick={() => {
//               setAddToggle(false);
//             }}
//             className="rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
//             value={"Cancel"}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default memo(AddButton);



// POST
// import apiClient from "../apiClient";

// export const addStudent = async (
//   newData: object) => {
//   const response = await apiClient.post(`/students/`, newData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
//   return response.data;
// };





// import React, { ReactNode, useEffect, useState } from "react";
// import { Link, NavLink, Outlet } from "react-router-dom";
// import data from "../services/api/db.json";
// import SideNav from "../components/dashboard/SideNav";
// import SearchSVG from "../components/svg/dashboard navbar svg/SearchSVG";
// import CalendarSVG from "../components/svg/dashboard navbar svg/CalendarSVG";
// import ChatSVG from "../components/svg/dashboard navbar svg/ChatSVG";
// import TimetableSVG from "../components/svg/dashboard navbar svg/TimetableSVG";
// import DropdownSVG from "../components/svg/dashboard navbar svg/DropdownSVG";
// import { Purity_Bliss } from "../assets/images/users";
// import { MenuIcon } from "../assets/images";
// import HomeSVG from "../components/svg/dashboard navbar svg/HomeSVG";
// import { getRole } from "../utils/authTokens";
// interface userDataIn {
//   id: number;
//   firstName: string;
//   lastName: string;
//   lastLogin: null;
//   dateJoined: string;
//   role: string;
//   phoneNumber: string;
//   username: string;
//   email: string;
//   is_active: boolean;
// }

// const guardian = [
//   {
//     id: 3,
//     firstName: "guardian",
//     lastName: "guardian",
//     lastLogin: null,
//     dateJoined: "2024-08-12 00:08:36+00:00",
//     role: "guardian",
//     phoneNumber: "810 709 5017",
//     username: "guardian@gmail.com",
//     email: "guardian@gmail.com",
//     is_active: true,
//   },
// ]
// const DashboardLayout: React.FC = () => {
  
//   const [userData] = useState<userDataIn[] | []>(guardian);
//   const [mobileToggle, setMobileToggle] = useState<boolean>(false);
//   const mobileFooters: { tab: ReactNode; route: string }[] = [
//     { tab: <HomeSVG />, route: "" },
//     { tab: <CalendarSVG />, route: "calendar" },
//     { tab: <TimetableSVG />, route: "timetable" },
//     { tab: <ChatSVG />, route: "chat" },
//   ];
//   const role = getRole() as string;
//   useEffect(() => {
//     // guardian && setUserData(guardian);

//     console.log(data);
//   }, []);
//   return (
//     <div className="dashboard">
//       {/* Sidenav Background */}
//       <div
//         className={`fixed top-0 left-0 bottom-0 w-full min-h-screen bg-[rgba(0,0,0,0.5)] z-[55] ${
//           mobileToggle ? "block md:hidden" : "hidden md:hidden"
//         }`}
//       ></div>

//       <>
//         <SideNav
//           mobileToggle={mobileToggle}
//           setMobileToggle={setMobileToggle}
//         />
//       </>
//       <div className="dashboard-header">
//         {/* <div className="dashboard-header-mobile"></div> */}
//         {/* Dashboard Mobile Header */}
//         <div className="fixed top-0 z-50 flex md:hidden flex-row justify-between items-center w-full px-[30px] pt-[44.5px] ml:pt-[46px]">
//           <button
//             onClick={() => setMobileToggle(true)}
//             className="max-w-[22px] max-h-[20px] ml:max-w-[24px] ml:max-h-[22px]"
//           >
//             <img
//               src={MenuIcon}
//               alt="logo"
//               className="size-full object-center object-contain"
//             />
//           </button>

//           {/* <div className="size-[55px] ml:size-[60px] py-[11px] px-[12.5px] bg-white md:bg-[#ECFEFF] rounded-full flex justify-center items-center">
// 					<img
// 						src={Paper}
// 						alt="logo"
// 						className="max-w-[21.7px] max-h-[26.14px] object-center"
// 					/>
// 				</div> */}

//           <button className="w-[28px] h-[26px] ml:w-[30px] ml:h-[28px] dashboard-m-search">
//             <SearchSVG />
//           </button>
//         </div>
//         {/* Dashboard Mobile Footer */}
//         <div className="dashboard-mobile-footer-container">
//           {mobileFooters.map((tab, index) => {
//             return (
//               <NavLink
//                 to={tab.route}
//                 end
//                 key={index}
//                 className={({ isActive }) =>
//                   isActive
//                     ? "dashboard-mobile-footer-active"
//                     : "dashboard-mobile-footer"
//                 }
//               >
//                 {tab.tab}
//               </NavLink>
//             );
//           })}
//         </div>
//         {/* Dashboard Desktop Header */}
//         <div className="dashboard-header-desktop">
//           <div className="basis-[44.76%] size-[44px] 2xl:size-[55px] relative mr-[10px] lg:mr-[15px] xl:mr-[20px]">
//             <div className="dashboard-header-desktop-search-svg max-w-[24px] h-auto absolute top-0 bottom-0 left-[15px] lg:left-[20px] 2xl:left-[25px] flex items-center">
//               <SearchSVG />
//             </div>
//             <input
//               type="search"
//               name="search"
//               id="search"
//               placeholder="Search"
//               className="bg-[#F1F0F0] rounded-[20px] w-[calc(100%-20px)] lg:min-w-full min-h-full pl-[45px] lg:pl-[56px] 2xl:pl-[69px] pr-[17px] xl:pr-[25px] py-[8px] 2xl:py-[13px] text-lg font-medium"
//             />
//           </div>
//           <div className="basis-[55.24%] flex flex-row justify-between">
//             <div className="flex flex-row">
//               <Link
//                 to={"calendar"}
//                 className="rounded-full bg-[#F1F0F0] size-[44px] 2xl:size-[55px] flex justify-center items-center mx-[4px] lg:mx-[6px] xl:mx-[8px] 2xl:mx-[10px]"
//               >
//                 <div className="max-w-[22px] max-h-[22px] 2xl:max-w-[24px] 2xl:max-h-[24px] dashboard-header-desktop-svg">
//                   <CalendarSVG />
//                 </div>
//               </Link>
//               <Link
//                 to={"chat"}
//                 className="rounded-full bg-[#F1F0F0] size-[44px] 2xl:size-[55px] flex justify-center items-center mx-[4px] lg:mx-[6px] xl:mx-[8px] 2xl:mx-[10px]"
//               >
//                 <div className="max-w-[22px] max-h-[22px] 2xl:max-w-[24px] 2xl:max-h-[24px] dashboard-header-desktop-svg">
//                   <ChatSVG />
//                 </div>
//               </Link>
//               <Link
//                 to={"timetable"}
//                 className="rounded-full bg-[#F1F0F0] size-[44px] 2xl:size-[55px] flex justify-center items-center mx-[4px] lg:mx-[6px] xl:mx-[8px] 2xl:mx-[10px]"
//               >
//                 <div className="max-w-[22px] max-h-[22px] 2xl:max-w-[24px] 2xl:max-h-[24px] dashboard-header-desktop-svg">
//                   <TimetableSVG />
//                 </div>
//               </Link>
//             </div>
//             <div className="relative">
//               <button className="flex flex-row items-center bg-[#F1F0F0] rounded-[20px] ml-[4px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[10px]">
//                 <div className="rounded-full border-[#05878F] border-[3px] border-solid size-[44px] 2xl:size-[55px] overflow-hidden">
//                   <img src={Purity_Bliss} alt="user" />
//                 </div>
//                 <div className="hidden lg:block font-medium text-[14.5px] xl:text-[15px] leading-[18px] 2xl:leading-[22.5px] font-Poppins ml-2">
//                   <div className=" text-black">
//                     {/* <span className="mr-[4px]">{userData[0].lastName}</span> */}
//                     <span>{userData[0].firstName}</span>
//                   </div>
//                   <div className="text-[#C4C4C4]">
//                     {typeof role === "string"
//                       ? role.charAt(0).toUpperCase() +
//                         role.slice(1).toLowerCase()
//                       : "No role"}
//                   </div>
//                 </div>
//                 <div className="header-dropdown-icon ml-5 mr-5">
//                   <DropdownSVG />
//                 </div>
//               </button>
//               {/* Dropdown content */}
//               {/* <div className="absolute"></div> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="dashboard-main">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
