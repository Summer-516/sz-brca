import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 创建病人信息
export const addPatientsInfo = (data: any) => {
  return http.request<any>(
    "post",
    baseUrlApi("/case/patients"),
    {
      data
    },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};
// 获取病人详情
export const getPatientDetail = id => {
  return http.request<any>("get", baseUrlApi(`/case/patients/${id}`));
};
// 获取病人初诊详情
export const getDiagnosisDetail = id => {
  return http.request<any>("get", baseUrlApi(`/case/diagnosisDetail/${id}`));
};
// 提交初诊/临床表现信息
export const postClinical = (data: any) => {
  return http.request<any>("post", baseUrlApi(`/case/clinical`), {
    data
  });
};
// 提交初诊/体格检查信息
export const postPhysical = (data: any) => {
  return http.request<any>("post", baseUrlApi(`/case/physical`), {
    data
  });
};
// 提交初诊/生化检查信息
export const postBiochemical = (data: any) => {
  return http.request<any>("post", baseUrlApi(`/case/biochemical`), {
    data
  });
};
// 提交初诊/辅助检查信息
export const postAuxiliary = (data: any) => {
  return http.request<any>(
    "post",
    baseUrlApi("/case/auxiliary"),
    {
      data
    },
    {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
  );
};
// 提交部分初诊信息
export const postDiagnosis = (data: any) => {
  return http.request<any>("post", baseUrlApi(`/case/diagnosis`), {
    data
  });
};
// 获取初诊列表
export const getDiagnosisListApi = (data: any) => {
  return http.request<any>("get", baseUrlApi(`/case/diagnosis`), {
    params: data
  });
};
// 请求删除初诊
export const deleteDiagnosis = (diagnosis_id: any) => {
  return http.request<any>(
    "delete",
    baseUrlApi(`/case/diagnosis/${diagnosis_id}`)
  );
};
