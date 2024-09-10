// import apiClient from "./apiClient";

import apiClient from "../apiClient";

export const getBaseClass = () => {
  return apiClient.get(`baseclass/`);
};
