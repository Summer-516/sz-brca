import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 请求病历列表
export const getCaseListApi = (data: any) => {
  return http.request<any>("get", baseUrlApi(`/case/patients`), {
    params: data
  });
};
// 请求删除病例
export const deleteCaseApi = (data: any) => {
  return http.request<any>(
    "delete",
    baseUrlApi(`/case/patients/${data.patient_id}`),
    { data }
  );
};
