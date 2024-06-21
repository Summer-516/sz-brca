import dayjs from "dayjs";
import { message } from "@/utils/message";
import { deleteCaseApi } from "@/api/searchCase";
import { getReferralList } from "@/api/doctor";

import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { usePatientStoreHook } from "@/store/modules/patient";
export function useUser() {
  const router = useRouter();

  const form = reactive({
    caseNum: usePatientStoreHook().getPatientData?.caseNum || "",
    sex: "female",
    type: 1,
    name: "",
    phone: "",
    state: "",
    cardNumber: ""
  });
  const userId = ref("");
  const show = ref(false);
  const isDetail = ref(false);
  const dataList = ref([]);
  const detailsForm = ref({});
  const loading = ref(true);
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns = ref([]);
  const columns1: TableColumnList = [
    {
      type: "selection",
      width: 55,
      align: "left",
      hide: ({ checkList }) => !checkList.includes("勾选列")
    },
    {
      label: "序号",
      type: "index",
      width: 70,
      hide: ({ checkList }) => !checkList.includes("序号列")
    },

    {
      label: "姓名",
      prop: "name",
      minWidth: 100
    },

    {
      label: "年龄",
      prop: "age",
      minWidth: 100
    },
    {
      label: "性别",
      prop: "sex",
      minWidth: 100
    },
    {
      label: "电话",
      prop: "phone",
      minWidth: 100
    },
    {
      label: "出生日期",
      minWidth: 100,
      prop: "出生日期",
      formatter: ({ 出生日期 }) => dayjs(出生日期).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "疾病诊断",
      prop: "疾病诊断",
      minWidth: 100
    },
    {
      label: "基因型",
      prop: "基因型",
      minWidth: 100
    },
    {
      label: "临床症状",
      prop: "临床症状",
      minWidth: 100
    },
    {
      label: "收录时间",
      minWidth: 100,
      prop: "收录时间",
      formatter: ({ 收录时间 }) => dayjs(收录时间).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    }
  ];
  onMounted(() => {
    setTimeout(() => {
      columns.value = columns1;
    }, 0);
  });
  const buttonClass = computed(() => {
    return [
      "!h-[20px]",
      "reset-margin",
      "!text-gray-500",
      "dark:!text-white",
      "dark:hover:!text-primary"
    ];
  });

  function handleUpdate(row?) {
    if (row) {
      router.push({
        name: "ReferralDetail",
        query: { sex: "female", caseNum: row.caseNum }
      });
    } else {
      router.push({
        name: "ReferralDetail"
      });
    }
  }

  function handleDelete(row) {
    deleteCaseApi(row._id)
      .then(res => {
        if (res.code === 200) {
          message("删除成功", {
            type: "success"
          });
        } else {
          message(res.message || "删除失败", {
            type: "warning"
          });
        }
      })
      .catch(err => {
        message(err.message || "删除失败", {
          type: "warning"
        });
      })
      .finally(() => {
        onSearch();
      });
  }
  function handleSizeChange() {
    onSearch();
  }

  function handleCurrentChange() {
    onSearch();
  }

  function handleSelectionChange() {
    onSearch();
  }

  function handleClose() {
    show.value = false;
    /** 延时处理防止用户看到某些操作 */
    setTimeout(() => {
      isDetail.value = false;
    }, 100);
  }
  async function onSearch() {
    loading.value = true;
    const params = {
      ...form,
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    };
    const { data } = await getReferralList(params);
    dataList.value = data.list;
    pagination.total = Number(data.total || 0);

    setTimeout(() => {
      loading.value = false;
    }, 100);
  }

  const resetForm = formEl => {
    if (!formEl) return;
    formEl.resetFields();
    onSearch();
  };

  return {
    userId,
    isDetail,
    detailsForm,
    show,
    form,
    loading,
    columns,
    dataList,
    pagination,
    buttonClass,
    handleClose,
    onSearch,
    resetForm,
    handleUpdate,
    handleDelete,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  };
}
