import { http } from "@/utils/http";
import { baseUrlApi } from "./utils";
export type UserResult = {
  code: number;
  message: string;
  success: Boolean;
  data: {
    /** 用户名 */
    username: string;
    /** email */
    email: string;
    /** 当前登陆用户的角色 */
    roles?: Array<string>;
    /** `token` */
    token: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

type Result = {
  success: boolean;
  data?: {
    /** 列表数据 */
    list: Array<any>;
    /** 总数 */
    total?: number;
  };
};
type ResultDept = {
  success: boolean;
  data?: Array<any>;
};
export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<any>("post", baseUrlApi("/auth/login"), { data });
};

/** 注册 */
export const getRegister = (data?: object) => {
  return http.request<UserResult>("post", baseUrlApi("/oauth/register/"), {
    data
  });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
/** 获取用户管理列表 */
export const getUserList = (data?: object) => {
  return http.request<Result>("get", baseUrlApi("/auth/list"), {
    params: data
  });
};

/** 添加账号 */
export const addUser = (data?: object) => {
  return http.request<any>("post", baseUrlApi("/auth/regist"), {
    data
  });
};
/** 删除账号 */
export const deleteUser = (id: string) => {
  return http.request<any>("delete", baseUrlApi(`/auth/${id}`));
};
/** 获取账号详情 */
export const getUserDetail = (account: string) => {
  return http.request<any>("get", baseUrlApi(`/auth/${account}`));
};

/** 修改用户状态 */
export const changeState = (id: string, data: object) => {
  return http.request<any>("put", baseUrlApi(`/auth/${id}/state`), {
    data
  });
};
/** 修改用户信息 */
export const updateUserInfo = (data: object, id: string) => {
  return http.request<any>("put", baseUrlApi(`/auth/${id}/info`), {
    data
  });
};

/** 获取部门管理列表 */
export const getDeptList = (data?: object) => {
  return http.request<ResultDept>("post", "/dept", { data });
};
