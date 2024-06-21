import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 请求提交问诊信息
export const addQuestionAndAnswerApi = (data: any) => {
  return http.request<any>("post", baseUrlApi("/patient/aiAskAndAnswerInfo"), {
    data
  });
};
// 请求获取病史信息
export const getHistoryApi = (data: any) => {
  return http.request<any>("get", baseUrlApi(`/patient/firstVisit`), {
    params: data
  });
};
// 登录，如果没注册自动注册
export const loginApi = (data?: object) => {
  return http.request<any>("post", baseUrlApi("/patient/login"), {
    data
  });
};
// 完善信息
export const completeApi = (csrdNumber: any, data: any) => {
  return http.request<any>(
    "put",
    baseUrlApi(`/patient/complete/${csrdNumber}`),
    {
      data
    }
  );
};
