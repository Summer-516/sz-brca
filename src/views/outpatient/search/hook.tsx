import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, computed } from "vue";
import { getCaseListApi, deleteCaseApi } from "@/api/searchCase";
import Vrouter from "@/router";
import dayjs from "dayjs";
import { message } from "@/utils/message";

const router = Vrouter;
export function useRole() {
  const form = reactive({
    caseNum: "",
    code: "",
    status: "",
    caseType: "",
    searchType: "caseNum",
    searchData: ""
  });
  const dataList = ref([]);
  const loading = ref(true);
  // const switchLoadMap = ref({});
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
    // {
    //   type: "selection",
    //   width: 55,
    //   align: "left",
    //   hide: ({ checkList }) => !checkList.includes("勾选列")
    // },
    // {
    //   label: "序号",
    //   type: "index",
    //   width: 70,
    //   hide: ({ checkList }) => !checkList.includes("序号列")
    // },
    {
      label: "病历号",
      prop: "patient_id",
      minWidth: 100
    },
    {
      label: "姓名",
      prop: "name",
      minWidth: 100
    },
    {
      label: "性别",
      prop: "gender",
      minWidth: 100
    },
    {
      label: "年龄",
      prop: "age",
      minWidth: 100
    },
    {
      label: "出生日期",
      prop: "birthday",
      minWidth: 100
    },
    {
      label: "民族",
      prop: "nation",
      minWidth: 100
    },

    {
      label: "创建时间",
      minWidth: 100,
      prop: "create_time",
      formatter: ({ create_time }) =>
        dayjs(create_time).format("YYYY-MM-DD HH:mm:ss")
    },
    {
      label: "操作",
      fixed: "right",
      width: 180,
      slot: "operation"
    }
  ];
  const buttonClass = computed(() => {
    return [
      "!h-[20px]",
      "reset-margin",
      "!text-gray-500",
      "dark:!text-white",
      "dark:hover:!text-primary"
    ];
  });
  const addOrReadHandle = (id?) => {
    router.push({
      path: "/outpatient/dossier",
      query: { id }
    });
  };
  function toDiagnosis(id, medical_number = 1) {
    router.push({
      name: "NewlyDiagnosedDetail",
      query: { id, medical_number }
    });
  }
  function handleDelete(row: any) {
    const data = {
      patient_id: Number(row.patient_id)
    };
    deleteCaseApi(data)
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

  async function onSearch() {
    loading.value = true;
    const params = {
      [form.searchType]: form.searchData,
      type: 1,
      page: pagination.currentPage,
      pageSize: pagination.pageSize
    };
    const { data } = await getCaseListApi(params);
    data.results?.length > 0 && (dataList.value = data.results);
    data.total && (pagination.total = data.total);
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
    form,
    loading,
    columns,
    dataList,
    pagination,
    buttonClass,
    onSearch,
    resetForm,
    addOrReadHandle,
    handleDelete,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange,
    toDiagnosis
  };
}
