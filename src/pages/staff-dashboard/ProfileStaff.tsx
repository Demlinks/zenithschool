// import CallImg from "../../assets/images/profile/call.png";
import { useState } from "react";
import {
  PhoneIcon as PhoneSolid,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/outline";
import profileImage from "../../assets/images/users/Rectangle 101.png";

const formatDate = (date: Date) => {
  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const MobileHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <header className="profile_header">
      <div className="profile-box">
        <p className="text-[22px] text-white font-bold font-Lora">{title}</p>
        <div className="px-6 py-1.5 bg-white rounded-[10px]">
          <p className="text-[18px] text-clr1 font-bold font-Lora">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

const ProfileStaff: React.FC = () => {
  const [studentIndex] = useState(0);

  // const toggleStudentFn: (index: number) => void = (index) => {
  //   setStudentIndex(index);
  // };

  const staff = [
    {
      Name: "Mrs Sarah Jones",
      ID: "7253D",
      DOB: "11-August-1992",
      Subject: "English",
      Gender: "Female",
      Phone: "2348023456789",
      "Home Address": "123 Main St, City",
      "Email Address": "purity.bliss@example.com",
      Hometown: "Hometown",
      "State Of Origin": "State",
      "Class Teacher": "JSS 1A",
      Qualification: "PhD Education",
    },
  ];

  const profileData: { [key: string]: string } = staff[studentIndex];

  const profileProps = Object.keys(profileData).map((prop) => prop.toString());

  const profileName = profileData["Name"];
  const profileClass = profileData["Class"];
  const age =
    new Date().getFullYear() - new Date(profileData["DOB"]).getFullYear();

  const otherProps = profileProps.filter(
    (prop) =>
      prop !== "Name" && prop !== "ID" && prop !== "Class" && prop !== "DOB"
  );

  return (
    <section className="">
      {/* mobile screen */}
      <div className="block md:hidden bg-clr1">
        <MobileHeader title="Profile" subtitle="Staff Database" />

        <div className='rounded-t-[30px] flex flex-col gap-0 md:gap-5 pt-[20px] md:pt-0 md:mt-[30px] md:px-[30px] bg-white'>
          <div className="profile-section">
            <div className="profile-thumbnail flex flex-col">
              <div className="profile-picture">
                <img
                  src={profileImage}
                  alt="profile image"
                  className="block scale-[1.5]"
                />
              </div>
              <div className="flex justify-between w-[45%] items-center">
                <a
                  href={`tel:+${profileData["Phone"]}`}
                  className="p-[10px] rounded-full shadow-shadow3 bg-clr1"
                >
                  <PhoneSolid className="size-4 text-[#fff] rounded-2 " />
                </a>
                <a
                  href={`mailto:${profileData["Email Address"]}`}
                  className="p-[10px] rounded-full shadow-shadow3 bg-clr1"
                >
                  <EnvelopeIcon className="size-4 text-[#fff] rounded-2 bg-clr1" />
                </a>
              </div>
            </div>

            <div className="w-full py-10 px-6">
              <div className="flex flex-col gap-5 sm:gap-6">
                {profileProps.map((prop: string, index: number) => {
                  const profileValue = profileData[prop];

                  const value: Date | string =
                    prop === "DOB" ? new Date(profileValue) : profileValue;

                  const dateOfBirth =
                    value instanceof Date ? formatDate(value).split(" ") : [];

                  return (
                    <div
                      key={index}
                      className="flex justify-between items-start"
                    >
                      <p className="text-[13px] sm:text-[15px] font-Lora font-bold">
                        {prop}
                      </p>
                      {value instanceof Date ? (
                        <div className="flex gap-2 sm:gap-3">
                          {dateOfBirth.map((date: string, index: number) => (
                            <p key={index} className="student-details">
                              {date}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="student-details">{value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* desktop screen */}
      <div className="hidden md:block px-[30px]">
        <div className="profile-wrapper-desktop">
          <div className="profile-wrapper-picture-desktop">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={profileImage}
                alt="profile image"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-10 w-full lg:basis-[45%] pl-10 pr-10 lg:pr-4 py-6 ">
            <div className="flex flex-col gap-3">
              
              <div className="flex flex-col items-center gap-1.5">
                <p className="lg:text-[23px] xl:text-[28px] font-Lora font-bold">
                  {profileName.split(" ").splice(0, 2).join(" ")}
                </p>
                <p className="lg:text-[13px] xl:text-[18px] font-Poppins font-medium">
                  {profileClass}
                </p>
                <div className="flex justify-center items-center gap-3">
                  <a
                    href={`tel:+${profileData["Phone"]}`}
                    className="p-5 rounded-full shadow-shadow3"
                  >
                    <PhoneIcon className="size-3 xl:size-4 text-clr1 rounded-2 bg-[#fff]" />
                  </a>
                  <a
                    href={`mailto:${profileData["Email Address"]}`}
                    className="p-5 rounded-full shadow-shadow3"
                  >
                    <EnvelopeIcon className="size-3 xl:size-4 text-clr1 rounded-2 bg-[#fff]" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 xl:gap-2.5">
                <div className="flex justify-between items-center">
                  <p className="profile-student-prop">Age:</p>
                  <p className="profile-student-value">{age.toString()}</p>
                </div>
                {otherProps.map((prop, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center"
                  >
                    <p className="profile-student-prop">{prop}:</p>
                    <p className="profile-student-value">
                      {profileData[prop].toString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileStaff;
