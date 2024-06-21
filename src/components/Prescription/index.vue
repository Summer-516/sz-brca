<script setup lang="ts" name="Prescription">
import { useColumns } from "./columns";
import drugList from "./drugList.json";
const props = defineProps({ modelValue: Array, span: Number });
const emit = defineEmits(["update:modelValue"]);
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import Delete from "@iconify-icons/ep/delete";
const {
  columns,
  model,
  drug,
  handleChange,
  addDrug,
  dataList,
  handleDelete,
  handlePrescribe
} = useColumns(props, emit);
defineExpose({ handlePrescribe });
</script>

<template>
  <div>
    <el-collapse>
      <el-collapse-item title="药品开处" name="1">
        <div>
          <el-form
            :inline="true"
            ref="formRef"
            :model="model"
            label-placement="left"
            label-width="120"
          >
            <el-form-item label="药品搜索：">
              <el-select
                v-model="drug"
                filterable
                value-key="药品ID"
                placeholder="Select"
                @change="handleChange"
              >
                <el-option
                  v-for="item in drugList"
                  :key="item.药品ID"
                  :label="item.药品名称"
                  :value="item"
                />
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="addDrug">添加</el-button>
              <el-button type="success">AI分析</el-button>
            </el-form-item>
            <el-divider />
            <el-row>
              <el-col
                :span="props.span ? props.span : 4"
                v-for="(item, index) in Object.entries(drug)"
                :key="index"
              >
                <el-form-item :label="item[0] + ':'" label-width="100">
                  <el-date-picker
                    class="!w-full"
                    v-if="item[0] == '时间'"
                    v-model="drug[item[0]]"
                    type="date"
                    value-format="YYYY-MM-DD"
                  />
                  <el-input
                    v-else
                    :disabled="index > 4"
                    v-model="drug[item[0]]"
                  />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
        <div>
          <pure-table
            row-key="药品ID"
            border
            :data="dataList"
            :columns="columns"
          >
            <template #operation="{ row, index }">
              <el-popconfirm
                title="是否确认删除?"
                @confirm="handleDelete(row, index)"
              >
                <template #reference>
                  <el-button
                    class="reset-margin"
                    link
                    type="primary"
                    :icon="useRenderIcon(Delete)"
                  >
                    删除
                  </el-button>
                </template>
              </el-popconfirm>
            </template>
          </pure-table>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss" scoped></style>
