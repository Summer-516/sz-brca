<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-form :model="form" label-width="auto" :inline="true">
            <el-form-item label="姓名">
              <el-input v-model="form.name" style="width: 240px" />
            </el-form-item>
            <el-form-item label="账号">
              <el-input v-model="form.account" style="width: 240px" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :icon="Search">搜索</el-button>
            </el-form-item>
            <el-form-item>
              <el-button :icon="Refresh">重置</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" :icon="CirclePlus" @click="handleAddBtn"
                >新增</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column fixed prop="name" label="姓名" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="account" label="账号" />
        <el-table-column prop="password" label="密码" />
        <el-table-column prop="date" label="创建时间" />
        <el-table-column fixed="right" label="操作" width="120">
          <template #default>
            <el-button link type="danger" size="small" @click="handleClick">
              删除
            </el-button>
            <el-button link type="primary" size="small">编辑</el-button>
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
      <!-- 新增医生账号的dialog -->
      <el-dialog
        v-model="showAddDialog"
        title="新增医生账号"
        width="500"
        :before-close="handleClose"
      >
        <el-form :model="addForm" label-width="100px" :inline="true">
          <el-form-item label="姓名">
            <el-input v-model="addForm.name" style="width: 240px" />
          </el-form-item>
          <el-form-item label="账号">
            <el-input v-model="addForm.account" style="width: 240px" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="addForm.password" style="width: 240px" />
          </el-form-item>
          <el-form-item label="手机号">
            <el-input v-model="addForm.phone" style="width: 240px" />
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
import { message } from "@/utils/message";
import { Search, Refresh, CirclePlus } from "@element-plus/icons-vue";
import { getRegister, getUserListApi } from "@/api/user";
const page = ref(1);
const pageSize = ref(10);
const total = ref(100);
const showAddDialog = ref(false);
const handleClick = () => {
  console.log("click");
};
const form = reactive({
  name: "",
  account: ""
});
// const initUserForm = {
//   name: "test",
//   account: "test",
//   password: "test",
//   phone: "12311112222"
// };
// const addForm = reactive(...initUserForm);

const initUserForm = () => {
  return {
    name: "test",
    account: "test",
    password: "test",
    phone: "12311112222"
  };
};
const addForm = ref(initUserForm());
const tableData = ref([]);
const handleSizeChange = (val: number) => {
  // console.log(`${val} items per page`);
  // pageSize.value = val;
  // console.log("pageSize", pageSize.value);
  pageSize.value = val;
  getUserList();
};
const handleCurrentChange = (val: number) => {
  // console.log(`current page: ${val}`);
  page.value = val;
  getUserList();
};
// 点击"新增"按钮
const handleAddBtn = () => {
  showAddDialog.value = true;
};
// 点击新增医生账号dialog的确定按钮
const handleAdd = () => {
  getRegister(addForm.value)
    .then(() => {
      message("新增账号成功", { type: "success" });
      handleClose();
    })
    .catch(() => {
      message("新增账号失败", {
        type: "warning"
      });
      handleClose();
    });
};
// 关闭新增医生账号dialog
const handleClose = () => {
  showAddDialog.value = false;
  getUserList();
  // Object.assign(addForm, initialFormState);
  addForm.value = initUserForm();
};
// 请求获取医生列表
const getUserList = () => {
  getUserListApi(page.value, pageSize.value)
    .then(res => {
      tableData.value = res.data.list;
      total.value = res.data.total;
    })
    .catch(message => {
      message(message || "获取医生列表失败", {
        type: "warning"
      });
    });
};
onMounted(() => {
  getUserList();
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
</style>
