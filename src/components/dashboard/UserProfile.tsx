import React from "react";
import { UserInterface } from "../../types/user.type";
interface Props {
  user: UserInterface;
  toggleProfile: boolean;
  Purity_Bliss: string;
  role: string;
}
const UserProfile: React.FC<Props> = ({
  user,
  role,
  toggleProfile,
  Purity_Bliss,
}) => {
  return (
    <div
      className={`text-[14px] absolute top-[50px] md:top-[60px] xl:top-[70px] 2xl:top-[75px] bg-white shadow-shadow1 rounded-lg -right-2 w-[240px] md:w-[250px] lg:w-[300px] overflow-hidden ${
        toggleProfile ? "block" : "hidden"
      }`}
    >
      <div className="flex flex-row gap-2 bg-[#05878F]/90 text-white items-center p-3">
        <div className="rounded-full border-[white] border-[3px] border-solid size-[44px] 2xl:size-[55px] overflow-hidden">
          <img src={Purity_Bliss} alt={`${user.lastName} ${user.firstName}`} />
        </div>
        <div>
          <div className="my-1 text-base leading-[15px] font-bold">{`${user.lastName} ${user.firstName}`}</div>
          <div className="flex flex-row items-center gap-2">
            <div
              className={`rounded-full size-[10px] ${
                user.is_active ? "bg-green-400" : "bg-red-500"
              }`}
            ></div>
            <div>{user.is_active ? "Active" : "Inactive"}</div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <div >
          <span className="font-medium mr-1 ">Email Addr.: </span>
          <span>{user.email}</span>
        </div>
        <div >
          <span className="font-medium mr-1 ">Phone No: </span>
          <span>{user.phoneNumber}</span>
        </div>
        <div >
          <span className="font-medium mr-1 ">Role: </span>
          <span>
            {user.role.charAt(0).toUpperCase() +
              user.role.slice(1).toLowerCase()}
          </span>
        </div>
      </div>
      {role.toLocaleLowerCase() === "guardian" && (
        <div className="mx-4 my-3">
          <hr className="" />
          <div className="mt-3">
            <div>List of Children</div>
            <div>
              {/* Demo */}
              <div>Yakub Adebare</div>
              <div>Hammed Bello</div>
              <div>Shittu Moshood Ademola</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
