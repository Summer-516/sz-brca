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
      path: "/outpatient/progressNote",
      name: "ProgressNote",
      component: () => import("@/views/outpatient/progressNote/index.vue"),
      meta: {
        title: "病程记录"
      },
      children: [
        {
          path: "/outpatient/progressNote",
          name: "FirstCourse",
          component: () => import("@/views/outpatient/progressNote/index.vue"),
          meta: {
            title: "病程记录"
          }
        },
        {
          path: "/outpatient/progressNote/firstCourse",
          name: "FirstCourse",
          component: () =>
            import("@/views/outpatient/progressNote/firstCourse.vue"),
          meta: {
            title: "首次病程",
            showLink: false
          }
        }
      ]
    },
    {
      path: "/outpatient/residentAdmitNote",
      name: "ResidentAdmitNote",
      component: () => import("@/views/outpatient/residentAdmitNote/index.vue"),
      meta: {
        title: "入院记录"
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
