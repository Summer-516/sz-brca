import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 请求添加病人
export const addPatientApi = (data: any) => {
  return http.request<any>("post", baseUrlApi(`/patient`), {
    data
  });
};
// 请求挂号
export const registrationApi = (data: any) => {
  return http.request<any>("put", baseUrlApi(`/patient`), {
    data
  });
};
// 请求获取患者列表
// export const getPatientListApi = () => {
//   return http.request<any>("get", baseUrlApi(`/patient`));
// };
export const getPatientListApi = (page: any, pageSize: any) => {
  return http.request<any>(
    "get",
    baseUrlApi(`/patient/list?page=${page}&pageSize=${pageSize}`)
  );
};
// 请求添加首程病历
export const firstCourceApi = (patientId: any, data: any) => {
  return http.request<any>(
    "post",
    baseUrlApi(`/record/${patientId}/fistCource`),
    {
      data
    }
  );
};
