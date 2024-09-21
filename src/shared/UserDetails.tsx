import { IProfile } from "../types/user.type";
import Phone from "../components/svg/Phone";
import Message from "../components/svg/Message";
import { convertToNormalWords } from "../utils/regex";
import { useEffect, useState } from "react";
import { getRole } from "../utils/authTokens";
import { useEditStaff } from "../services/api/staffApis";

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
  const [isEditing, setIsEditing] = useState(false);
  const [editableUser, setEditableUser] = useState(user);

  useEffect(() => {
    setEditableUser(user);
  }, [user]);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setEditableUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const {mutate} = useEditStaff()
  const saveChanges = () => {
    mutate(editableUser, {
      onSuccess: (response) => {
        const userdata = response;
        if (userdata) {
          console.log(userdata);
        }
      },
      onError: (error: Error) => {
        console.error("can't update user:", error);
      },
    });
    console.log(editableUser);
    // Implement saving logic here
    toggleEditing();
  };

  return (
    <>
      <div className="staff-img-conatiner">
        <img
          src={editableUser?.image}
          alt={editableUser?.first_name}
          className="staff-img"
        />
      </div>
      <div className="ml:w-[300px] ml:m-auto">
        {/* {isEditing ? (
          <>
            <input
              type="text"
              name="first_name"
              value={editableUser?.first_name}
              onChange={handleInputChange}
              className="staff-name-input hdmInput"
            />
            <input
              type="text"
              name="last_name"
              value={editableUser?.last_name}
              onChange={handleInputChange}
              className="staff-name-input hdmInput"
            />
            <input
              type="text"
              name="subject"
              value={editableUser?.subject}
              onChange={handleInputChange}
              className="staff-subject-input hdmInput"
            />
          </>
        ) : ( */}
          <>
            <h1 className="staff-name">
              {editableUser?.first_name} {editableUser?.last_name}
            </h1>
            <h3 className="staff-subject-font">{editableUser?.subject}</h3>
          </>
        {/* )} */}

        <span className="flex item-center lg:justify-center ml:justify-between ml:px-[20px] gap-[20px] mx-[20px] my-2">
          <a href={`tel:+${editableUser?.phoneNumber}`} className="contact">
            <Phone />
          </a>
          <a href={`mailto:${editableUser?.email}`} className="contact">
            <Message />
          </a>
        </span>
      </div>

      <div className="py-0 px-1">
        <div className="flex flex-col gap-1 sm:gap-1">
          {Object.entries(editableUser).map((prop, index) => {
            const dateOfBirth =
              prop[1] instanceof Date ? formatDate(prop[1]).split(" ") : [];

            return (
              prop[0] !== "image" &&
              prop[0] !== "id" && (
                <div
                  key={index}
                  className="flex justify-between items-center w-[100%]"
                >
                  <p className="text-[13px] sm:text-[15px] font-Lora font-bold">
                    {convertToNormalWords(prop[0])}
                  </p>
                  {isEditing ? (
                    prop[1] instanceof Date ? (
                      <div className="flex gap-2 sm:gap-3">
                        {dateOfBirth.map((date, index) => (
                          <input
                            key={index}
                            name={prop[0]}
                            value={date}
                            onChange={handleInputChange}
                            className="staff-details-input hdmInput"
                          />
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        name={prop[0]}
                        value={prop[1]}
                        onChange={handleInputChange}
                        className="staff-details-input hdmInput"
                      />
                    )
                  ) : prop[1] instanceof Date ? (
                    <div className="flex gap-2 sm:gap-3">
                      {dateOfBirth.map((date, index) => (
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
      {getRole() === "admin" && (
        <div className="action">
          {isEditing ? (
            <button className="save-btn" onClick={saveChanges}>
              Save
            </button>
          ) : (
            <button className="edit-btn" onClick={toggleEditing}>
              Edit
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default UserDetails;
