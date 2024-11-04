export default {
  path: "/infomation",
  name: "Infomation",
  redirect: "/infomation/index",
  meta: {
    title: "病理信息",
    icon: "documentAdd",
    rank: 1
  },
  children: [
    {
      path: "/infomation/index",
      name: "Infomation",
      component: () => import("@/views/infomation/index.vue"),
      meta: {
        title: "患者列表"
      }
    },
    {
      path: "/infomation/infoForm",
      name: "InfomationForm",
      component: () => import("@/views/infomation/infoForm.vue"),
      meta: {
        title: "信息详情"
      }
    }
  ]
} as RouteConfigsTable;
