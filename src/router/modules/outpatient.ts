export default {
  path: "/outpatient",
  name: "Outpatient",
  redirect: "/outpatient/patient",
  meta: {
    title: "门诊",
    icon: "documentAdd",
    rank: 3
  },
  children: [
    {
      path: "/outpatient/patient",
      name: "Patient",
      component: () => import("@/views/outpatient/search/index.vue"),
      meta: {
        title: "病历管理"
      }
    },
    {
      path: "/outpatient/dossier",
      name: "Dossier",
      component: () => import("@/views/outpatient/dossier/index.vue"),
      meta: {
        title: "新建病历",
        showLink: false,
        hiddenTag: false
      }
    },
    //医生问诊
    {
      path: "/outpatient/NewlyDiagnosed",
      name: "NewlyDiagnosed",
      component: () =>
        import("@/views/doctorInterrogation/female/newlyDiagnosed/index.vue"),
      meta: {
        title: "初诊管理"
      }
    },
    {
      path: "/outpatient/DiagnosedDetail",
      name: "NewlyDiagnosedDetail",
      component: () =>
        import(
          "@/views/doctorInterrogation/female/newlyDiagnosed/newlyDiagnosedDetail.vue"
        ),
      meta: {
        title: "初诊详情",
        showLink: false
        // hiddenTag: false
      }
    },
    {
      path: "/outpatient/ReferralDiagnosed",
      name: "ReferralDiagnosed",
      component: () =>
        import("@/views/doctorInterrogation/female/referral/index.vue"),
      meta: {
        title: "复诊管理"
      }
    },
    {
      path: "/outpatient/ReferralDetail",
      name: "ReferralDetail",
      component: () =>
        import(
          "@/views/doctorInterrogation/female/referral/femaleReferralDetail.vue"
        ),
      meta: {
        title: "复诊详情",
        showLink: false,
        hiddenTag: true
      }
    }
  ]
} as RouteConfigsTable;
