// import apiClient from "./apiClient";

import apiClient from "../apiClient";

export const getBaseClass = () => {
  return apiClient.get(`baseclass/`);
};

export const getClass = () => {
  return apiClient.get(`classes/`);
};

export const getClassStudentsId = (id: number) => {
  return apiClient.get(`classes/${id}/student/`);
};

// Not yet used
// export const getStudentId = (id : number | string) => {
//   return apiClient.get(`classes/${id}/student/3`);
// };

export const getClassStatId = (id: number | null) => {
  return apiClient.get(`class_stat/${id}`);
};
// import apiClient from "./apiClient";

export const getClassStat = () => {
  return apiClient.get(`class_stat`);
};

export const getHomeAnalytic = () => {
  return apiClient.get(`homeanalytic`);
};

export const getStudents = () => {
  return apiClient.get(`students`);
};

export const getStudentsId = (id: number) => {
  return apiClient.get(`students/${id}`);
};
