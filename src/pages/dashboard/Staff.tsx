import React, { useEffect, useMemo, useState } from "react";
import { IProfile } from "../../types/user.type";
// import profileImage from "../../assets/images/users/Rectangle 101.png";
import UserDetails from "../../shared/UserDetails";
import Pagination from "../../shared/Pagination";
// import {
//   staff0,
//   staff1,
//   staff10,
//   staff11,
//   staff12,
//   staff13,
//   staff14,
//   staff15,
//   staff16,
//   staff2,
//   staff3,
//   staff4,
//   staff5,
//   staff6,
//   staff7,
//   staff8,
//   staff9,
// } from "../../assets/images/users/staffs";
import { useQuery } from "@tanstack/react-query";
import { getStaffs } from "../../services/api/staffApis";
import Loader from "../../shared/Loader";

const Staff: React.FC = () => {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["staff"],
    queryFn: () => getStaffs(),
  });
  const staffs: IProfile[] =  useMemo(() => (data && data.data.data) || [], [data]);
  // CONSOLE LOGGING ERROR IF REQUEST FAILS
  isError && console.log(error);
  const [staffProfile, setStaffProfile] = useState<IProfile>({
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

  // Use useEffect to set the first staff profile once data is available
  useEffect(() => {
    if (staffs.length > 0) {
      setStaffProfile(staffs[0]);
    }
  }, [staffs]);

  const handleNext = () => {
    staffs.forEach((element: IProfile, index: number) => {
      element.first_name === staffProfile.first_name &&
        index <= staffs.length &&
        setStaffProfile({ ...staffs[index + 1] });
    });
  };
  const handlePrev = () => {
    staffs.forEach((element: IProfile, index: number) => {
      element.first_name === staffProfile.first_name &&
        index >= 1 &&
        setStaffProfile({ ...staffs[index - 1] });
    });
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="staff">
        <div className="staff-header">Staff</div>
        <div className="staff-sub-header">
          <p>Staff Database</p>
        </div>
        <div className="staff-container">
          <div className="staffs">
            <div className="staffs-header">
              <h1 className="staff-heading">Staff</h1>
              <h2 className="total">
                TOTAL :- <span>{staffs.length}</span>
              </h2>
              <div className="flex gap-[20px]">
                <button className="filter-btn">
                  <span>+</span>
                  Filter
                </button>
                <button className="add-btn">
                  <span>+</span>
                  Add
                </button>
              </div>
            </div>
            <div className="cards">
              {staffs &&
                staffs.map((staff: IProfile, index: number) => (
                  <div key={index} className="staff-card zs-normal-btn">
                    <img
                      src={staff.image}
                      alt={staff.first_name}
                      className="rounded-full scale-[1.1] w-[50px] h-[50px] "
                    />
                    <div
                      className={`staff-card-details ${
                        staff.first_name === staffProfile.first_name
                          ? "text-[#05878F]"
                          : ""
                      }`}
                    >
                      <h3 className="staff-card-name">
                        {staff.first_name} {staff.last_name}
                      </h3>
                      <h5 className="staff-card-subject">{staff.subject}</h5>
                      <button
                        className="staff-card-btn"
                        onClick={() => setStaffProfile(staff)}
                      >
                        View profile
                      </button>
                    </div>
                  </div>
                ))}
            </div>
            <div className="staffs-pagination">
              <Pagination next={handleNext} prev={handlePrev} />
            </div>
          </div>
          <div className="staff-details">
            <h1 className="staff-profile">Staffs Profile</h1>
            <UserDetails user={staffProfile} />
          </div>
          <div className="pagination w-full flex md:hidden justify-between px-[50px] pb-[20px]">
            <Pagination next={handleNext} prev={handlePrev} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staff;
