<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-form :model="form" label-width="auto" :inline="true">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="登记号" style="width: 80%">
                  <el-input v-model="form.registerNum" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别" style="width: 80%">
                  <el-input v-model="form.sex" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="年龄" style="width: 80%">
                  <el-input v-model="form.age" />
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-button :icon="Refresh">重置</el-button>
              </el-col>
              <el-col :span="3">
                <el-button type="primary" :icon="Search">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </template>
      <div class="table-title">
        <span>患者列表</span>
        <el-button type="primary" :icon="CirclePlus" @click="handleAddBtn">
          新增患者
        </el-button>
      </div>
      <el-table
        :data="tableData"
        stripe
        style="width: 100%"
        @row-dblclick="row => choosePatient(row)"
      >
        <el-table-column prop="登记号" label="登记号" />
        <el-table-column prop="性别" label="性别" />
        <el-table-column prop="年龄" label="年龄" />
        <el-table-column prop="月经状态" label="月经状态" />
        <el-table-column prop="乳腺癌家族史" label="乳腺癌家族史" />
        <el-table-column prop="长期雌激素使用史" label="长期雌激素使用史" />
        <el-table-column fixed="right" label="操作" width="150px">
          <template #default="{ row }">
            <el-button
              link
              type="primary"
              size="small"
              @click="handleEdit(row)"
            >
              编辑
            </el-button>
            <el-button
              link
              type="danger"
              size="small"
              @click="handleDelete(row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination
        v-model:current-page="page"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      /> -->
      <el-pagination
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        class="pagination"
      />
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// import { useRouter } from "vue-router";
import { Search, CirclePlus, Refresh } from "@element-plus/icons-vue";
import { getRecordListApi, deleteRecordApi } from "@/api/infomation";
import { message } from "@/utils/message";
import { useOutpatientStore } from "@/store/modules/outpatient";
import { useRouter } from "vue-router";
const router = useRouter();
const outpatientStore = useOutpatientStore();
// const page = ref(1);
// const pageSize = ref(10);
const total = ref(100);
const tableData = ref([]);
const form = reactive({
  registerNum: "",
  sex: "",
  age: ""
});
// const initUserForm = () => {
//   return {
//     name: "患者",
//     age: "34",
//     phone: "13412341234",
//     birthDate: ""
//   };
// };
// const handleSizeChange = (val: number) => {
//   pageSize.value = val;
//   getPatientList();
// };
// const handleCurrentChange = (val: number) => {
//   page.value = val;
//   getPatientList();
// };

// 定义字段的映射关系
const mappings = {
  性别: {
    0: "女",
    1: "男"
  },
  月经状态: {
    0: "绝经前",
    1: "绝经后"
  },
  乳腺癌家族史: {
    0: "无",
    1: "有"
  },
  长期雌激素使用史: {
    0: "无",
    1: "有"
  },
  乳腺手术史: {
    0: "无",
    1: "有"
  },
  簇状钙化灶: {
    0: "无",
    1: "有"
  },
  锁骨上下区淋巴结转移情况: {
    0: "无",
    1: "有"
  },
  远处转移情况: {
    0: "无",
    1: "有"
  },
  组织学类型: {
    1: "浸润性导管癌",
    2: "浸润性小叶癌",
    3: "特殊类型癌",
    4: "原位癌"
  },
  组织学分级: {
    1: "I级",
    2: "II级",
    3: "III级"
  },
  脉管癌栓: {
    0: "无",
    1: "有"
  },
  神经侵犯: {
    0: "无",
    1: "有"
  },
  ER状态: {
    0: "0%",
    1: "1-10%",
    2: "≥10%"
  },
  PR状态: {
    0: "0%",
    1: "1-10%",
    2: "≥10%"
  },
  HER2状态IHC: {
    0: "无表达",
    1: "ultra low",
    2: "low",
    3: "positive"
  },
  HER2状态FISH: {
    0: "阴性",
    1: "阳性"
  },
  Ki67: {
    0: "＜20%",
    1: "≥20%＜50%",
    2: "≥50%"
  },
  "CK5/6": {
    0: "阴性",
    1: "阳性"
  },
  EGFR: {
    0: "阴性",
    1: "阳性"
  },
  "PD - 1 / PD - L1": {
    0: "无表达",
    1: "CPS1-10",
    2: "10-20",
    3: "≥20"
  },
  "BRCA1 / 2胚系突变": {
    0: "无突变",
    1: "有致病突变",
    2: "未检测"
  },
  PI3CKA突变: {
    0: "无突变",
    1: "有突变",
    2: "未检测"
  },
  AKT突变: {
    0: "无突变",
    1: "有突变",
    2: "未检测"
  },
  新辅助治疗: {
    0: "无",
    1: "有"
  },
  基因组学检测情况: {
    0: "未检测",
    1: "微小RNA检测",
    2: "热点基因突变",
    3: "甲基化检测"
  },
  微小RNA检测: {
    0: "无变化",
    1: "低表达",
    2: "高表达"
  },
  热点基因突变: {
    0: "无突变",
    1: ">5个",
    2: ">10个"
  },
  甲基化检测: {
    0: "甲基化频率<10%",
    1: "甲基化频率<50%"
  }
};
// 转换接收回的数据（0,1转成对应的文本内容）
const convertData = data => {
  return data.map(row => {
    const convertedRow = { ...row };
    // 只转换在 mappings 中定义的字段
    for (const field in mappings) {
      if (convertedRow[field] !== undefined && convertedRow[field] !== null) {
        convertedRow[field] =
          mappings[field][convertedRow[field]] || convertedRow[field];
      }
    }
    return convertedRow;
  });
};
const handleEdit = row => {
  console.log(row);
};
// 点击表格删除按钮
const handleDelete = row => {
  console.log("id", row._id);
  deleteRecordApi(row._id).then(res => {
    console.log("删除表格某行后的res", res);
  });
};
// 双击表格某行
const choosePatient = row => {
  outpatientStore.setSelectedPatient(row);
};
// 点击"新增"按钮
const handleAddBtn = () => {
  router.push({
    path: "/infomation/infoForm"
  });
};
// 请求获取病理信息列表
const getRecordList = () => {
  getRecordListApi()
    .then(res => {
      // console.log("res", res);
      tableData.value = convertData(res.data);
      // console.log("tableData.value", tableData.value);
    })
    .catch(msg => {
      message(msg || "获取患者列表失败", {
        type: "warning"
      });
    });
};
onMounted(() => {
  getRecordList();
});
</script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  width: 100%;
  margin: 16px 0;
}

.table-title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
</style>
