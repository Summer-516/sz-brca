export default {
  path: "/infomation",
  name: "Infomation",
  redirect: "/infomation/index",
  meta: {
    title: "门诊",
    icon: "documentAdd",
    rank: 1
  },
  children: [
    {
      path: "/infomation/index",
      name: "Infomation",
      component: () => import("@/views/infomation/index.vue"),
      meta: {
        title: "信息登记"
      }
    }
  ]
} as RouteConfigsTable;
