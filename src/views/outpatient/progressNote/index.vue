<template>
  <div onmousedown="return false">
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
import { ref, computed } from "vue";
import { message } from "@/utils/message";
// import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { useOutpatientStore } from "@/store/modules/outpatient";
const outpatientStore = useOutpatientStore();
const router = useRouter();
const selectedPatient = computed(() => outpatientStore.getSelectedPatient);
const dialogVisible = ref(true);
const tableData = [
  { type: "首次病程记录" },
  { type: "首次病程记录（中西医科）" },
  { type: "上级医师查房记录" },
  { type: "代主治医生查房记录" },
  { type: "日常病程记录" },
  { type: "术后小结（引用）" },
  { type: "术后首次病程记录（引用）" },
  { type: "抢救记录" },
  { type: "操作记录" },
  { type: "危急值记录" },
  { type: "交班记录" },
  { type: "换班记录" }
];
// 双击表格某行
const chooseType = row => {
  if (!selectedPatient.value) {
    message("请先选择患者", { type: "warning" });
    router.push({
      path: "/outpatient/patientList"
    });
  } else {
    if (row.type === "首次病程记录") {
      router.push({
        path: "/outpatient/progressNote/firstCourse"
      });
    }
  }
};
// 关闭dialog
// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm("确定关闭吗？")
//     .then(() => {
//       done();
//       router.push({
//         path: "/outpatient/patientList"
//       });
//     })
//     .catch(() => {
//       // catch error
//     });
// };
const handleClose = () => {
  router.push({
    path: "/outpatient/patientList"
  });
};
</script>
<style lang="scss" scoped></style>
