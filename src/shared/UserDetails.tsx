import { IProfile } from "../types/user.type";
import Phone from "../components/svg/Phone";
import Message from "../components/svg/Message";
import { convertToNormalWords } from "../utils/regex";

interface IUserDetailsProps {
  user: IProfile;
}

const formatDate = (date: Date) => {
  // const options = {
  //   day: '2-digit',
  //   month: 'long',
  //   year: 'numeric',
  // };

  return date.toLocaleString("en-GB");
};
const UserDetails = ({ user }: IUserDetailsProps) => {
  return (
    <>
      <div className="staff-img-conatiner">
        <img src={user.image} alt={user.first_name} className="staff-img" />
      </div>
      <div className="ml:w-[300px] ml:m-auto">
        <h1 className="staff-name">{user.first_name} {user.last_name}</h1>
        <h3 className="staff-subject-font">{user.subject}</h3>
        <span className="flex item-center lg:justify-center ml:justify-between ml:px-[20px] gap-[20px] mx-[20px] my-2">
          <a href={`tel:+${user.phoneNumber}`} className="contact">
            <Phone />
          </a>
          <a href={`mailto:${user.email}`} className="contact">
            <Message />
          </a>
        </span>
      </div>
      <div className="py-0 px-1">
        <div className="flex flex-col gap-1 sm:gap-1">
          {Object.entries(user).map((prop, index: number) => {
            const dateOfBirth =
              prop[1] instanceof Date ? formatDate(prop[1]).split(" ") : [];

            return (
              prop[0] !== "image" && prop[0] !== "id" &&(
                <div key={index} className="flex justify-between items-center w-[100%]">
                  <p className="text-[13px] sm:text-[15px] font-Lora font-bold">
                    {convertToNormalWords(prop[0])}
                  </p>
                  {prop[1] instanceof Date ? (
                    <div className="flex gap-2 sm:gap-3">
                      {dateOfBirth.map((date: string, index: number) => (
                        <p key={index} className="staff-details-font">
                          {date}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="staff-details-font">{prop[1]}</p>
                  )}
                </div>
              )
            );
          })}
        </div>
      </div>
      {/* <div className="action">
        <button className="edit-btn">Edit</button>
      </div> */}
    </>
  );
};

export default UserDetails;
