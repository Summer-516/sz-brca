<template>
  <div>
    <el-card shadow="always" class="rounded-16px shadow-sm">
      <el-form
        ref="formRef"
        :model="model"
        label-placement="left"
        label-width="100"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="日期：">
              <el-date-picker
                disabled
                v-model="model.date"
                format="YYYY-MM-DD HH:mm:ss"
                value-format="x"
                type="datetime"
              />
            </el-form-item>
          </el-col>

          <el-col :span="15">
            <el-form-item label="医院：">
              <el-select v-model="model.hospital" placeholder="Select">
                <el-option
                  v-for="item in generalOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item label="急诊：">
              <el-switch
                v-model="model.isEmergency"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="主诉：">
              <el-input
                v-model="model.description"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 2,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="病史：">
              <el-input
                v-model="model.history"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 2,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="流行病学史：">
              <el-input
                v-model="model.epidemiological"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 2,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="辅助检查：">
              <el-input
                v-model="model.assistantExamination"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 2,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="诊断人：" class="label">
              <div>
                医生 <span style="color: blue">{{ username }}</span>
              </div>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="诊断意见：">
              <el-input
                v-model="model.opinions"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 2,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <!--
    <pre>
    {{ JSON.stringify(model, null, 2) }}
  </pre
    > -->
  </div>
</template>

<script setup lang="ts" name="Details">
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUserStoreHook } from "@/store/modules/user";
const route = useRoute();
const props = defineProps({
  data: Object
});
const username = computed(() => {
  return useUserStoreHook()?.username;
});

const getDetail = () => {
  console.log("getDetail", props.data);
  model.value = Object.assign(model.value, props.data);
};
onMounted(() => {
  getDetail();
});
const formRef = ref();

const model = ref({
  caseNumber: route.query.caseNum,
  date: "",
  sex: "female",
  MC: 0,
  isEmergency: 0,
  hospital: "山东大学附属生殖医院",
  description: "",
  不孕: 0,
  history: "",
  epidemiological: "",
  reproductiveHistory: {
    lastDate: "",
    state: "",
    age: 0,
    period: [0, 0, 0, 0],
    volume: "稀少",
    algomenorrhea: "轻度",
    menstruation: "规律",

    switchmociyuejing: true,
    briefSummary: null,
    description: "",
    G: 0,
    P: 0,
    A: 0,
    L: 0
  },
  physical: {
    height: 0,
    weight: 0,
    bloodPressure: [0, 0],
    description: ""
  },
  assistantExamination: "",
  coupleDescription: "",
  diagnosis: "",
  opinions: "",
  medication: false,
  BUltrasound: false
});

const generalOptions = ["山东大学附属生殖医院"].map(v => ({
  label: v,
  value: v
}));
</script>
<style lang="scss" scoped>
:deep(.label) {
  .el-form-item__label {
    font-weight: 700;
  }
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.out_box {
  padding-left: 20px;
  display: flex;

  .specialLetter {
    transform: scale(0.8);
    transform-origin: bottom;
  }
}
</style>
../../data
