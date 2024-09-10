import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import { Purity_Bliss } from "../../assets/images/users";
import "../../style/addbutton.css";
interface AddButtonProps {
  addToggle: boolean;
  setAddToggle: (toggle: boolean) => void;
}

interface FormInterface {
  id: string;
  name: string;
  //   class: string;
  age: string;
  date_of_birth: Date | null;
  gender: string;
  father_name: string;
  father_occupation: string;
  father_contact: string;
  mother_name: string;
  mother_occupation: string;
  mother_contact: string;
  home_address: string;
  guardian_email: string;
  hometown: string;
  state_of_origin: string;
  country: string;
  religion: string;
  starter_pack: string;
}

const AddButton: React.FC<AddButtonProps> = ({ addToggle, setAddToggle }) => {
  const [formData, setFormData] = useState<FormInterface>({
    id: "",
    name: "",
    // class: "",
    age: "",
    date_of_birth: null,
    gender: "",
    father_name: "",
    father_occupation: "",
    father_contact: "",
    mother_name: "",
    mother_occupation: "",
    mother_contact: "",
    home_address: "",
    guardian_email: "",
    hometown: "",
    state_of_origin: "",
    country: "",
    religion: "",
    starter_pack: "",
  });
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prevState) => ({
      ...prevState,
      date_of_birth: date,
    }));
  };
  return (
    <div className={` ${addToggle ? "block" : "hidden"}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Submitted : " + JSON.stringify(formData));
          setFormData({
            id: "",
            name: "",
            age: "",
            date_of_birth: null,
            gender: "",
            father_name: "",
            father_occupation: "",
            father_contact: "",
            mother_name: "",
            mother_occupation: "",
            mother_contact: "",
            home_address: "",
            guardian_email: "",
            hometown: "",
            state_of_origin: "",
            country: "",
            religion: "",
            starter_pack: "",
          });
        }}
        className=" my-[40px] md:my-[39px] md:mx-[10px] lg:mx-[20px]"
      >
        <div className="hidden md:block mb-[25px] md:ml-[10px] font-Poppins font-medium text-lg">
          <span>ID: </span>
          <span>
            <input
              required
              type="number"
              name="id"
              id="id"
              //   value={data.id}
              value={formData.id}
              onChange={handleInputChange}
              className={`bg-white inline w-[75px] outline-none border-[rgb(16,16,16)] border px-[5px]`}
            />
          </span>
        </div>
        <div className="flex flex-col items-center mb-[40px] md:mb-[15px]">
          <div className="max-w-[200px] size-[200px] md:max-w-[150px] md:size-[150px]  rounded-full overflow-hidden mr-[5px] ml-[10px] border-2 border-solid border-[#05878F] md:border-[#ECFEFF] mb-[15px] md:mb-[5px]">
            {/* <img
              src={Purity_Bliss}
              alt="student image"
              className="size-full object-cover object-center"
              onError={(e) => (e.currentTarget.src = Purity_Bliss)}
            /> */}
            <input type="image" src="" alt="" className="size-full object-cover object-center border rounded-full"/>
          </div>
          <div className="hidden md:block font-Poppins font-medium">
            <div className="text-xl leading-[30px]">
              <input
                required
                type="text"
                name="name"
                id="name"
                // value={data.name}
                value={formData.name}
                onChange={handleInputChange}
                // ref={textAreaRef}
                placeholder="Enter student name"
                className={`bg-white text-center text-ellipsis text-nowrap whitespace-nowrap overflow-hidden w-full mb-[2px] outline-none border-[rgb(16,16,16)] border px-[5px]`}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:hidden student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="name">Name:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                // value={data.name}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="flex md:hidden student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="id">ID:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="number"
                name="id"
                id="id"
                value={formData.id}
                onChange={handleInputChange}
                // value={data.id}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="age">Age:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="number"
                name="age"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
                // value={data.age}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="date_of_birth">DOB:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <DatePicker
                required
                // selected={data.date_of_birth}
                selected={formData.date_of_birth}
                onChange={handleDateChange}
                // onChange={() => {}}
                dateFormat="dd MMMM yyyy" // Format: "05 June 2011"
                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="gender">Gender:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleInputChange}
                // value={data.gender}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="father_name">Father's Name:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="father_name"
                id="father_name"
                value={formData.father_name}
                onChange={handleInputChange}
                // value={data.father_name}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="father_occupation">Father's Occupation:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="father_occupation"
                id="father_occupation"
                value={formData.father_occupation}
                onChange={handleInputChange}
                // value={data.father_occupation}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="father_contact">Father's Contact:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="tel"
                name="father_contact"
                id="father_contact"
                value={formData.father_contact}
                onChange={handleInputChange}
                // value={data.father_contact}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="mother_name">Mother's Name:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="mother_name"
                id="mother_name"
                value={formData.mother_name}
                onChange={handleInputChange}
                // value={data.mother_name}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="mother_occupation">Mother's Occupation:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="mother_occupation"
                id="mother_occupation"
                value={formData.mother_occupation}
                onChange={handleInputChange}
                // value={data.mother_occupation}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="mother_contact">Mother's Contact:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="tel"
                name="mother_contact"
                id="mother_contact"
                value={formData.mother_contact}
                onChange={handleInputChange}
                // value={data.mother_contact}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details mb-[5px]">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="home_address">Home Address:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <textarea
                required
                // type="text"
                name="home_address"
                id="home_address"
                value={formData.home_address}
                onChange={handleInputChange}
                // value={data.home_address}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full inline md:w-full whitespace-pre-wrap  outline-none md:text-left resize-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="guardian_email">Guardian's Email:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="email"
                name="guardian_email"
                id="guardian_email"
                value={formData.guardian_email}
                onChange={handleInputChange}
                // value={data.guardian_email}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="hometown">Hometown:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="hometown"
                id="hometown"
                value={formData.hometown}
                onChange={handleInputChange}
                // value={data.hometown}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="state_of_origin">State of Origin:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="state_of_origin"
                id="state_of_origin"
                value={formData.state_of_origin}
                onChange={handleInputChange}
                // value={data.state_of_origin}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="country">Country:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="country"
                id="country"
                value={formData.country}
                onChange={handleInputChange}
                // value={data.country}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="religion">Religion:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="religion"
                id="religion"
                value={formData.religion}
                onChange={handleInputChange}
                // value={data.religion}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
          <div className="student-addbutton-db-details">
            <div className="student-addbutton-db-details-key">
              <label htmlFor="starter_pack">Starter's Pack:</label>
            </div>
            <div className="student-addbutton-db-details-property">
              <input
                required
                type="text"
                name="starter_pack"
                id="starter_pack"
                value={formData.starter_pack}
                onChange={handleInputChange}
                // value={data.starter_pack}

                className={`rounded-tl-[0px] rounded-[20px] md:rounded-[0px] py-[5px] px-[10px] md:py-0 md:px-[5px] bg-[#ECFEFF] md:bg-white w-full whitespace-nowrap truncate overflow-hidden outline-none border-[rgb(16,16,16)] border`}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end text-white font-Poppins text-[15px] md:text-[12px] xl:text-[13px]">
          <input
            type="submit"
            // onClick={() => {}}
            className="mr-[10px] rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
            value={"Submit"}
          />
          <input
            type="button"
            onClick={() => {
              setAddToggle(false);
            }}
            className="rounded-[15px] bg-[#05878F] py-[2px] px-[12px]"
            value={"Cancel"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddButton;
