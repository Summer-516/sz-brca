<template>
  <div>
    <el-card shadow="never">
      <el-form :model="infoForm" label-width="auto" :inline="true">
        <el-form-item label="登记号">
          <el-input v-model="infoForm.登记号" style="width: 240px" />
        </el-form-item>

        <el-form-item label="性别">
          <el-select v-model="infoForm.性别" style="width: 240px">
            <el-option label="女" value="0" />
            <el-option label="男" value="1"
          /></el-select>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="infoForm.年龄" style="width: 240px" />
        </el-form-item>

        <el-form-item label="月经状态">
          <el-select v-model="infoForm.月经状态" style="width: 240px">
            <el-option label="绝经前" value="0" />
            <el-option label="绝经后" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="乳腺癌家族史">
          <el-select v-model="infoForm.乳腺癌家族史" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="长期雌激素使用史">
          <el-select v-model="infoForm.长期雌激素使用史" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="乳腺手术史">
          <el-select v-model="infoForm.乳腺手术史" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="肿块大小">
          <el-input v-model="infoForm.肿块大小" style="width: 240px" />
        </el-form-item>

        <el-form-item label="簇状钙化灶">
          <el-select v-model="infoForm.簇状钙化灶" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="腋窝淋巴结宏转移个数">
          <el-input
            v-model="infoForm.腋窝淋巴结宏转移个数"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="腋窝淋巴结微转移个数">
          <el-input
            v-model="infoForm.腋窝淋巴结微转移个数"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="锁骨上下区淋巴结转移情况">
          <el-select
            v-model="infoForm.锁骨上下区淋巴结转移情况"
            style="width: 240px"
          >
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="远处转移情况">
          <el-select v-model="infoForm.远处转移情况" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="转移部位">
          <el-input v-model="infoForm.转移部位" style="width: 240px" />
        </el-form-item>

        <el-form-item label="组织学类型">
          <el-select v-model="infoForm.组织学类型" style="width: 240px">
            <el-option label="浸润性导管癌" value="1" />
            <el-option label="浸润性小叶癌" value="2" />
            <el-option label="特殊类型癌" value="3" />
            <el-option label="原位癌" value="4" />
          </el-select>
        </el-form-item>

        <el-form-item label="组织学分级">
          <el-select v-model="infoForm.组织学分级" style="width: 240px">
            <el-option label="I级" value="1" />
            <el-option label="II级" value="2" />
            <el-option label="III级" value="3" />
          </el-select>
        </el-form-item>

        <el-form-item label="脉管癌栓">
          <el-select v-model="infoForm.脉管癌栓" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="神经侵犯">
          <el-select v-model="infoForm.神经侵犯" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="ER状态">
          <el-select v-model="infoForm.ER状态" style="width: 240px">
            <el-option label="0%" value="0" />
            <el-option label="1-10%" value="1" />
            <el-option label="≥10%" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="PR状态">
          <el-select v-model="infoForm.PR状态" style="width: 240px">
            <el-option label="0%" value="0" />
            <el-option label="1-10%" value="1" />
            <el-option label="≥10%" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="HER2状态IHC">
          <el-select v-model="infoForm.HER2状态IHC" style="width: 240px">
            <el-option label="无表达" value="0" />
            <el-option label="ultra low" value="1" />
            <el-option label="low" value="2" />
            <el-option label="positive" value="3" />
          </el-select>
        </el-form-item>

        <el-form-item label="HER2状态FISH">
          <el-select v-model="infoForm.HER2状态FISH" style="width: 240px">
            <el-option label="阴性" value="0" />
            <el-option label="阳性" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="Ki67">
          <el-select v-model="infoForm.Ki67" style="width: 240px">
            <el-option label="＜20%" value="0" />
            <el-option label="≥20%＜50%" value="1" />
            <el-option label="≥50%" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="CK5/6">
          <el-select v-model="infoForm.CK56" style="width: 240px">
            <el-option label="阴性" value="0" />
            <el-option label="阳性" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="EGFR">
          <el-select v-model="infoForm.EGFR" style="width: 240px">
            <el-option label="阴性" value="0" />
            <el-option label="阳性" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="PD-1/PD-L1">
          <el-select v-model="infoForm.PD1" style="width: 240px">
            <el-option label="无表达" value="0" />
            <el-option label="CPS1-10" value="1" />
            <el-option label="10-20" value="2" />
            <el-option label="≥20" value="3" />
          </el-select>
        </el-form-item>

        <el-form-item label="BRCA1/2胚系突变">
          <el-select v-model="infoForm.BRCA1" style="width: 240px">
            <el-option label="无突变" value="0" />
            <el-option label="有致病突变" value="1" />
            <el-option label="未检测" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="PI3CKA突变">
          <el-select v-model="infoForm.PI3CKA突变" style="width: 240px">
            <el-option label="无突变" value="0" />
            <el-option label="有突变" value="1" />
            <el-option label="未检测" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="AKT突变">
          <el-select v-model="infoForm.AKT突变" style="width: 240px">
            <el-option label="无突变" value="0" />
            <el-option label="有突变" value="1" />
            <el-option label="未检测" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="新辅助治疗">
          <el-select v-model="infoForm.新辅助治疗" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="化疗方案">
          <el-input v-model="infoForm.化疗方案" style="width: 240px" />
        </el-form-item>

        <el-form-item label="首次化疗时间">
          <el-date-picker
            v-model="infoForm.首次化疗时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="内分泌治疗方案">
          <el-input v-model="infoForm.内分泌治疗方案" style="width: 240px" />
        </el-form-item>

        <el-form-item label="首次内分泌治疗时间">
          <el-date-picker
            v-model="infoForm.首次内分泌治疗时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="靶向治疗方案">
          <el-input v-model="infoForm.靶向治疗方案" style="width: 240px" />
        </el-form-item>

        <el-form-item label="免疫治疗方案">
          <el-input v-model="infoForm.免疫治疗方案" style="width: 240px" />
        </el-form-item>

        <el-form-item label="放疗方案">
          <el-input v-model="infoForm.放疗方案" style="width: 240px" />
        </el-form-item>

        <el-form-item label="首次放疗时间">
          <el-date-picker
            v-model="infoForm.首次放疗时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="手术时间">
          <el-date-picker
            v-model="infoForm.手术时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="术后病理情况">
          <el-input v-model="infoForm.术后病理情况" style="width: 240px" />
        </el-form-item>

        <el-form-item label="基因组学检测情况">
          <el-select v-model="infoForm.基因组学检测情况" style="width: 240px">
            <el-option label="未检测" value="0" />
            <el-option label="微小RNA检测" value="1" />
            <el-option label="热点基因突变" value="2" />
            <el-option label="甲基化检测" value="3" />
          </el-select>
        </el-form-item>

        <el-form-item label="微小RNA检测">
          <el-select v-model="infoForm.微小RNA检测" style="width: 240px">
            <el-option label="无变化" value="0" />
            <el-option label="低表达" value="1" />
            <el-option label="高表达" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="热点基因突变">
          <el-select v-model="infoForm.热点基因突变" style="width: 240px">
            <el-option label="无突变" value="0" />
            <el-option label=">5个" value="1" />
            <el-option label=">10个" value="2" />
          </el-select>
        </el-form-item>

        <el-form-item label="甲基化检测">
          <el-select v-model="infoForm.甲基化检测" style="width: 240px">
            <el-option label="甲基化频率<10%" value="0" />
            <el-option label="甲基化频率<50%" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="首次复发时间">
          <el-date-picker
            v-model="infoForm.首次复发时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="局部复发部位">
          <el-input v-model="infoForm.局部复发部位" style="width: 240px" />
        </el-form-item>

        <el-form-item label="首次转移时间">
          <el-date-picker
            v-model="infoForm.首次转移时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="首次远处转移部位">
          <el-input v-model="infoForm.首次远处转移部位" style="width: 240px" />
        </el-form-item>

        <el-form-item label="复发转移后的治疗情况">
          <el-input
            v-model="infoForm.复发转移后的治疗情况"
            style="width: 240px"
          />
        </el-form-item>
        <el-form-item label="死亡时间">
          <el-date-picker
            v-model="infoForm.死亡时间"
            type="date"
            value-format="x"
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>
        <el-divider />
        <el-row>
          <el-col :offset="22" :span="2">
            <el-form-item>
              <!-- <el-button type="primary" @click="submit">提交</el-button> -->
              <el-button type="primary" @click="submit">
                {{ isEdit ? "保存" : "提交" }}
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import { addRecordCourseApi, updateRecordCourseApi } from "@/api/infomation";
import { message } from "@/utils/message";
import { useRoute } from "vue-router";
import router from "@/router";
const route = useRoute();
const isEdit = ref(false);
const id = ref("");
const infoForm = reactive({
  登记号: "",
  性别: "",
  年龄: "",
  月经状态: "",
  乳腺癌家族史: "",
  长期雌激素使用史: "",
  乳腺手术史: "",
  肿块大小: "",
  簇状钙化灶: "",
  腋窝淋巴结宏转移个数: "",
  腋窝淋巴结微转移个数: "",
  锁骨上下区淋巴结转移情况: "",
  远处转移情况: "",
  转移部位: "",
  组织学类型: "",
  组织学分级: "",
  脉管癌栓: "",
  神经侵犯: "",
  ER状态: "",
  PR状态: "",
  HER2状态IHC: "",
  HER2状态FISH: "",
  Ki67: "",
  CK56: "",
  EGFR: "",
  PD1: "",
  BRCA1: "",
  PI3CKA突变: "",
  AKT突变: "",
  新辅助治疗: "",
  化疗方案: "",
  首次化疗时间: "",
  内分泌治疗方案: "",
  首次内分泌治疗时间: "",
  靶向治疗方案: "",
  免疫治疗方案: "",
  放疗方案: "",
  首次放疗时间: "",
  手术时间: "",
  术后病理情况: "",
  基因组学检测情况: "",
  微小RNA检测: "",
  热点基因突变: "",
  甲基化检测: "",
  首次复发时间: "",
  局部复发部位: "",
  首次转移时间: "",
  首次远处转移部位: "",
  复发转移后的治疗情况: "",
  死亡时间: ""
});

