import dayjs from "dayjs";
import { message } from "@/utils/message";
import {
  getUserList,
  changeState,
  deleteUser,
  getUserDetail
} from "@/api/user";
import { ElMessageBox } from "element-plus";
import { type PaginationProps } from "@pureadmin/table";
import { reactive, ref, computed } from "vue";

export function useUser() {
  const form = reactive({
    account: "",
    name: "",
    phone: "",
    state: ""
  });
  const userId = ref("");
  const show = ref(false);
  const isDetail = ref(false);
  const dataList = ref([]);
  const detailsForm = ref({});
  const loading = ref(true);
  const switchLoadMap = ref({});
  const pagination = reactive<PaginationProps>({
    total: 0,
    pageSize: 10,
    currentPage: 1,
    background: true
  });
  const columns: TableColumnList = [
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
    // {
    //   label: "用户编号",
    //   prop: "_id",
    //   minWidth: 130
    // },
    {
      label: "用户账号",
      prop: "account",
      minWidth: 130
    },
    {
      label: "用户姓名",
      prop: "name",
      minWidth: 130
    },
    // {
    //   label: "用户昵称",
    //   prop: "nickname",
    //   minWidth: 130
    // },
    // {
    //   label: "性别",
    //   prop: "sex",
    //   minWidth: 90,
    //   cellRenderer: ({ row, props }) => (
    //     <el-tag
    //       size={props.size}
    //       type={row.sex === 1 ? "danger" : ""}
    //       effect="plain"
    //     >
    //       {row.sex === 1 ? "女" : "男"}
    //     </el-tag>
    //   )
    // },
    // {
    //   label: "部门",
    //   prop: "dept",
    //   minWidth: 90,
    //   formatter: ({ dept }) => dept.name
    // },
    {
      label: "手机号码",
      prop: "phone",
      minWidth: 90
    },
    {
      label: "状态",
      prop: "state",
      minWidth: 90,
    },
    {
      label: "创建时间",
      minWidth: 90,
      prop: "createdAt",
      formatter: ({ createdAt }) =>
        dayjs(createdAt).format("YYYY-MM-DD HH:mm:ss")
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

  function onChange({ row, index }) {
    ElMessageBox.confirm(
      `确认要<strong>${
        row.state === 0 ? "停用" : "启用"
      }</strong><strong style='color:var(--el-color-primary)'>${
        row.name
      }</strong>用户吗?`,
      "系统提示",
      {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        dangerouslyUseHTMLString: true,
        draggable: true
      }
    )
      .then(() => {
        switchLoadMap.value[index] = Object.assign(
          {},
          switchLoadMap.value[index],
          {
            loading: true
          }
        );

        changeState(row._id, { state: row.state }).then(res => {
          if (res.code === 200) {
            message("已成功修改用户状态", {
              type: "success"
            });
          } else {
            message(res.message || "修改失败", {
              type: "warning"
            });
          }
        });
      })
      .catch(() => {
        row.state === 0 ? (row.state = 1) : (row.state = 0);
      })
      .finally(() => {
        switchLoadMap.value[index] = Object.assign(
          {},
          switchLoadMap.value[index],
          {
            loading: false
          }
        );
        onSearch();
      });
  }

  function handleUpdate(row) {
    isDetail.value = true;
    getUserDetail(row.account)
      .then(res => {
        if (res.code === 200) {
          show.value = true;
          userId.value = row._id;
          detailsForm.value = res.data;
        } else {
          message(res.message || "获取失败", {
            type: "warning"
          });
        }
      })
      .catch(err => {
        message(err.message || "获取失败", {
          type: "warning"
        });
      });
  }

  function handleDelete(row) {
    deleteUser(row._id)
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

  function handleSizeChange(val: number) {
    console.log(`${val} items per page`);
  }

  function handleCurrentChange(val: number) {
    val;
    // console.log(`current page: ${val}`);
  }

  function handleSelectionChange(val) {
    console.log("handleSelectionChange", val);
  }
  function addUser() {
    detailsForm.value = {};
    show.value = true;
    isDetail.value = false;
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
    const { data } = await getUserList(params);
    dataList.value = data.list;
    pagination.total = data.total;

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
    addUser,
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
