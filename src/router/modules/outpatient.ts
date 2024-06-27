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
      }
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
// import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import { usePatientStore } from "@/store/modules/outpatient";

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: "/outpatient",
//     name: "Outpatient",
//     redirect: "/outpatient/patientList",
//     meta: {
//       title: "门诊",
//       icon: "documentAdd",
//       rank: 1
//     },
//     children: [
//       {
//         path: "patientList",
//         name: "PatientList",
//         component: () => import("@/views/outpatient/patientList/index.vue"),
//         meta: {
//           title: "病人列表",
//           showLink: true
//         }
//       },
//       {
//         path: "progressNote",
//         name: "ProgressNote",
//         component: () => import("@/views/outpatient/progressNote/index.vue"),
//         meta: {
//           title: "病程记录",
//           showLink: false
//         }
//       },
//       {
//         path: "/outpatient/residentAdmitNote",
//         name: "ResidentAdmitNote",
//         component: () =>
//           import("@/views/outpatient/residentAdmitNote/index.vue"),
//         meta: {
//           title: "入院记录",
//           showLink: false
//         }
//       },
//       {
//         path: "/outpatient/pathologicalReport",
//         name: "PathologicalReport",
//         component: () =>
//           import("@/views/outpatient/pathologicalReport/index.vue"),
//         meta: {
//           title: "病理报告",
//           showLink: false
//         }
//       }
//     ]
//   }
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes
// });

// router.beforeEach((to, from, next) => {
//   const patientStore = usePatientStore();

//   if (to.name !== "PatientList" && !patientStore.selectedPatient) {
//     next({ name: "PatientList" });
//   } else {
//     // 更新路由的 showLink
//     routes[0].children.forEach(route => {
//       if (route.name !== "PatientList") {
//         route.meta.showLink = !!patientStore.selectedPatient;
//       }
//     });
//     next();
//   }
// });

// export default router;
