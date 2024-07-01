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
export const addFirstCourceApi = (patientId: any, data: any) => {
  return http.request<any>(
    "post",
    baseUrlApi(`/record/${patientId}/fistCource`),
    {
      data
    }
  );
};
// 请求获取首程病历
export const getFirstCourceApi = (patientId: any) => {
  return http.request<any>(
    "get",
    baseUrlApi(`/record/${patientId}/fistCource`)
  );
};
// 请求添加病理报告
export const addPathologyApi = (patientId: any, data: any) => {
  return http.request<any>(
    "post",
    baseUrlApi(`/record/${patientId}/pathology`),
    {
      data
    }
  );
};
// 请求获取病理报告
export const getPathologyApi = (patientId: any) => {
  return http.request<any>("get", baseUrlApi(`/record/${patientId}/pathology`));
};
