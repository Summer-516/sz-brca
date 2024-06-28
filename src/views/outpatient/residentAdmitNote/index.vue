<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="模版选择"
      width="400"
      :before-close="handleClose"
    >
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="400px"
        @row-dblclick="row => chooseType(row)"
      >
        <el-table-column prop="type" label="模板库" />
      </el-table>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialogVisible = ref(true);
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const tableData = [
  { type: "再次入院记录" },
  { type: "修正诊断" },
  { type: "出院诊断" },
  { type: "死亡诊断" },
  { type: "入院记录" },
  { type: "入院记录（昏迷患者）" },
  { type: "入院记录（肺癌化疗）" },
  { type: "入院记录（结直肠癌化疗）" },
  { type: "入院记录（宫颈癌）" },
  { type: "入院记录（上消化道出血）" },
  { type: "入院记录（乳腺肿物）" },
  { type: "入院记录（甲状腺肿物）" }
];
// 双击表格某行
const chooseType = row => {
  console.log("双击的row", row);
  if (row.type === "入院记录") {
    router.push({
      path: "/outpatient/residentAdmitNote/beHospitalized"
    });
  }
};
// 关闭dialog
const handleClose = (done: () => void) => {
  ElMessageBox.confirm("确定关闭吗？")
    .then(() => {
      done();
      router.push({
        path: "/outpatient/patientList"
      });
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style lang="scss" scoped></style>
