<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-form :model="form" label-width="auto" :inline="true">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="病案号" style="width: 80%">
                  <el-input v-model="form.identificationNum" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="患者姓名" style="width: 80%">
                  <el-input v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="床号" style="width: 80%">
                  <el-input v-model="form.bedNum" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-button :icon="Refresh">重置</el-button>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="病区" style="width: 80%">
                  <el-select v-model="form.ward">
                    <el-option label="aaa" value="aaa" />
                    <el-option label="bbb" value="bbb" />
                    <el-option label="ccc" value="ccc" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="主管医师" style="width: 80%">
                  <el-select v-model="form.competentPhysician">
                    <el-option label="全部医师" value="aaa" />
                    <el-option label="bbb" value="bbb" />
                    <el-option label="ccc" value="ccc" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="登记号" style="width: 80%">
                  <el-input v-model="form.bedNum" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" :icon="Search">查询</el-button>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </template>
      <!-- <el-row :gutter="20" style="margin-bottom: 20px">
        <el-col :span="6">
          <span>病人列表</span>
        </el-col>
        <el-col :span="2" :offset="16">
          <el-button type="primary" :icon="CirclePlus" @click="handleAddBtn">
            新增患者
          </el-button>
        </el-col>
      </el-row> -->
      <div class="table-title">
        <span>病人列表</span>
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
        <el-table-column prop="aa" label="序号" />
        <el-table-column prop="aa" label="登记号" />
        <el-table-column prop="aa" label="账号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="phone" label="手机号" width="150px" />
        <el-table-column prop="aa" label="诊断" />
        <el-table-column prop="aa" label="状态" />
        <el-table-column prop="aa" label="护士拒绝" />
        <el-table-column prop="aa" label="入径状态" />
        <el-table-column prop="aa" label="性别" />
        <el-table-column prop="aa" label="年龄" />
        <el-table-column prop="aa" label="图标菜单" />
        <el-table-column prop="aa" label="入院日期" />
        <el-table-column prop="aa" label="住院天数" />
        <el-table-column prop="aa" label="主管医师" />
        <el-table-column prop="aa" label="病区" />
        <el-table-column prop="aa" label="入院次数" />
        <el-table-column prop="aa" label="带组医师" />
        <el-table-column prop="aa" label="主任医师" />
        <el-table-column prop="aa" label="医生便签" />
        <el-table-column prop="aa" label="病案号" />
        <el-table-column fixed="right" label="操作" width="100px">
          <!-- <template #default="{ row }"> -->
          <template #default>
            <!-- <el-button
              link
              type="primary"
              size="small"
              @click="handleProgressBtn(row)"
            >
              添加病程记录
            </el-button> -->
            <!-- <el-button
              link
              type="primary"
              size="small"
              @click="handleReportBtn(row)"
            >
              添加病理报告
            </el-button> -->
            <el-button link type="primary" size="small">编辑</el-button>
            <el-button link type="danger" size="small" @click="handleClick">
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        v-model:current-page="page"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        class="pagination"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <!-- 新增患者的dialog -->
      <el-dialog
        v-model="showAddDialog"
        title="新增患者"
        width="500"
        :before-close="handleClose"
      >
        <el-form :model="addForm" label-width="100px" :inline="true">
          <el-form-item label="姓名">
            <el-input v-model="addForm.name" style="width: 240px" />
          </el-form-item>
          <el-form-item label="年龄">
            <el-input v-model="addForm.age" style="width: 240px" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="addForm.phone" style="width: 240px" />
          </el-form-item>
          <el-form-item label="出生日期">
            <!-- <el-input v-model="addForm.birthDate" style="width: 240px" /> -->
            <el-date-picker
              v-model="addForm.birthDate"
              type="date"
              value-format="x"
              style="width: 240px"
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleAdd"> 确定 </el-button>
          </div>
        </template>
      </el-dialog>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// import { useRouter } from "vue-router";
import { Search, CirclePlus, Refresh } from "@element-plus/icons-vue";
import {
  addPatientApi,
  registrationApi,
  getPatientListApi
} from "@/api/patient";
import { message } from "@/utils/message";
import { useOutpatientStore } from "@/store/modules/outpatient";
// const router = useRouter();
const outpatientStore = useOutpatientStore();
const showAddDialog = ref(false);
const page = ref(1);
const pageSize = ref(10);
const total = ref(100);
const tableData = ref([]);
const form = reactive({
  identificationNum: "",
  name: "",
  bedNum: "",
  ward: "",
  competentPhysician: ""
});
const initUserForm = () => {
  return {
    name: "患者",
    age: "34",
    phone: "13412341234",
    birthDate: ""
  };
};
const addForm = ref(initUserForm());
const handleSizeChange = (val: number) => {
  pageSize.value = val;
  getPatientList();
};
const handleCurrentChange = (val: number) => {
  page.value = val;
  getPatientList();
};
// 点击添加病程记录按钮
// const handleProgressBtn = row => {
//   router.push({
//     path: "/outpatient/progressNote",
//     query: { id: row._id }
//   });
// };

// 点击添加病理报告按钮
// const handleReportBtn = row => {
//   router.push({
//     path: "/outpatient/pathologicalReport",
//     query: { id: row._id }
//   });
// };
const handleClick = () => {
  console.log("click");
};
// 双击表格某行
const choosePatient = row => {
  outpatientStore.setSelectedPatient(row);
};
// 点击"新增"按钮
const handleAddBtn = () => {
  showAddDialog.value = true;
};
// 点击新增患者dialog的确定按钮
const handleAdd = async () => {
  try {
    const res = await addPatientApi(addForm.value);
    const id = res.data._id;
    const dataForRegistration = { id, deptId: 1 };
    await registrationApi(dataForRegistration);
    message("新增患者成功", { type: "success" });
  } catch (error) {
    message("新增患者失败", { type: "warning" });
  } finally {
    handleClose();
  }
};
// 关闭新增患者dialog
const handleClose = () => {
  showAddDialog.value = false;
  getPatientList();
  addForm.value = initUserForm();
};
// 请求获取患者列表
const getPatientList = () => {
  getPatientListApi(page.value, pageSize.value)
    .then(res => {
      tableData.value = res.data.list;
      total.value = res.data.total;
    })
    .catch(message => {
      message(message || "获取患者列表失败", {
        type: "warning"
      });
    });
};
onMounted(() => {
  getPatientList();
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
