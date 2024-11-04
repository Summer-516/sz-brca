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
        <el-table-column prop="registerNum" label="登记号" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column fixed="right" label="操作" width="150px">
          <template #default="{ row }">
            <el-button
              link
              type="primary"
              size="small"
              @click="handleDetails(row)"
            >
              查看详情
            </el-button>
            <el-button
              link
              type="primary"
              size="small"
              @click="handleEdit(row)"
            >
              编辑
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
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// import { useRouter } from "vue-router";
import { Search, CirclePlus, Refresh } from "@element-plus/icons-vue";
// import {
//   addPatientApi,
//   registrationApi,
//   getPatientListApi
// } from "@/api/patient";
// import { message } from "@/utils/message";
import { useOutpatientStore } from "@/store/modules/outpatient";
import { useRouter } from "vue-router";
const router = useRouter();
const outpatientStore = useOutpatientStore();
// const page = ref(1);
// const pageSize = ref(10);
// const total = ref(100);
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
const handleDetails = row => {
  console.log(row);
};
const handleEdit = row => {
  console.log(row);
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
// 请求获取患者列表
// const getPatientList = () => {
//   getPatientListApi(page.value, pageSize.value)
//     .then(res => {
//       tableData.value = res.data.list;
//       total.value = res.data.total;
//     })
//     .catch(message => {
//       message(message || "获取患者列表失败", {
//         type: "warning"
//       });
//     });
// };
onMounted(() => {
  // getPatientList();
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
