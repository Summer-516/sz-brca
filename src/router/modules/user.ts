export default {
  path: "/user",
  name: "User",
  redirect: "/user/doctorList",
  meta: {
    title: "用户管理",
    icon: "avatar",
    rank: 2
  },
  children: [
    {
      path: "/user/doctorList/index",
      name: "DoctorList",
      component: () => import("@/views/user/doctorList/index.vue"),
      meta: {
        title: "医生列表"
      }
    }
  ]
} as RouteConfigsTable;
