<template>
  <div>
    <el-card shadow="never">
      <el-form :model="infoForm" label-width="auto" :inline="true">
        <el-form-item label="登记号">
          <el-input v-model="infoForm.registerNum" style="width: 240px" />
        </el-form-item>

        <el-form-item label="性别">
          <el-select v-model="infoForm.sex" style="width: 240px">
            <el-option label="女" value="0" />
            <el-option label="男" value="1"
          /></el-select>
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="infoForm.age" style="width: 240px" />
        </el-form-item>

        <el-form-item label="月经状态">
          <el-select v-model="infoForm.menstrualStatus" style="width: 240px">
            <el-option label="绝经前" value="0" />
            <el-option label="绝经后" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="乳腺癌家族史">
          <el-select v-model="infoForm.familyHistory" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="长期雌激素使用史">
          <el-select v-model="infoForm.estrogenUse" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="乳腺手术史">
          <el-select v-model="infoForm.breastSurgery" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="肿块大小">
          <el-input v-model="infoForm.massSize" style="width: 240px" />
        </el-form-item>

        <el-form-item label="簇状钙化灶">
          <el-select v-model="infoForm.calcifications" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="腋窝淋巴结宏转移个数">
          <el-input v-model="infoForm.axilla" style="width: 240px" />
        </el-form-item>

        <el-form-item label="锁骨上下区淋巴结转移情况">
          <el-select v-model="infoForm.collarbone" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="远处转移情况">
          <el-select v-model="infoForm.distant" style="width: 240px">
            <el-option label="无" value="0" />
            <el-option label="有" value="1" />
          </el-select>
        </el-form-item>

        <el-form-item label="转移部位">
          <el-input v-model="infoForm.metastasisSite" style="width: 240px" />
        </el-form-item>

        <el-form-item label="组织学类型">
          <el-select v-model="infoForm.histologicTypes" style="width: 240px">
            <el-option label="浸润性导管癌" value="1" />
            <el-option label="浸润性小叶癌" value="2" />
            <el-option label="特殊类型癌" value="3" />
            <el-option label="原位癌" value="4" />
          </el-select>
        </el-form-item>

        <el-form-item label="组织学分级">
          <el-select v-model="infoForm.histologicGrade" style="width: 240px">
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
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>

        <el-form-item label="手术时间">
          <el-date-picker
            v-model="infoForm.手术时间"
            type="date"
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
            placeholder="请选择日期"
            style="width: 240px"
          />
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const infoForm = reactive({
  registerNum: "",
  sex: "",
  age: "",
  menstrualStatus: "",
  familyHistory: "",
  estrogenUse: "",
  breastSurgery: "",
  massSize: "",
  calcifications: "",
  axilla: "",
  collarbone: "",
  distant: "",
  metastasisSite: "",
  histologicTypes: "",
  histologicGrade: "",
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
</script>
<style lang="scss" scoped></style>
