import apiClient from "../apiClient";

export const addStudent = async (
  newData: object) => {
  const response = await apiClient.post(`/students/`, newData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
