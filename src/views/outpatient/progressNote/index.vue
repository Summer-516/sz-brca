<template>
  <div>
    <el-card>
      <template #header>
        <div class="card-header">
          <el-form :model="progressForm" label-width="auto" :inline="true">
            <el-form-item label="登记号：">
              <el-input v-model="progressForm.登记号" style="width: 240px" />
            </el-form-item>
            <el-form-item label="住院号：">
              <el-input v-model="progressForm.住院号" style="width: 240px" />
            </el-form-item>
            <el-form-item label="床号：">
              <el-input v-model="progressForm.床号" style="width: 240px" />
            </el-form-item>
            <el-form-item label="科室：">
              <el-input v-model="progressForm.科室" style="width: 240px" />
            </el-form-item>
            <el-form-item label="姓名：">
              <el-input v-model="progressForm.姓名" style="width: 240px" />
            </el-form-item>
            <el-form-item label="性别：">
              <el-input v-model="progressForm.性别" style="width: 240px" />
            </el-form-item>
            <el-form-item label="年龄：">
              <el-input v-model="progressForm.年龄" style="width: 240px" />
            </el-form-item>
            <el-form-item label="性质：">
              <el-input v-model="progressForm.性质" style="width: 240px" />
            </el-form-item>
          </el-form>
        </div>
      </template>
      <el-form :model="progressForm" label-width="auto" :inline="true">
        <el-row>
          <el-form-item>
            <el-date-picker
              v-model="progressForm.time"
              type="datetime"
              placeholder="Pick a Date"
              format="YYYY/MM/DD hh:mm:ss"
              value-format="x"
            />
          </el-form-item>
          <span class="subtitle">首次病程记录</span>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item>
              <p>患者小冬，25岁，女，因&nbsp;</p>
              <el-input
                v-model="progressForm.主诉"
                style="width: 240px"
                autosize
                type="textarea"
                placeholder="主诉"
              />
              <p>&nbsp;于&nbsp;</p>
              <el-date-picker
                v-model="progressForm.admissionTime"
                type="date"
                placeholder="入院时间"
                value-format="x"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="病例特点：">
              <el-input
                v-model="progressForm.病例特点"
                style="width: 960px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="诊断依据及鉴别诊断：">
              <el-input v-show="false" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="1、初步诊断：">
              <el-input
                v-model="progressForm.tentativeDiagnosis"
                style="width: 960px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="2、诊断依据：">
              <el-input
                v-model="progressForm.diagnosticBasis"
                style="width: 960px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="3、鉴别诊断：">
              <el-input
                v-model="progressForm.differentialDiagnosis"
                style="width: 960px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="诊疗计划：">
              <el-input
                v-model="progressForm.诊疗计划"
                style="width: 960px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row type="flex" justify="end">
          <el-col :span="7">
            <el-form-item label="规培/实习医生：">
              <el-select
                v-model="progressForm.实习生"
                filterable
                placeholder="签名"
                style="width: 240px"
              >
                <el-option label="实习生1" value="实习生1" />
                <el-option label="实习生2" value="实习生2" />
              </el-select>
            </el-form-item>
            <el-form-item label="医生签名：">
              <el-select
                v-model="progressForm.医生"
                filterable
                placeholder="签名"
                style="width: 240px"
              >
                <el-option label="医生1" value="医生1" />
                <el-option label="医生2" value="医生2" />
              </el-select>
            </el-form-item>
            <el-form-item label="上级医生签名：">
              <el-select
                v-model="progressForm.上级医生"
                filterable
                placeholder="签名"
                style="width: 240px"
              >
                <el-option label="上级医生1" value="上级医生1" />
                <el-option label="上级医生2" value="上级医生2" />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="firstCource">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { firstCourceApi } from "@/api/patient";
const progressForm = ref({
  登记号: "0022144215",
  住院号: "11",
  床号: "11",
  科室: "甲乳腺科",
  姓名: "小冬",
  性别: "女",
  年龄: "34",
  性质: "一档医保",
  time: new Date(),
  主诉: "",
  admissionTime: "",
  病例特点: "",
  tentativeDiagnosis: "",
  diagnosticBasis: "",
  differentialDiagnosis: "",
  诊疗计划: "",
  实习生: "",
  医生: "",
  上级医生: ""
});

const combinedDiagnosis = computed(() => {
  return (
    `1、初步诊断：${progressForm.value.tentativeDiagnosis || ""}；` +
    `2、诊断依据：${progressForm.value.diagnosticBasis || ""}；` +
    `3、鉴别诊断：${progressForm.value.differentialDiagnosis || ""}`
  );
});

const firstCource = () => {
  const patientId = "667b80637dd8c2821e520d27";
  const dataToSend = {
    ...progressForm.value,
    诊断依据及鉴别诊断: combinedDiagnosis.value
  };
  delete dataToSend.tentativeDiagnosis;
  delete dataToSend.diagnosticBasis;
  delete dataToSend.differentialDiagnosis;
  console.log("dataToSend", dataToSend);
  firstCourceApi(patientId, dataToSend);
};
</script>
<style lang="scss" scoped></style>
