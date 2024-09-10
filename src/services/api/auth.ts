import { useMutation } from "@tanstack/react-query";
import apiClient from "./apiClient";

export const signIn = (data: {
  email: string;
  password: string;
  role: string;
}) => {
  return apiClient.post(`login/?role=${data.role}`, {
    email: data.email,
    password: data.password,
  });
};

export const useSignIn = () => {
  return useMutation({
    mutationFn: signIn,
  });
};
