import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { Purity_Bliss } from "../../../assets/images/users";
import CallSVG from "../../../components/svg/student/CallSVG";
import MessageSVG from "../../../components/svg/student/MessageSVG";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const StudentAdminDatabase: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [disablePagination, setDisablePagination] = useState({
    prev: false,
    next: false,
  });
  // const textAreaRef = useRef<HTMLTextAreaElement>(null);

  interface Student {
    country?: string;
    religion?: string;
    state_of_origin?: string;
    hometown?: string;
    home_address?: string;
    mother_name?: string;
    mother_occupation?: string;
    mother_contact?: number;
    father_occupation?: string;
    father_name?: string;
    date_of_birth?: Date;
    father_contact?: number;
    guardian_email?: string;
    starter_pack?: string;
    gender?: string;
    age?: number;
    id?: string;
    image_url?: string;
    name?: string;
    class?: string;
  }
  interface StudentContext {
    studentData: Student[];
    classNameID: string;
    editable: boolean;
    setEditable: React.Dispatch<React.SetStateAction<boolean>>;
  }
  const { studentData, classNameID, editable, setEditable } =
    useOutletContext<StudentContext>();
  const [filteredStudent, setFilteredStudent] = useState<Student[]>([]);
  useEffect(() => {
    const filteredID =
      (classNameID &&
        id &&
        studentData.filter(
          (student) =>
            student.class?.toUpperCase() === classNameID.toUpperCase() &&
            student.id === id
        )) ||
      [];
    setFilteredStudent(filteredID);

    // Pagination disable function
    const allStudentsInClass = studentData.filter(
      (student) => student.class?.toUpperCase() === classNameID?.toUpperCase()
    );
    const currentIndex = allStudentsInClass.findIndex(
      (student) => student.id === id
    );
    setDisablePagination({
      prev: currentIndex <= 0,
      next: currentIndex >= allStudentsInClass.length - 1,
    });
  }, [classNameID, id, studentData]);

  const handlePrev = () => {
    const filteredStudent =
      (classNameID &&
        studentData.filter(
          (student) =>
            student.class?.toUpperCase() === classNameID?.toUpperCase()
        )) ||
      [];
    const currentIndex = filteredStudent.findIndex(
      (student) => student.id === id
    );
    currentIndex > 0 &&
      navigate(
        `/dashboard/student/${classNameID}/${
          filteredStudent[currentIndex - 1].id
        }`
      );
  };
  const handleNext = () => {
    const filteredStudent = studentData.filter(
      (student) => student.class?.toUpperCase() === classNameID.toUpperCase()
    );
    const currentIndex = filteredStudent.findIndex(
      (student) => student.id === id
    );
    currentIndex < filteredStudent.length - 1 &&
      navigate(
        `/dashboard/student/${classNameID}/${
          filteredStudent[currentIndex + 1].id
        }`
      );
  };
  return (
    <>
      {filteredStudent.length > 0 ? (
        filteredStudent.map((data, index) => (
          <div key={index}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              className=" my-[40px] md:my-[39px] md:mx-[10px] lg:mx-[20px]"
            >
              <div className="hidden md:block mb-[25px] md:ml-[10px] font-Poppins font-medium text-lg">
                <span>ID: </span>
                <span>
                  <input
                    type="number"
                    name="id"
                    id="id"
                    value={data.id}
                    disabled={editable ? false : true}
                    className={`bg-white inline w-[75px] outline-none ${
                      editable
                        ? "border-[rgb(16,16,16)] border px-[5px]"
                        : "border-none"
                    }`}
                  />
                </span>
              </div>
              <div className="flex flex-col items-center mb-[40px] md:mb-[15px]">
                <div className="max-w-[200px] size-[200px] md:max-w-[150px] md:size-[150px]  rounded-full overflow-hidden mr-[5px] ml-[10px] border-2 border-solid border-[#05878F] md:border-[#ECFEFF] mb-[15px] md:mb-[5px]">
                  <img
                    src={data.image_url || Purity_Bliss}
                    alt="student image"
                    className="size-full object-cover object-center"
                    onError={(e) => (e.currentTarget.src = Purity_Bliss)}
                  />
                </div>
                <div className="hidden md:block font-Poppins font-medium">
                  <div className="text-xl leading-[30px]">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={data.name}
                      disabled={editable ? false : true}
                      // ref={textAreaRef}
                      className={`bg-white text-center text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full mb-[2px] outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border px-[5px]"
                          : "border-none"
                      }`}
                    />
                  </div>

                  <div className="text-[15px] leading-[22.5px] text-center">
                    <input
                      type="text"
                      name="class"
                      id="class"
                      value={data.class?.toUpperCase()}
                      disabled={editable ? false : true}
                      className={`bg-white text-center outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border px-[5px]"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-around md:justify-normal w-full md:w-auto">
                  <Link
                    to={`tel:${data.father_contact}`}
                    className="student-db-call mr-[10px]"
                  >
                    <div className="max-w-[18.47px] h-auto">
                      <CallSVG />
                    </div>
                  </Link>
                  <Link
                    to={`mailto:${data.guardian_email}`}
                    className="student-db-email"
                  >
                    <div className="max-w-[18.47px] h-auto ml-[1px]">
                      <MessageSVG />
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <div className="flex md:hidden student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="name">Name:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={data.name}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="flex md:hidden student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="id">ID:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="number"
                      name="id"
                      id="id"
                      value={data.id}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="age">Age:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="number"
                      name="age"
                      id="age"
                      value={data.age}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="date_of_birth">DOB:</label>
                  </div>
                  <div className="student-db-details-property">
                    <DatePicker
                      selected={data.date_of_birth}
                      onChange={() => {}}
                      disabled={editable ? false : true}
                      dateFormat="dd MMMM yyyy" // Format: "05 June 2011"
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="gender">Gender:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="gender"
                      id="gender"
                      value={data.gender}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="father_name">Father's Name:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="father_name"
                      id="father_name"
                      value={data.father_name}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="father_occupation">
                      Father's Occupation:
                    </label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="father_occupation"
                      id="father_occupation"
                      value={data.father_occupation}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="father_contact">Father's Contact:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="tel"
                      name="father_contact"
                      id="father_contact"
                      value={data.father_contact}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="mother_name">Mother's Name:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="mother_name"
                      id="mother_name"
                      value={data.mother_name}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="mother_occupation">
                      Mother's Occupation:
                    </label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="mother_occupation"
                      id="mother_occupation"
                      value={data.mother_occupation}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="mother_contact">Mother's Contact:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="tel"
                      name="mother_contact"
                      id="mother_contact"
                      value={data.mother_contact}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details mb-[5px]">
                  <div className="student-db-details-key">
                    <label htmlFor="home_address">Home Address:</label>
                  </div>
                  <div className="student-db-details-property">
                    <textarea
                      // type="text"
                      name="home_address"
                      id="home_address"
                      value={data.home_address}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full inline md:w-full whitespace-pre-wrap outline-none text-left resize-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="guardian_email">Guardian's Email:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="email"
                      name="guardian_email"
                      id="guardian_email"
                      value={data.guardian_email}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="hometown">Hometown:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="hometown"
                      id="hometown"
                      value={data.hometown}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="state_of_origin">State of Origin:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="state_of_origin"
                      id="state_of_origin"
                      value={data.state_of_origin}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="country">Country:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="country"
                      id="country"
                      value={data.country}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="religion">Religion:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="religion"
                      id="religion"
                      value={data.religion}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
                <div className="student-db-details">
                  <div className="student-db-details-key">
                    <label htmlFor="starter_pack">Starter's Pack:</label>
                  </div>
                  <div className="student-db-details-property">
                    <input
                      type="text"
                      name="starter_pack"
                      id="starter_pack"
                      value={data.starter_pack}
                      disabled={editable ? false : true}
                      className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none ${
                        editable
                          ? "border-[rgb(16,16,16)] border"
                          : "border-none"
                      }`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-end text-white font-Poppins text-[15px] md:text-[12px] xl:text-[13px]">
                <input
                  type="button"
                  onClick={() =>
                    editable ? alert("Submitted") : setEditable(true)
                  }
                  className="mr-[10px] rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
                  value={editable ? "Submit" : "Edit"}
                />
                <input
                  type="button"
                  onClick={() =>
                    editable
                      ? setEditable(false)
                      : navigate("/dashboard/results")
                  }
                  className="rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
                  value={editable ? "Cancel" : "Result"}
                />
              </div>
            </form>
            <hr className="max-w-[198px] h-[1px] block mx-auto md:hidden bg-[#C4C4C4] border-none font-extrabold" />
            {/* Pagination */}
            <div className="student-db-pagination">
              <button onClick={handlePrev} disabled={disablePagination.prev}>
                <span className="text-[#374957]">«</span>
                <span className="ml-[5px]">Prev</span>
              </button>
              <button onClick={handleNext} disabled={disablePagination.next}>
                <span className="mr-[5px]">Next</span>
                <span className="text-[#374957]">»</span>
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center pt-[40px] md:pt-[39px] min-h-[calc(100%-40px)]">
          <div>Student details not found</div>
        </div>
      )}
    </>
  );
};

export default StudentAdminDatabase;