// 定义需要转换为数字的字段
const numberFields = [
  "性别",
  "年龄",
  "月经状态",
  "乳腺癌家族史",
  "长期雌激素使用史",
  "乳腺手术史",
  "簇状钙化灶",
  "腋窝淋巴结宏转移个数",
  "腋窝淋巴结微转移个数",
  "锁骨上下区淋巴结转移情况",
  "远处转移情况",
  "组织学类型",
  "组织学分级",
  "脉管癌栓",
  "神经侵犯",
  "ER状态",
  "PR状态",
  "HER2状态IHC",
  "HER2状态FISH",
  "Ki67",
  "CK56",
  "EGFR",
  "PD1",
  "BRCA1",
  "PI3CKA突变",
  "AKT突变",
  "新辅助治疗",
  "基因组学检测情况",
  "微小RNA检测",
  "热点基因突变",
  "甲基化检测"
];
const submit = () => {
  const submitForm = {
    ...infoForm,
    "CK5/6": infoForm.CK56,
    "PD - 1 / PD - L1": infoForm.PD1,
    "BRCA1 / 2胚系突变": infoForm.BRCA1,
    ...Object.fromEntries(
      numberFields.map(field => [field, Number(infoForm[field])])
    )
  };
  // 删除原来的字段
  delete submitForm.CK56;
  delete submitForm.PD1;
  delete submitForm.BRCA1;
  // 根据isEdit判断使用哪个API
  const apiRequest = isEdit.value
    ? updateRecordCourseApi(id.value, submitForm)
    : addRecordCourseApi(submitForm);
  apiRequest
    .then(res => {
      console.log("res", res);
      message(`${isEdit.value ? "修改" : "提交"}病理信息成功`, {
        type: "success"
      });
      router.push("/infomation/index");
    })
    .catch(err => {
      message(
        `${isEdit.value ? "修改" : "提交"}病理信息失败: ${
          err.message || "未知错误"
        }`,
        {
          type: "warning"
        }
      );
    });
  // addRecordCourseApi(infoForm)
  //   .then(res => {
  //     console.log("res", res);
  //     message("提交病理信息成功", { type: "success" });
  //   })
  //   .catch(err => {
  //     message(`提交病理信息失败: ${err.message || "未知错误"}`, {
  //       type: "warning"
  //     });
  //   });
};

onMounted(() => {
  id.value = Array.isArray(route.query.id) ? route.query.id[0] : route.query.id;
  let rowData = route.query.rowData;

  if (Array.isArray(rowData)) {
    rowData = rowData[0];
  }

  if (typeof rowData === "string") {
    try {
      rowData = JSON.parse(decodeURIComponent(rowData));
      isEdit.value = true; // 如果有rowData，说明是编辑模式
    } catch (e) {
      console.error("解析rowData失败:", e);
      rowData = null;
    }
  }

  console.log("ID:", id);
  console.log("行数据:", rowData);

  if (rowData) {
    // 将 rowData 中的数据赋值到 infoForm
    Object.assign(infoForm, rowData);
  }
});
</script>
<style lang="scss" scoped></style>
