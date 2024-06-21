import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";

// 开药
export const addPrescribe = (data: any) => {
  return http.request<any>("post", baseUrlApi("/drug/prescribe"), {
    data
  });
};
