export default {
  path: "/outpatient",
  name: "Outpatient",
  redirect: "/outpatient/patient",
  meta: {
    title: "门诊",
    icon: "documentAdd",
    rank: 1
  },
  children: [
    {
      path: "/outpatient/patientList",
      name: "PatientList",
      component: () => import("@/views/outpatient/patientList/index.vue"),
      meta: {
        title: "病人列表"
      }
    },
    {
      path: "/outpatient/pathologicalReport",
      name: "PathologicalReport",
      component: () =>
        import("@/views/outpatient/pathologicalReport/index.vue"),
      meta: {
        title: "病理报告"
      }
    }
  ]
} as RouteConfigsTable;
