// import axios from "axios";
// import { BASE_URL } from "../../api";

import axios from "axios";
import { LoginInput } from "../pages/login.page";
import { RegisterInput } from "../pages/register.page";
import { GenericResponse, ILoginResponse, IUserResponse } from "../types";
import { authApi } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

export const signUpUserFn = async (user) => {
  const response = await authApi.post("/auth/v1/admin/sign-up", user);
  return response.data;
};

export const loginUserFn = async (user) => {
  const response = await authApi.post("/auth/v1/login/admin/", user);
  return response.data;
};

export const verifyEmailFn = async (otp_code) => {
  const response = await authApi.get(`/auth/v1/confirm/otp/${otp_code}`);
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get("/auth/v1/logout/");
  return response.data;
};

export const getMeFn = async () => {
  const response = await authApi.get("users/me");
  return response.data;
};

// Export your authentication functions
export const useLogin = () => useMutation(loginUserFn);
export const useSignUp = () => useMutation(signUpUserFn);
export const useLogout = () => useMutation(logoutUserFn);
export const useVerifyEmail = () => useMutation(verifyEmailFn);
export const useGetUser = () => useMutation(getMeFn);
