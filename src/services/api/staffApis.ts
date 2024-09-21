import { useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { IEvent, IProfile } from "../../types/user.type";
import { getUser } from "../../utils/authTokens";

export const getStaffs = () => {
  return apiClient.get(`staff/`);
};

export const getStaff = () => {
    const user = getUser()
  return apiClient.get(`staff/${user.id}`);
};

export const getCalender = () => {
  return apiClient.get(`/calender/`);
};

export const getAllTimetables = () => {
  return apiClient.get(`/timetable/`);
};

export const createStaff = ({
  title,
  first_name,
  last_name,
  middle_name,
  dob,
  gender,
  homeAddress,
  stateOfOrigin,
  homeTown,
  country,
  qualification,
  subject,
  email,
  classTeacher,
}: Partial<IProfile>) => {
  return apiClient.post(`/staff/`, {
    title: title,
    first_name: first_name,
    last_name: last_name,
    middle_name: middle_name,
    date_of_birth: dob,
    gender: gender,
    home_address: homeAddress,
    state_of_origin: stateOfOrigin,
    home_town: homeTown,
    country: country,
    qualification: qualification,
    subject: subject,
    email: email,
    assigned_to: classTeacher,
  });
};

export const editStaff = ({
    id,
  title,
  first_name,
  last_name,
  middle_name,
  dob,
  gender,
  homeAddress,
  stateOfOrigin,
  homeTown,
  country,
  qualification,
  subject,
  email,
  classTeacher,
}: Partial<IProfile>) => {
  return apiClient.patch(`/staff/${id}/`, {
    title: title,
    first_name: first_name,
    last_name: last_name,
    middle_name: middle_name,
    date_of_birth: dob,
    gender: gender,
    home_address: homeAddress,
    state_of_origin: stateOfOrigin,
    home_town: homeTown,
    country: country,
    qualification: qualification,
    subject: subject,
    email: email,
    assigned_to: classTeacher,
  });
};

export const createCalender = ({ event, date }: IEvent) => {
  return apiClient.post(`/calender/`, {
    event,
    date,
  });
};

export const useCreateStaff = () => {
  return useMutation({
    mutationFn: createStaff,
  });
};

export const useEditStaff = () => {
  return useMutation({
    mutationFn: editStaff,
  });
};
export const useCreateCalender = () => {
  return useMutation({
    mutationFn: createCalender,
  });
};
