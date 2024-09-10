import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import data from "../../../services/api/db.json";
import {
  Add,
  Filter,
  FilterMobile,
  // PathRight,
} from "../../../assets/images/dashboard/students";
import { Purity_Bliss } from "../../../assets/images/users";
import CallSVG from "../../../components/svg/student/CallSVG";
import MessageSVG from "../../../components/svg/student/MessageSVG";
import AddButton from "../../../components/admin-dashboard/AddButton";
// import CircularProgressBar from "../../../components/dashboard/CircularProgressBar";
// import {
//   PathDown,
//   PathRight,
//   PathUp,
// } from "../../../assets/images/dashboard/students";
// import GuardianSVG from "../../../components/svg/GuardianSVG";
const tableHeader: string[] = [
  "Name",
  "ID",
  "Age",
  "Gender",
  "Starter's Pack",
  "Contact",
];
interface Student {
  father_contact: string;
  guardian_email: string;
  starter_pack: string;
  gender: string;
  age: number;
  id: string;
  image_url: string;
  name: string;
  class: string;
}
const StudentAdminNames: React.FC = () => {
  // Error Go Back
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  // const [tableActive, setTableActive] = useState<number | null>(null);
  // const { id } = useParams();
  // const navigate = useNavigate();
  const [editable, setEditable] = useState<boolean>(false);
  const [addToggle, setAddToggle] = useState<boolean>(false);
  const [classes] = useState<string[]>([
    "creche",
    "k.g 1",
    "k.g 2",
    "nursery 1",
    "nursery 2",
    "primary 1",
    "primary 2",
    "primary 3",
    "primary 4",
    "primary 5",
  ]);
  const { id } = useParams();
  const classNameID = useLocation()
    .pathname.split("/")
    .map((decodeURI) => decodeURIComponent(decodeURI))
    .find((pathname) => classes.includes(pathname));

  //   const dataa = data.flatMap((entry) => {
  //     return entry.student?.map((entry) => {
  //     return entry.class;
  //     });
  //   });
  //   const [studentDropDown, setStudentDropDown] = useState<string>("");
  const [studentData, setStudentData] = useState<Student[]>([]);
  useEffect(() => {
    const studentData = data.flatMap(
      (data) =>
        data.student
          ?.filter(
            (studentData) => studentData.class.toLowerCase() === classNameID
          )
          .map((studentData) => ({
            ...studentData,
            age: Number(studentData.age),
          })) || []
    );
    console.log(studentData);
    setStudentData(studentData);
  }, [classNameID]);
  return (
    <div className="student-names">
      <div className="student-names-list">
        <div className="student-names-list-header">
          <div className="student-names-list-header1">
            Students <span className="hidden md:inline-block">Database</span>
          </div>
          <div className="student-names-list-header2">
            {classNameID && classes.includes(classNameID)
              ? classNameID?.toUpperCase()
              : "Error"}
          </div>
          {classNameID && classes.includes(classNameID) ? (
            <div className="student-names-list-header3">
              <button
                className={`mr-[10px] lg:mr-[15px] xl:mr-[20px] ${
                  addToggle
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-100 cursor-pointer"
                }`}
                disabled={addToggle ? true : false}
              >
                <div className="max-w-2 max-h-2 mr-[5px]">
                  <img
                    src={Filter}
                    alt="filter"
                    className="object-contain object-center size-full"
                  />
                </div>
                <div>Filter</div>
              </button>
              <button
                onClick={() => setAddToggle(true)}
                className={
                  editable
                    ? `opacity-30 cursor-not-allowed`
                    : "opacity-100 cursor-pointer"
                }
                disabled={editable ? true : false}
              >
                <div className="max-w-2 max-h-2 mr-[5px]">
                  <img
                    src={Add}
                    alt="add"
                    className="object-contain object-center size-full"
                  />
                </div>
                <div>Add</div>
              </button>
            </div>
          ) : null}
        </div>
        <div className="student-names-list-container">
          <>
            {/* Mobile view */}
            {classNameID && classes.includes(classNameID) ? (
              <>
                <div className="block md:hidden grow">
                  <div className="student-names-list-container-mheader">
                    <div className="font-Lora font-bold mr-5">
                      <div className="text-[15px] leading-[19.2px] text-[#05878F]">
                        TOTAL
                      </div>
                      <div className="text-lg text-center leading-[23.04px]">
                        {studentData.length || 0}
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <button
                        className={`mr-[10px] lg:mr-[15px] xl:mr-[20px] ${
                          addToggle
                            ? "opacity-30 cursor-not-allowed"
                            : "opacity-100 cursor-pointer"
                        }`}
                        disabled={addToggle ? true : false}
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
                      <button
                        onClick={() => setAddToggle(true)}
                        className={
                          editable
                            ? `opacity-30 cursor-not-allowed`
                            : "opacity-100 cursor-pointer"
                        }
                        disabled={editable ? true : false}
                      >
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
                    </div>
                  </div>
                  {addToggle ? (
                    <AddButton
                      setAddToggle={setAddToggle}
                      addToggle={addToggle}
                    />
                  ) : (
                    <Outlet
                      context={{
                        studentData,
                        classNameID,
                        editable,
                        setEditable,
                      }}
                    />
                  )}
                </div>
                {/* Desktop view */}
                <table className="w-full border-collapse border-none hidden md:table rounded-[20px] shadow-[0px_1px_25px_0px_#389FA61A]">
                  <thead>
                    <tr className="table-row-header">
                      {tableHeader.map((header, index) => (
                        <th key={index}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  {studentData.length > 0 ? (
                    <tbody>
                      {studentData?.map((data, index) => (
                        <tr
                          key={index}
                          className={
                            id === data.id
                              ? "table-row-details-active table-row-details"
                              : "table-row-details"
                          }
                          onClick={() =>
                            // setTableActive(tableActive === index ? null : index),
                            navigate(id === data.id ? "" : data.id)
                          }
                        >
                          <td>
                            <div className="flex flex-row items-center">
                              <input
                                type="checkbox"
                                name="name"
                                id="name"
                                className=" size-[14px] checked:bg-black accent-[#05878F] appearance-auto hover:accent-[#05878F] border-[#05878F] cursor-pointer"
                                onChange={() => {}}
                                checked={id === data.id ? true : false}
                              />
                              <div className="max-w-[20px] size-[20px] h-[20px] rounded-full overflow-hidden mr-[5px] ml-[10px]">
                                <img
                                  src={data.image_url || Purity_Bliss}
                                  alt="student image"
                                  className="size-full object-cover object-center"
                                  onError={(e) =>
                                    (e.currentTarget.src = Purity_Bliss)
                                  }
                                />
                              </div>
                              <div className="md:max-w-[130px] lg:max-w-[170px] whitespace-nowrap overflow-hidden text-ellipsis">
                                {data.name}
                              </div>
                            </div>
                          </td>
                          <td className="">{data.id}</td>
                          <td className="">{data.age}</td>
                          <td className="">{data.gender}</td>
                          <td className="">{data.starter_pack}</td>
                          <td className="text-center">
                            <div className="flex flex-row justify-center">
                              <Link
                                to={`tel:${data.father_contact}`}
                                className={`mr-[15px] size-[20px] rounded-full flex justify-center items-center ${
                                  id === data.id
                                    ? "active-call-contact bg-[#05878F]"
                                    : "bg-[white]"
                                }`}
                              >
                                <div className="max-w-[10px] size-[10px]">
                                  <CallSVG />
                                </div>
                              </Link>
                              <Link
                                to={`mailto:${data.guardian_email}`}
                                className={`size-[20px] rounded-full flex justify-center items-center ${
                                  id === data.id
                                    ? "active-message-contact bg-[#05878F]"
                                    : "bg-[white]"
                                }`}
                              >
                                <div className="max-w-[10px] size-[10px]">
                                  <MessageSVG />
                                </div>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td
                          className="py-4 font-Lora text-center font-bold my-[10%] lg:my-[15%]"
                          colSpan={6}
                        >
                          Data Not Available
                        </td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </>
            ) : (
              <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px-145.53px-40px)] ml:min-h-[calc(100vh-80px-148.03px-40px)] md:min-h-full">
                <div className="font-bold text-[30px] md:text-[23px]">
                  404 Not Found
                </div>
                <div className="text-xl mt-2">This class does not exist</div>
                <button
                  onClick={goBack}
                  className="text-base border py-2 px-4 border-solid rounded-lg text-nowrap border-[#05878F] text-white bg-[#05878F] mt-5"
                >
                  Go Back
                </button>
              </div>
            )}
          </>
        </div>
      </div>
      <div className="student-names-database">
        {addToggle ? (
          <AddButton setAddToggle={setAddToggle} addToggle={addToggle} />
        ) : id && classes.includes(id) ? (
          <div className="flex justify-center items-center pt-[40px] md:pt-[39px] min-h-[calc(100%-40px)] px-10">
            <div className="text-center">
              Please click on a student to display their details.
            </div>
          </div>
        ) : (
          <Outlet
            context={{ studentData, classNameID, editable, setEditable }}
          />
        )}
        {/* Nothing to show yet */}
      </div>
    </div>
  );
};

export default StudentAdminNames;
