<script setup lang="ts" name="'NewlyDiagnosed'">
import { onMounted, ref } from "vue";
import { useUser } from "./hook";
import { PureTableBar } from "@/components/RePureTableBar";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";

// import Role from "@iconify-icons/ri/admin-line";
// import Password from "@iconify-icons/ri/lock-password-line";
// import More from "@iconify-icons/ep/more-filled";
import Delete from "@iconify-icons/ep/delete";
// import EditPen from "@iconify-icons/ep/edit-pen";
import Search from "@iconify-icons/ep/search";
import Refresh from "@iconify-icons/ep/refresh";
// import AddFill from "@iconify-icons/ri/add-circle-line";

const formRef = ref();
const {
  userId,
  isDetail,
  detailsForm,
  show,
  form,
  loading,
  columns,
  dataList,
  pagination,
  // buttonClass,
  onSearch,
  resetForm,
  toDetail,
  handleDelete,
  handleSizeChange,
  handleCurrentChange,
  handleSelectionChange,
  handleClose
} = useUser();

onMounted(() => {
  onSearch();
});
</script>

<template>
  <div class="main">
    <!-- <tree class="w-[17%] float-left" /> -->
    <div class="float-right w-[100%]">
      <el-form
        ref="formRef"
        :inline="true"
        :model="form"
        class="bg-bg_color w-[99/100] pl-8 pt-4"
      >
        <el-form-item label="病例号：" prop="patient">
          <el-input
            v-model="form.patient"
            placeholder="请输入病例号"
            clearable
            class="!w-[160px]"
          />
        </el-form-item>
        <!-- <el-form-item label="手机号码：" prop="phone">
          <el-input
            v-model="form.phone"
            placeholder="请输入手机号码"
            clearable
            class="!w-[160px]"
          />
        </el-form-item> -->

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
      </el-form>
      <PureTableBar title="初诊管理" :columns="columns" @refresh="onSearch">
        <!-- <template #buttons>
          <el-button
            type="primary"
            :icon="useRenderIcon(AddFill)"
            @click="addOrReadHandle()"
          >
            新增用户
          </el-button>
        </template> -->
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
                @click="toDetail(row.diagnosis_id)"
              >
                查看
              </el-button>
              <!-- <el-button
                class="reset-margin"
                link
                type="primary"
                :size="size"
                @click="toDiagnosis(row.diagnosis_id, row.medical_number)"
              >
                诊断
              </el-button> -->
              <el-popconfirm
                :title="`是否确认删除诊断号${row.diagnosis_id}`"
                @confirm="handleDelete(row.diagnosis_id)"
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

      <el-dialog top="5vh" v-model="show" :before-close="handleClose">
        <div
          @close="handleClose"
          @search="onSearch"
          :isDetail="isDetail"
          :detailsForm="detailsForm"
          :id="userId"
        />
      </el-dialog>
    </div>
  </div>
</template>

<style scoped lang="scss">
:deep(.el-dropdown-menu__item i) {
  margin: 0;
}
</style>
