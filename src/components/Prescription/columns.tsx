// import { message } from "@/utils/message";
import { ref, computed, Transition } from "vue";
import { delay } from "@pureadmin/utils";
import { addPrescribe } from "@/api/drug";
import EditPen from "@iconify-icons/ep/edit-pen";
import Check from "@iconify-icons/ep/check";
import { ElMessage } from "element-plus";
// 温馨提示：编辑整行方法雷同，将cellRenderer后面渲染的组件抽出来做对应处理即可
export function useColumns(props, emit) {
  // 编辑值（可多个）
  const inputValMap = ref({});
  // 是否正处于编辑状态（可多个）
  const editStatus = ref({});
  // 当前激活的单元格（唯一）
  const activeIndex = ref(-1);
  //编辑列
  const editCellIndex = ref(-1);
  const model = ref(null);
  const drugModel: any = ref({
    时间: "",
    给药频次: "",
    "天/次数": "",
    频次单位: "",
    发药数量: ""
  });
  const drug: any = ref({});

  const comVal = computed(() => {
    return index => {
      return inputValMap.value[index]?.value;
    };
  });
  const dataList = computed({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit("update:modelValue", val);
    }
  });
  const editing = computed(() => {
    return index => {
      return editStatus.value[index]?.editing;
    };
  });

  const iconClass = computed(() => {
    return (index, other = false) => {
      return [
        "cursor-pointer",
        "ml-2",
        "transition",
        "delay-100",
        other
          ? ["hover:scale-110", "hover:text-red-500"]
          : editing.value(index) && ["scale-150", "text-red-500"]
      ];
    };
  });
  const normalFormatter: any = (scope, arg) => {
    const { row, index, cellIndex } = scope;
    return (
      <div
        // class="flex-bc" flex-bc 代表 flex justify-between items-center 具体看 src/style/tailwind.css 文件
        class="flex-bc w-full h-[32px]"
        onMouseenter={() => (activeIndex.value = index)}
        onMouseleave={() => onMouseleave(index)}
      >
        <p v-show={!editing.value(index) || editCellIndex.value != cellIndex}>
          {row[arg]}
        </p>
        <Transition enter-active-class="animate__animated animate__fadeInUp animate__faster">
          <el-input
            v-show={editing.value(index) && editCellIndex.value == cellIndex}
            modelValue={comVal.value(index)}
            onInput={value => onChange(value, index)}
          />
        </Transition>
        <iconify-icon-offline
          v-show={editing.value(index) && editCellIndex.value == cellIndex}
          icon={Check}
          class={iconClass.value(index)}
          onClick={() => onSure(index, arg)}
        />
        <iconify-icon-offline
          v-show={activeIndex.value === index && !editing.value(index)}
          icon={EditPen}
          class={iconClass.value(index, true)}
          onClick={() => onEdit(scope, index, arg)}
        />
      </div>
    );
  };
  const columns: TableColumnList = [
    {
      label: "药品ID",
      prop: "药品ID"
    },
    {
      label: "药品名称",
      prop: "药品名称",
      fixed: "left"
    },
    {
      label: "时间",
      prop: "时间"
    },
    {
      label: "剂量",
      prop: "剂量",
      cellRenderer: scope => normalFormatter(scope, "剂量")
    },
    {
      label: "剂量单位",
      prop: "药品单位",
      cellRenderer: scope => normalFormatter(scope, "药品单位")
    },
    {
      label: "给药频次",
      prop: "给药频次",
      cellRenderer: scope => normalFormatter(scope, "给药频次")
    },
    {
      label: "天/次数",
      prop: "天/次数",
      cellRenderer: scope => normalFormatter(scope, "天/次数")
    },
    {
      label: "频次单位",
      prop: "频次单位",
      cellRenderer: scope => normalFormatter(scope, "频次单位")
    },

    {
      label: "发药数量",
      prop: "发药数量",
      cellRenderer: scope => normalFormatter(scope, "发药数量")
    },
    {
      label: "包装单位",
      prop: "包装单位",
      cellRenderer: scope => normalFormatter(scope, "包装单位")
    },
    {
      label: "医嘱类型",
      prop: "ypfl",
      cellRenderer: scope => normalFormatter(scope, "ypfl")
    },
    {
      label: "特殊备注",
      prop: "特殊备注",
      cellRenderer: scope => normalFormatter(scope, "特殊备注")
    },
    {
      label: "诊断",
      prop: "诊断",
      cellRenderer: scope => normalFormatter(scope, "诊断")
    },
    {
      label: "操作",
      fixed: "right",
      width: 100,
      slot: "operation"
    }
    // {
    //   label: "规范",
    //   prop: "规范",
    //   cellRenderer: scope => normalFormatter(scope, "规范")
    // },

    // {
    //   label: "包装系数",
    //   prop: "包装系数",
    //   cellRenderer: scope => normalFormatter(scope, "包装系数")
    // },
    // {
    //   label: "单位",
    //   prop: "单位",
    //   cellRenderer: scope => normalFormatter(scope, "单位")
    // },
    // {
    //   label: "厂家",
    //   prop: "厂家",
    //   cellRenderer: scope => normalFormatter(scope, "厂家")
    // },
    // {
    //   label: "是否停用",
    //   prop: "是否停用",
    //   cellRenderer: scope => normalFormatter(scope, "是否停用")
    // },
    // {
    //   label: "ORGID",
    //   prop: "ORGID",
    //   cellRenderer: scope => normalFormatter(scope, "ORGID")
    // },
    // {
    //   label: "简拼",
    //   prop: "简拼",
    //   cellRenderer: scope => normalFormatter(scope, "简拼")
    // },
    // {
    //   label: "oldid",
    //   prop: "oldid",
    //   cellRenderer: scope => normalFormatter(scope, "oldid")
    // },
    // {
    //   label: "商品名",
    //   prop: "商品名",
    //   cellRenderer: scope => normalFormatter(scope, "商品名")
    // },
    // {
    //   label: "通用名",
    //   prop: "通用名",
    //   cellRenderer: scope => normalFormatter(scope, "通用名")
    // },
    // {
    //   label: "剂型",
    //   prop: "剂型",
    //   cellRenderer: scope => normalFormatter(scope, "剂型")
    // },
    // {
    //   label: "dmfl",
    //   prop: "dmfl",
    //   cellRenderer: scope => normalFormatter(scope, "dmfl")
    // },
  ];

  function onEdit(scope, index, arg) {
    inputValMap.value[index] = Object.assign({}, inputValMap.value[index], {
      value: scope.row[arg]
    });
    editCellIndex.value = scope.cellIndex;
    // 处于编辑状态
    editStatus.value[index] = Object.assign({}, editStatus.value[index], {
      editing: true
    });
  }

  function onMouseleave(index) {
    inputValMap.value[index]?.value
      ? (activeIndex.value = index)
      : (activeIndex.value = -1);
  }

  function onChange(value, index) {
    inputValMap.value[index].value = value;
  }
  function handlePrescribe(obj, type) {
    const { caseNumber, sex, drugList } = obj;
    const params = {
      caseNumber,
      sex,
      list: drugList,
      type
    };
    addPrescribe(params)
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        ElMessage.error(err);
        console.log(err);
      });
  }

  function onSure(index, arg) {
    dataList.value[index][arg] = inputValMap.value[index].value;
    // message(
    //   `您编辑了第 ${index + 1} 行，编辑后数据为：${JSON.stringify(
    //     dataList.value[index]
    //   )}`,
    //   {
    //     type: "success"
    //   }
    // );
    // 编辑状态关闭
    editStatus.value[index] = Object.assign({}, editStatus.value[index], {
      editing: false
    });
    delay().then(() => (inputValMap.value[index].value = null));
  }
  function handleChange(val) {
    drug.value = Object.assign(drugModel.value, val);
  }
  function addDrug() {
    const obj = JSON.parse(JSON.stringify(drug.value));
    dataList.value.push(obj);
  }
  function handleDelete(row, index) {
    console.log("row", index);
    dataList.value.splice(index, 1);
  }
  return {
    handleDelete,
    handleChange,
    addDrug,
    handlePrescribe,
    dataList,
    drug,
    columns,
    model
  };
}
