<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-form :model="form" label-width="auto" :inline="true">
            <el-row>
              <el-col :span="6">
                <el-form-item label="病案号">
                  <el-input
                    v-model="form.identificationNum"
                    style="width: 240px"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="患者姓名">
                  <el-input v-model="form.name" style="width: 240px" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="床号">
                  <el-input v-model="form.bedNum" style="width: 240px" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-button type="primary" :icon="Search">查询</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="病区">
                  <el-select v-model="form.ward" style="width: 240px">
                    <el-option label="aaa" value="aaa" />
                    <el-option label="bbb" value="bbb" />
                    <el-option label="ccc" value="ccc" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="主管医师">
                  <el-select
                    v-model="form.competentPhysician"
                    style="width: 240px"
                  >
                    <el-option label="全部医师" value="aaa" />
                    <el-option label="bbb" value="bbb" />
                    <el-option label="ccc" value="ccc" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="登记号">
                  <el-input v-model="form.bedNum" style="width: 240px" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column fixed prop="number" label="序号" />
        <el-table-column prop="number" label="登记号" />
        <el-table-column prop="account" label="账号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="name" label="诊断" />
        <el-table-column fixed prop="number" label="状态" />
        <el-table-column prop="number" label="护士拒绝" />
        <el-table-column prop="account" label="入径状态" />
        <el-table-column prop="name" label="性别" />
        <el-table-column prop="name" label="年龄" />
        <el-table-column fixed prop="number" label="图标菜单" />
        <el-table-column prop="number" label="入院日期" />
        <el-table-column prop="account" label="住院天数" />
        <el-table-column prop="name" label="主管医师" />
        <el-table-column prop="name" label="病区" />
        <el-table-column fixed prop="number" label="入院次数" />
        <el-table-column prop="number" label="带组医师" />
        <el-table-column prop="account" label="主任医师" />
        <el-table-column prop="name" label="医生便签" />
        <el-table-column prop="name" label="病案号" />
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
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
const page = ref(1);
const pageSize = ref(10);
const total = ref(100);
const tableData = [];
const form = reactive({
  identificationNum: "",
  name: "",
  bedNum: "",
  ward: "",
  competentPhysician: ""
});

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
  pageSize.value = val;
  console.log("pageSize", pageSize.value);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
const handleClick = () => {
  console.log("click");
};
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
