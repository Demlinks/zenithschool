// import apiClient from "./apiClient";

import apiClient from "../apiClient";

export const getClassStatId = (id: number) => {
  return apiClient.get(`class_stat/${id}`);
};
