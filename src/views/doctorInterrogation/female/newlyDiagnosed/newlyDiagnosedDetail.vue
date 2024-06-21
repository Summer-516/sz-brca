<template>
  <div>
    <el-card shadow="always" class="rounded-16px shadow-sm">
      <template #header>
        <div class="card-header">
          <span>初诊</span>
          <el-button class="button" type="primary" @click="goBack">
            返回
          </el-button>
        </div>
      </template>
      <el-form
        ref="formRef"
        :model="model"
        label-placement="left"
        label-width="100"
      >
        <el-row :gutter="10">
          <el-col :span="2"><h3>现病史</h3></el-col>
          <el-col :span="4">
            <el-button
              class="button"
              type="primary"
              @click="HandelSubmit('现病史')"
            >
              提交
            </el-button>
          </el-col>
          <el-divider border-style="dashed" />
          <el-col :span="24">
            <el-form-item label="主诉：" label-width="120">
              <el-input
                v-model="model1.chief_complaint"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="目前诊断：" label-width="120">
              <el-input
                v-model="model1.current_diagnosis"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="主要临床表现：" label-width="120" />
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="意识障碍：">
              <el-select v-model="model2.consciousness">
                <el-option
                  v-for="item in 意识障碍Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="抽搐：">
              <el-select v-model="model2.twitch">
                <el-option
                  v-for="item in 抽搐Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="代谢性酸中毒：" label-width="130">
              <el-select v-model="model2.acidosis">
                <el-option
                  v-for="item in 代谢性酸中毒Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="血糖：" label-width="130">
              <el-select v-model="model2.glu_status">
                <el-option
                  v-for="item in 血糖Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="呕吐：">
              <el-switch
                v-model="model2.vomit"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="腹泻：">
              <el-switch
                v-model="model2.diarrhea"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="发热：">
              <el-switch
                v-model="model2.fever"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="气促：">
              <el-switch
                v-model="model2.breath"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肝脾肿大：">
              <el-switch
                v-model="model2.liver_spleen"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="体重不增：">
              <el-switch
                v-model="model2.no_weight_gain"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="运动发育落后：" label-width="130">
              <el-switch
                v-model="model2.motor_development"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="便秘：">
              <el-switch
                v-model="model2.constipate"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="精神症状：">
              <el-switch
                v-model="model2.spirit"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="呼吸衰竭：">
              <el-switch
                v-model="model2.respiratory"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="心功能衰竭：">
              <el-switch
                v-model="model2.heart"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="心律失常：">
              <el-switch
                v-model="model2.arrhythmia"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肝功能异常：">
              <el-switch
                v-model="model2.liver"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肾功能异常：">
              <el-switch
                v-model="model2.kidney"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="贫血：">
              <el-switch
                v-model="model2.anemia"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="血小板减少：">
              <el-switch
                v-model="model2.thrombocytopenia"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="高血氨：">
              <el-switch
                v-model="model2.hyperammonemia"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="乳酸升高：">
              <el-switch
                v-model="model2.lactate"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="电解质紊乱：">
              <el-switch
                v-model="model2.electrolyte"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="黄疸：">
              <el-switch
                v-model="model2.jaundice"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="出凝血异常：">
              <el-switch
                v-model="model2.coagulation"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="视力异常：">
              <el-switch
                v-model="model2.vision"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="听力异常：">
              <el-switch
                v-model="model2.hearing"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col :span="2"><h3>体格检查</h3></el-col>
          <el-col :span="4">
            <el-button
              class="button"
              type="primary"
              @click="HandelSubmit('体格检查')"
            >
              提交
            </el-button>
          </el-col>
          <el-divider border-style="dashed" />
          <el-col :span="6">
            <el-form-item label="身高">
              <el-input v-model="model3.height">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="体重">
              <el-input v-model="model3.weight">
                <template #append>kg</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="头维">
              <el-input v-model="model3.head_cir">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="收缩压">
              <el-input v-model="model3.systolic_blood_pressure">
                <template #append>mmHg</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="舒张压">
              <el-input v-model="model3.diastolic_blood_pressure">
                <template #append>mmHg</template>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="意识：">
              <el-select v-model="model3.consciousness">
                <el-option
                  v-for="item in 意识Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="呼吸：">
              <el-select v-model="model3.breathe">
                <el-option
                  v-for="item in 呼吸Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="心脏：">
              <el-select v-model="model3.heart">
                <el-option
                  v-for="item in 心脏Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="肝脏：">
              <el-select v-model="model3.liver">
                <el-option
                  v-for="item in 肝脏Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="脾脏：">
              <el-select v-model="model3.spleen">
                <el-option
                  v-for="item in 脾脏Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="面容特殊：">
              <el-switch
                v-model="model3.face"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col
            ><h3>实验室检测({{ dayjs().format("YYYY-MM-DD") }})</h3></el-col
          >
          <el-divider border-style="dashed" />
          <el-col :span="2"><h4>生化</h4></el-col>
          <el-col :span="4">
            <el-button
              class="button"
              type="primary"
              @click="HandelSubmit('生化')"
            >
              提交
            </el-button>
          </el-col>
          <el-divider border-style="dotted" />
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血常规：WBC" label-width="130">
              <el-input v-model="model4.wbc">
                <template #append>*0^9/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Hgb">
              <el-input v-model="model4.hgb">
                <template #append>g/dl</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="MCV">
              <el-input v-model="model4.mcv">
                <template #append>fl</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="PLT">
              <el-input v-model="model4.plt">
                <template #append>*10^9</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="肝酶：ALT" label-width="130">
              <el-input v-model="model4.alt">
                <template #append>IU/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="AST">
              <el-input v-model="model4.ast">
                <template #append>IU/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="TBIL">
              <el-input v-model="model4.tbil">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="DBIL">
              <el-input v-model="model4.dbil">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="肾功：BUN" label-width="130">
              <el-input v-model="model4.bun">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Cr">
              <el-input v-model="model4.cr">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="尿酸">
              <el-input v-model="model4.uric_acid">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="ALB">
              <el-input v-model="model4.alb">
                <template #append>g/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="心肌酶谱：CK" label-width="130">
              <el-input v-model="model4.ck">
                <template #append>U/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="CK-MB">
              <el-input v-model="model4.ck_mb">
                <template #append>U/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="肌钙蛋白">
              <el-input v-model="model4.tn">
                <template #append>ng/ml</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血糖：" label-width="130">
              <el-input v-model="model4.glu">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="血氨：">
              <el-input v-model="model4.blood_ammonia">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血气分析：PH" label-width="130">
              <el-input v-model="model4.ph">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="HCO3">
              <el-input v-model="model4.hco3">
                <template #append>mmo/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="BE">
              <el-input v-model="model4.be">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Na">
              <el-input v-model="model4.na">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="K" label-width="130">
              <el-input v-model="model4.k">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Ca">
              <el-input v-model="model4.ca">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="乳酸">
              <el-input v-model="model4.lactic_acid">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血脂：甘油三脂" label-width="130">
              <el-input v-model="model4.tg">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="总胆固醇">
              <el-input v-model="model4.tc">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="凝血四项：APTT" label-width="130">
              <el-input v-model="model4.aptt">
                <template #append>s</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="PT">
              <el-input v-model="model4.pt">
                <template #append>s</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Fib">
              <el-input v-model="model4.fib">
                <template #append>g/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item
              :label="`血串联质谱（${dayjs().format('YYYY-MM-DD')}）：C0`"
              label-width="240"
            >
              <el-input v-model="model4.btms_set[0].c0">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="C3">
              <el-input v-model="model4.btms_set[0].c3">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="C3/C2">
              <el-input v-model="model4.btms_set[0].c3_c2">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Met">
              <el-input v-model="model4.btms_set[0].met">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="6">
            <el-form-item label="Met/C3">
              <el-input v-model="model4.btms_set[0].met_c3">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="其他">
              <el-input v-model="model4.btms_set[0].other">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item
              :label="`尿气相色谱质谱（${dayjs().format('YYYY-MM-DD')}）：MMA`"
              label-width="260"
            >
              <el-input v-model="model4.ugcms_set[0].mma">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="甲基枸橼酸">
              <el-input v-model="model4.ugcms_set[0].methyl_citrate">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="其他 ">
              <el-input v-model="model4.ugcms_set[0].other">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="同型半胱氨酸">
              <el-input v-model="model4.hc">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item
              :label="`基因检测结果（${dayjs().format(
                'YYYY-MM-DD'
              )}）：检测机构`"
              label-width="265"
            >
              <el-input v-model="model4.snv_set[0].agency" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="检测项目">
              <el-input v-model="model4.snv_set[0].project" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="基因名称：">
              <el-input v-model="model4Annex.gene_name">
                <template #append>NM_</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="4">
            <el-form-item label="突变1：">
              <el-input v-model="model4Annex.snv_detail_set[0].mutation" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Exon：">
              <el-input v-model="model4Annex.snv_detail_set[0].exon" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="蛋白质改变：">
              <el-input
                v-model="model4Annex.snv_detail_set[0].protein_changes"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="致病性：">
              <el-input v-model="model4Annex.snv_detail_set[0].pathogenicity" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="父/母源：">
              <el-input v-model="model4Annex.snv_detail_set[0].source" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="已报道：">
              <el-switch
                v-model="model4Annex.snv_detail_set[0].reported"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="4">
            <el-form-item label="突变2：">
              <el-input v-model="model4Annex.snv_detail_set[1].mutation" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="Exon：">
              <el-input v-model="model4Annex.snv_detail_set[1].exon" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="蛋白质改变：">
              <el-input
                v-model="model4Annex.snv_detail_set[1].protein_changes"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="致病性：">
              <el-input v-model="model4Annex.snv_detail_set[1].pathogenicity" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="父/母源：">
              <el-input v-model="model4Annex.snv_detail_set[1].source" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="已报道：">
              <el-switch
                v-model="model4Annex.snv_detail_set[1].reported"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="其他突变及家族检测结果：" label-width="180">
              <el-input
                v-model="model4.other"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col :span="2"><h4>辅助检查</h4></el-col>
          <el-col :span="4">
            <el-button
              class="button"
              type="primary"
              @click="HandelSubmit('辅助检查')"
            >
              提交
            </el-button>
          </el-col>
          <el-divider border-style="dotted" />
          <el-col><h4>超声</h4></el-col>
          <el-col :span="24">
            <el-form-item label="肝脾：">
              <el-input
                v-model="model5.liver_spleen"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="20" :offset="2" class="mb-2">
            <template v-if="typeof model5.liver_spleen_diagram !== 'string'">
              <el-upload
                ref="uploadRef"
                v-model:file-list="model5.liver_spleen_diagram"
                action="#"
                :limit="1"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </template>
            <template v-else>
              <img :src="model5.liver_spleen_diagram" alt="Uploaded Image" />
            </template>
          </el-col>
          <el-col :span="24">
            <el-form-item label="心脏：">
              <el-input
                v-model="model5.heart"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="20" :offset="2" class="mb-2">
            <template v-if="typeof model5.heart_diagram !== 'string'">
              <el-upload
                ref="uploadRef"
                v-model:file-list="model5.heart_diagram"
                action="#"
                :limit="1"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>
            </template>
            <template v-else>
              <img :src="model5.heart_diagram" alt="Uploaded Image" />
            </template>
          </el-col>
          <el-divider border-style="dotted" />
          <el-col><h4>影像</h4></el-col>
          <el-col :span="8">
            <el-form-item label="头颅：MRI">
              <template v-if="typeof model5.head_mri !== 'string'">
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="model5.head_mri"
                  action="#"
                  :limit="1"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else>
                <img :src="model5.head_mri" alt="Uploaded Image" />
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="头颅CT：">
              <template v-if="typeof model5.head_ct !== 'string'">
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="model5.head_ct"
                  action="#"
                  :limit="1"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else>
                <img :src="model5.head_ct" alt="Uploaded Image" />
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="胸片：">
              <template v-if="typeof model5.dr !== 'string'">
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="model5.dr"
                  action="#"
                  :limit="1"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else>
                <img :src="model5.dr" alt="Uploaded Image" />
              </template>
            </el-form-item>
          </el-col>

          <el-divider border-style="dotted" />
          <el-col :span="12">
            <el-form-item label="心电图：">
              <template v-if="typeof model5.ecg !== 'string'">
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="model5.ecg"
                  action="#"
                  :limit="1"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else>
                <img :src="model5.ecg" alt="Uploaded Image" />
              </template>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="脑电图：">
              <template v-if="typeof model5.eeg !== 'string'">
                <el-upload
                  ref="uploadRef"
                  v-model:file-list="model5.eeg"
                  action="#"
                  :limit="1"
                  list-type="picture-card"
                  :auto-upload="false"
                >
                  <el-icon><Plus /></el-icon>

                  <template #file="{ file }">
                    <div>
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
              <template v-else>
                <img :src="model5.eeg" alt="Uploaded Image" />
              </template>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="智力评估：">
              <el-input
                v-model="model5.iqe"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="异常表现：">
              <el-input
                v-model="model5.avep_desc"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="听觉、视觉诱发电位正常：" label-width="200">
              <el-switch
                v-model="model5.avep"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col><h4>(3)其他补充</h4></el-col>
          <el-divider border-style="dotted" />
          <el-col :span="24">
            <el-form-item label="补充：">
              <el-input
                v-model="model.其他补充"
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
        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>治疗</h3></el-col>
          <el-divider border-style="dashed" />
        </el-row>
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="日期：" label-width="60">
              <el-date-picker
                v-model="model.治疗日期"
                type="daterange"
                range-separator="至"
                start-placeholder="开始"
                end-placeholder="结束"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="诱因治疗：">
              <el-select v-model="model.诱因治疗">
                <el-option
                  v-for="item in 诱因治疗Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="机械辅助通气：" label-width="120">
              <el-switch
                v-model="model.机械辅助通气"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="血液滤过：">
              <el-switch
                v-model="model.血液滤过"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="重症监护：">
              <el-switch
                v-model="model.重症监护"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="饮食：天然蛋白质" label-width="130">
              <el-input v-model="model.天然蛋白质">
                <template #append>g/kg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="特殊蛋白质">
              <el-input v-model="model.特殊蛋白质">
                <template #append>g/kg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="药物：维生素B12" label-width="130">
              <el-input v-model="model.维生素B12">
                <template #append>mg/次</template>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="维生素B12">
              <el-input v-model="model.天1次">
                <template #append>天1次</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="左卡尼丁">
              <el-input v-model="model.药物左卡尼丁">
                <template #append>g/日</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="甜菜碱">
              <el-input v-model="model.甜菜碱">
                <template #append>mg/次</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="叶酸" label-width="130">
              <el-input v-model="model.叶酸">
                <template #append>mg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="亚叶酸钙">
              <el-input v-model="model.亚叶酸钙">
                <template #append>mg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="碳酸氢钠片">
              <el-input v-model="model.碳酸氢钠片">
                <template #append>mg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="精氨酸">
              <el-input v-model="model.精氨酸">
                <template #append>mg/d</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="康复治疗：">
              <el-switch
                v-model="model.康复治疗"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肝脏移植：">
              <el-switch
                v-model="model.肝脏移植"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />

        <el-row justify="center">
          <el-col :xs="8" :md="4" :lg="3" :xl="2">
            <el-form-item label-width="0" v-if="isDetail">
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- <pre>
    {{ JSON.stringify(model, null, 1) }}
  </pre
    > -->
  </div>
</template>

<script setup lang="ts" name="NewlyDiagnosedDetail">
import { ref, onMounted, computed } from "vue";
import { ElMessage, dayjs } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import type { UploadFile } from "element-plus";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";

import {
  postDiagnosis,
  postClinical,
  postPhysical,
  postBiochemical,
  postAuxiliary,
  getDiagnosisDetail
} from "@/api/doctor";
const formRef = ref();
const route = useRoute();
const router = useRouter();
const isDetail = computed(() => {
  return !!route.query.medical_number;
});
const diagnosis = ref(null);
const patient = ref(route.query.id);
const medical_number = route.query.medical_number;
const disabled = ref(false);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
onMounted(() => {
  getDetail();
});

const handleRemove = (file: UploadFile) => {
  console.log(file);
};

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};

const handleDownload = (file: UploadFile) => {
  console.log(file);
};

const model1 = ref({
  diagnosis_time: null,
  age_year: null,
  age_month: null,
  chief_complaint: null,
  current_diagnosis: null,
  acute_attack: null
});
const model2 = ref({
  consciousness: "",
  twitch: "",
  acidosis: "",
  glu_status: "",
  vomit: "",
  diarrhea: "否",
  fever: "否",
  breath: "否",
  liver_spleen: "否",
  no_weight_gain: "否",
  motor_development: "否",
  constipate: "否",
  spirit: "否",
  respiratory: "否",
  heart: "否",
  arrhythmia: "否",
  liver: "否",
  kidney: "否",
  anemia: "否",
  thrombocytopenia: "否",
  hyperammonemia: "否",
  lactate: "否",
  electrolyte: "否",
  jaundice: "否",
  coagulation: "否",
  vision: "否",
  hearing: "否"
});
const model3 = ref({
  height: null,
  weight: null,
  head_cir: null,
  systolic_blood_pressure: null,
  diastolic_blood_pressure: null,
  face: null,
  breathe: null,
  heart: null,
  liver: null,
  spleen: null,
  consciousness: null
});
const model4 = ref({
  wbc: null,
  hgb: null,
  mcv: null,
  plt: null,
  alt: null,
  ast: null,
  tbil: null,
  dbil: null,
  bun: null,
  cr: null,
  uric_acid: null,
  alb: null,
  ck: null,
  ck_mb: null,
  tn: null,
  glu: null,
  blood_ammonia: null,
  ph: null,
  hco3: null,
  be: null,
  na: null,
  k: null,
  ca: null,
  lactic_acid: null,
  tg: null,
  tc: null,
  aptt: null,
  pt: null,
  fib: null,
  hc: null,
  other: null,
  btms_set: [
    {
      c0: null,
      c3: null,
      c3_c2: null,
      met: null,
      met_c3: null,
      other: null
    }
  ],
  ugcms_set: [
    {
      mma: null,
      methyl_citrate: null,
      other: null
    }
  ],
  snv_set: [
    {
      agency: null,
      project: null,
      snv_detail_set: []
    }
  ]
});
const model4Annex = ref({
  gene_name: null,
  snv_detail_set: [
    {
      mutation: null,
      exon: null,
      protein_changes: null,
      pathogenicity: null,
      source: null,
      reported: null
    },
    {
      gene_name: null,
      mutation: null,
      exon: null,
      protein_changes: null,
      pathogenicity: null,
      source: null,
      reported: null
    }
  ]
});
const model5 = ref({
  liver_spleen: null,
  liver_spleen_diagram: [],
  heart: null,
  heart_diagram: [],
  head_mri: [],
  head_ct: [],
  dr: [],
  ecg: [],
  eeg: [],
  iqe: null,
  avep_desc: null,
  avep: null
});
const model = ref({
  肝脾: "",
  辅助检查心脏: "",
  头颅MRI: "",
  头颅CT: "",
  胸片: "",
  心电图: "",
  脑电图: "",
  智力评估: "",
  异常表现: "",
  "听觉、视觉诱发电位：正常": 1,
  其他补充: "",
  诱因治疗: "",
  住院: "",
  机械辅助通气: "",
  血液滤过: "",
  重症监护: "",
  治疗日期: "",
  天然蛋白质: "",
  特殊蛋白质: "",
  维生素B12: "",
  天1次: "",
  药物左卡尼丁: "",
  甜菜碱: "",
  叶酸: "",
  亚叶酸钙: "",
  碳酸氢钠片: "",
  精氨酸: "",
  康复治疗: "",
  肝脏移植: ""
});

const 意识障碍Options = ["无", "嗜睡", "昏睡", "昏迷"].map(v => ({
  label: v,
  value: v
}));
const 诱因治疗Options = ["发热", "腹泻"].map(v => ({
  label: v,
  value: v
}));
const 呼吸Options = ["平顺", "气促", "深大"].map(v => ({
  label: v,
  value: v
}));
const 心脏Options = ["心率", "律", "杂音"].map(v => ({
  label: v,
  value: v
}));
const 肝脏Options = ["肋下  cm", "质地"].map(v => ({
  label: v,
  value: v
}));
const 脾脏Options = ["肋下  cm", "质地"].map(v => ({
  label: v,
  value: v
}));
const 意识Options = ["正常", "嗜睡", "昏睡", "昏迷"].map(v => ({
  label: v,
  value: v
}));
const 血糖Options = ["高", "正常", "低"].map(v => ({
  label: v,
  value: v
}));
const 代谢性酸中毒Options = ["无", "轻度", "中度", "重度"].map(v => ({
  label: v,
  value: v
}));
const 抽搐Options = ["无", "持续时间", "表现形式"].map(v => ({
  label: v,
  value: v
}));
const onSubmit = () => {
  // updateNewlyDiagnosedInfo(model.value)
  //   .then(res => {
  //     if (res.code === 200) {
  //       ElMessage.success("提交成功！");
  //       router.go(-1);
  //     } else {
  //       ElMessage.warning(res.message);
  //     }
  //   })
  //   .catch(err => {
  //     ElMessage.error("提交失败！" + err.message);
  //   });
};
const getDetail = () => {
  const { DetailId, medical_number } = route.query;
  if (DetailId) {
    getDiagnosisDetail(DetailId)
      .then(res => {
        if (res.code === 200 && res.data) {
          if (!medical_number) {
            const {
              chief_complaint,
              current_diagnosis,
              diagnosis_id,
              patient: patient_id
            } = res.data;
            diagnosis.value = diagnosis_id;
            patient.value = patient_id;
            model1.value = Object.assign(model1.value, {
              chief_complaint,
              current_diagnosis
            });
            model2.value = Object.assign(model2.value, res.data.clinical);
            model3.value = Object.assign(model3.value, res.data.physical);
            model4.value = Object.assign(model4.value, res.data.biochemical);
            model4Annex.value = {
              gene_name: model4.value.snv_set[0]?.snv_detail_set[0]?.gene_name,
              snv_detail_set: model4.value.snv_set[0].snv_detail_set
            };
            model5.value = Object.assign(model5.value, res.data.auxiliary);
          } else {
            console.log("getDiagnosisDetail", res.data);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};

function goBack() {
  router.go(-1);
}
function HandelSubmit(type) {
  switch (type) {
    case "现病史":
      handleFn1();
      break;
    case "体格检查":
      handleFn2();
      break;
    case "生化":
      handleFn3();
      break;
    case "辅助检查":
      handleFn4();
      break;
    default:
      console.log("HandelSubmit");
  }
}
async function handleFn1() {
  try {
    const data1 = { ...model1.value, patient: patient.value, medical_number };
    const res1 = await postDiagnosis(data1);
    diagnosis.value = res1.data.diagnosis_id;
    const data2 = {
      ...model2.value,
      diagnosis: diagnosis.value
    };
    await postClinical(data2);
    ElMessage.success("提交成功");
  } catch (error) {
    ElMessage.warning(error);
    console.log("err", error);
  }
}
function handleFn2() {
  const data = {
    ...model3.value,
    patient: patient.value,
    diagnosis: diagnosis.value
  };
  postPhysical(data)
    .then(() => {
      ElMessage.success("提交成功");
    })
    .catch(err => {
      ElMessage.warning(err);
    });
}
function handleFn3() {
  const result = handleFn3Data(model4.value, model4Annex.value);
  const data = {
    ...result,
    patient: patient.value,
    diagnosis: diagnosis.value
  };
  postBiochemical(data)
    .then(() => {
      ElMessage.success("提交成功");
    })
    .catch(err => {
      ElMessage.warning(err);
    });
}
function handleFn3Data(model4, annex) {
  const data1 = JSON.parse(JSON.stringify(model4));
  const data2 = JSON.parse(JSON.stringify(annex));
  data2.snv_detail_set.forEach(item => {
    item.gene_name = data2.gene_name;
  });
  data1.snv_set[0].snv_detail_set = data2.snv_detail_set;
  return data1;
}
function handleFn4() {
  const fd = new FormData();
  Object.keys(model5.value).forEach(key => {
    if (model5.value[key] instanceof Object) {
      fd.set(key, model5.value[key][0]?.raw);
    } else {
      fd.append(key, model5.value[key]);
    }
  });
  fd.append("patient", String(patient.value));
  fd.append("diagnosis", diagnosis.value);

  postAuxiliary(fd)
    .then(() => {
      ElMessage.success("提交成功");
    })
    .catch(err => {
      ElMessage.warning(err);
    });
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
