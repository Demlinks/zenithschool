// import apiClient from "./apiClient";

import apiClient from "../apiClient";

export const getClass = (id: number) => {
  return apiClient.get(`classes/${id}`);
};
