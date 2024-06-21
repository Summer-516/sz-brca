// 最简代码，也就是这些字段必须有
export default {
  path: "/userManage",

  meta: {
    title: "用户管理",
    rank: 1,
    icon: "userFilled"
  },
  children: [
    {
      path: "/userManage/index",
      name: "UserManage",
      component: () => import("@/views/userManage/index.vue"),
      meta: {
        roles: ["admin"],
        title: "用户管理"
      }
    }
  ]
};
