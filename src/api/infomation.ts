import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 请求添加完整病理记录
export const addRecordCourseApi = (data: any) => {
  return http.request<any>("post", baseUrlApi("/record/course"), {
    data
  });
};

// 请求获取患者列表
export const getRecordListApi = () => {
  return http.request<any>("get", baseUrlApi(`/record/list`));
};

// 请求删除患者列表某条病理记录
export const deleteRecordApi = id => {
  return http.request<any>("delete", baseUrlApi(`/record/${id}`));
};

// 请求下载病理记录
export const downloadRecordApi = data => {
  return http.request<Blob>("post", baseUrlApi(`/record/download`), {
    data,
    responseType: "blob"
  });
};
