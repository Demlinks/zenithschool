// AddStaffForm.tsx
import React, { useState } from "react";
import { IProfile } from "../../types/user.type";

interface AddStaffFormProps {
  onSubmit: (staff: Partial<IProfile>) => void;
  onClose: () => void;
}

const AddStaffForm: React.FC<AddStaffFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState<Partial<IProfile>>({
    title: "",
    first_name: "",
    last_name: "",
    age: 0,
    image: "",
    subject: "",
    dob: "",
    gender: "",
    phoneNumber: "",
    homeAddress: "",
    email: "",
    homeTown: "",
    stateOfOrigin: "",
    classTeacher: "",
    qualification: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Title</label>
        <select
          name="title"
          value={formData.title}
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          onChange={handleChange}
        >
          <option value="mr">Mr.</option>
          <option value="mrs">Mr.</option>
          <option value="miss">Miss</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">First Name</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Last Name:</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">
          Middle Name:
        </label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="middle_name"
          value={formData.middle_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Email:</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">DOB:</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">
          Home Address
        </label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="tel"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">
          State Of Origin
        </label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="stateOfOrigin"
          value={formData.stateOfOrigin}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Home Town</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="homeTown"
          value={formData.homeTown}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Country</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">
          Qualification
        </label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Subject</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <label className="font-Lora text-[15px] font-medium">Class</label>
        <input
          className="w-4/6 h-full border-2 border-solid rounded-[15px] py-[5px] pl-3 pr-[40px] outline-none font-Poppins text-[15px] focus:border-[#05878F] hover:border-[#05878F] border-[#05878F] focus:border-2"
          type="class"
          name="classTeacher"
          value={formData.classTeacher}
          onChange={handleChange}
        />
      </div>

      <menu className="flex justify-between">
        <button
          type="submit"
          className=" bg-[#05878F] cursor-pointer px-[25px] font-Lora text-white self-center rounded-[25px] text-xl font-bold py-[7px] w-full sm:w-auto text-center mt-[23px] md:mt-[23px]  md:mb-[2px]"
        >
          Add Staff
        </button>
        <button
          type="button"
          onClick={() => onClose()}
          className=" bg-red-500 cursor-pointer px-[15px] font-Lora text-white self-center rounded-[25px] text-xl font-bold py-[7px] w-full sm:w-auto text-center mt-[23px] md:mt-[23px]  md:mb-[2px]"
        >
          Close
        </button>
      </menu>
    </form>
  );
};

export default AddStaffForm;
