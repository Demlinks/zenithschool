import apiClient from "./apiClient";

export const getStaffs = ()=>{
    return apiClient.get(`staff/`);
}