<script setup lang="ts" name="Patient">
// import { ref } from "vue";
import { useRole } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
// import More from "@iconify-icons/ep/more-filled";
import Delete from "@iconify-icons/ep/delete";
// import Search from "@iconify-icons/ep/search";
// import Refresh from "@iconify-icons/ep/refresh";
// import Menu from "@iconify-icons/ep/menu";
import AddFill from "@iconify-icons/ri/add-circle-line";
import { onMounted } from "vue";
// import Detail from "@iconify-icons/ri/article-line";
// const formRef = ref();
const {
  // form,
  loading,
  columns,
  dataList,
  pagination,
  // buttonClass,
  onSearch,
  // resetForm,
  toDiagnosis,
  addOrReadHandle,
  handleDelete,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange
} = useRole();
onMounted(() => {
  onSearch();
});
</script>

<template>
  <div class="main">
    <!-- <el-form
      ref="formRef"
      :inline="true"
      :model="form"
      class="bg-bg_color w-[99/100] pl-8 pt-4"
    >
      <el-form-item label="病历类型：" prop="caseType">
        <el-select
          v-model="form.caseType"
          placeholder="请选择状态"
          clearable
          class="!w-[180px]"
        >
          <el-option label="单人病历" value="0" />
          <el-option label="夫妻双人病历" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="条件筛选：" prop="searchType">
        <el-select
          v-model="form.searchType"
          placeholder="请选择搜索类型"
          clearable
          class="!w-[180px]"
        >
          <el-option label="姓名" value="name" />
          <el-option label="身份证号" value="1" />
          <el-option label="病历号" value="caseNum" />
        </el-select>
      </el-form-item>
      <el-form-item prop="searchData">
        <el-input
          v-model="form.searchData"
          placeholder="请输入搜索内容"
          clearable
          class="!w-[200px]"
          @change="onSearch"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :icon="useRenderIcon(Search)"
          :loading="loading"
          @click="onSearch"
        >
          搜索
        </el-button>
        <el-button :icon="useRenderIcon(Refresh)" @click="resetForm(formRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form> -->

    <PureTableBar title="病例管理" :columns="columns" @refresh="onSearch">
      <template #buttons>
        <el-button
          type="primary"
          :icon="useRenderIcon(AddFill)"
          @click="addOrReadHandle()"
        >
          新增病例
        </el-button>
      </template>
      <template v-slot="{ size }">
        <pure-table
          ref="tableRef"
          row-key="id"
          adaptive
          :adaptiveConfig="{ offsetBottom: 108 }"
          align-whole="center"
          table-layout="auto"
          :loading="loading"
          :size="size"
          :data="dataList"
          :columns="columns"
          :pagination="pagination"
          :paginationSmall="size === 'small' ? true : false"
          :header-cell-style="{
            background: 'var(--el-fill-color-light)',
            color: 'var(--el-text-color-primary)'
          }"
          @selection-change="handleSelectionChange"
          @page-size-change="handleSizeChange"
          @page-current-change="handleCurrentChange"
        >
          <template #operation="{ row }">
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              @click="addOrReadHandle(row.patient_id)"
            >
              查看
            </el-button>
            <el-button
              class="reset-margin"
              link
              type="primary"
              :size="size"
              @click="toDiagnosis(row.patient_id, row.medical_number)"
            >
              诊断
            </el-button>
            <el-popconfirm
              :title="`是否确认删除病例号${row.patient_id}`"
              @confirm="handleDelete(row)"
            >
              <template #reference>
                <el-button
                  class="reset-margin"
                  link
                  type="primary"
                  :size="size"
                  :icon="useRenderIcon(Delete)"
                >
                  删除
                </el-button>
              </template>
            </el-popconfirm>
          </template>
        </pure-table>
      </template>
    </PureTableBar>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
