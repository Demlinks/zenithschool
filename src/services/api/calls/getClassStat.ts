// import apiClient from "./apiClient";

import apiClient from "../apiClient";

export const getClassStat = () => {
  return apiClient.get(`class_stat`);
};
