<template>
  <div>
    <vue-draggable-resizable
      v-if="false && showDrag"
      class="draggable_box"
      :w="600"
      :h="600"
      :max-width="1000"
      :z="100"
      :parent="false"
    >
      <div>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane
            v-for="item in tabList"
            :key="item.name"
            :label="item.title"
            :name="item.name"
          >
            <Details :data="item.data" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </vue-draggable-resizable>
    <el-card shadow="always" class="rounded-16px shadow-sm">
      <template #header>
        <div class="card-header">
          <span>复诊</span>
          <div>
            <el-button
              v-if="false"
              class="button"
              type="primary"
              @click="handleShowDrag()"
            >
              历史病例
            </el-button>
            <el-button class="button" type="primary" @click="goBack">
              返回
            </el-button>
          </div>
        </div>
      </template>
      <el-form
        ref="formRef"
        :model="model"
        label-placement="left"
        label-width="100"
      >
        <el-row>
          <el-col :span="6">
            <el-form-item label="记录日期：">
              <el-date-picker
                v-model="model.记录日期"
                format="YYYY-MM-DD"
                value-format="x"
                type="date"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄：">
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-input v-model="model.年龄岁">
                    <template #append>岁</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input v-model="model.年龄月">
                    <template #append>月</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="急性发作：">
              <el-switch
                v-model="model.急性发作"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>临床表现</h3></el-col>
          <el-divider border-style="dashed" />
          <el-col :span="6">
            <el-form-item label="意识障碍：">
              <el-select v-model="model.意识障碍">
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
              <el-select v-model="model.抽搐">
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
              <el-select v-model="model.代谢性酸中毒">
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
              <el-select v-model="model.血糖">
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
                v-model="model.呕吐"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>

          <el-col :span="4">
            <el-form-item label="腹泻：">
              <el-switch
                v-model="model.腹泻"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="发热：">
              <el-switch
                v-model="model.发热"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="气促：">
              <el-switch
                v-model="model.气促"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肝脾肿大：">
              <el-switch
                v-model="model.肝脾肿大"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="体重不增：">
              <el-switch
                v-model="model.体重不增"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="运动发育落后：" label-width="130">
              <el-switch
                v-model="model.运动发育落后"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="便秘：">
              <el-switch
                v-model="model.便秘"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="精神症状：">
              <el-switch
                v-model="model.精神症状"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="呼吸衰竭：">
              <el-switch
                v-model="model.呼吸衰竭"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="心功能衰竭：">
              <el-switch
                v-model="model.心功能衰竭"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="心律失常：">
              <el-switch
                v-model="model.心律失常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肝功能异常：">
              <el-switch
                v-model="model.肝功能异常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="肾功能异常：">
              <el-switch
                v-model="model.肾功能异常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="贫血：">
              <el-switch
                v-model="model.贫血"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="血小板减少：">
              <el-switch
                v-model="model.血小板减少"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="高血氨：">
              <el-switch
                v-model="model.高血氨"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="乳酸升高：">
              <el-switch
                v-model="model.乳酸升高"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="电解质紊乱：">
              <el-switch
                v-model="model.电解质紊乱"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="黄疸：">
              <el-switch
                v-model="model.黄疸"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="出凝血异常：">
              <el-switch
                v-model="model.出凝血异常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="视力异常：">
              <el-switch
                v-model="model.视力异常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="听力异常：">
              <el-switch
                v-model="model.听力异常"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col><h3>体格检查</h3></el-col>
          <el-divider border-style="dashed" />
          <el-col :span="6">
            <el-form-item label="身高">
              <el-input v-model="model.mInfo.身高">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="体重">
              <el-input v-model="model.mInfo.体重">
                <template #append>kg</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="头维">
              <el-input v-model="model.mInfo.头维">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="血压">
              <el-input v-model="model.mInfo.血压">
                <template #append>mmHg</template>
              </el-input>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="意识：">
              <el-select v-model="model.意识">
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
              <el-select v-model="model.呼吸">
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
              <el-select v-model="model.心脏">
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
              <el-select v-model="model.肝脏">
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
              <el-select v-model="model.脾脏">
                <el-option
                  v-for="item in 脾脏Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col
            ><h3>实验室检测({{ dayjs().format("YYYY-MM-DD") }})</h3></el-col
          >
          <el-divider border-style="dashed" />
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血常规：WBC" label-width="130">
              <el-input v-model="model.WBC">
                <template #append>*0^9/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Hgb">
              <el-input v-model="model.Hgb">
                <template #append>g/dl</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="MCV">
              <el-input v-model="model.MCV">
                <template #append>fl</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="PLT">
              <el-input v-model="model.PLT">
                <template #append>*10^9</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="肝酶：ALT" label-width="130">
              <el-input v-model="model.ALT">
                <template #append>IU/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="AST">
              <el-input v-model="model.AST">
                <template #append>IU/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="TBIL">
              <el-input v-model="model.TBIL">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="DBIL">
              <el-input v-model="model.DBIL">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="肾功：BUN" label-width="130">
              <el-input v-model="model.BUN">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Cr">
              <el-input v-model="model.Cr">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="尿酸">
              <el-input v-model="model.尿酸">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="ALB">
              <el-input v-model="model.ALB">
                <template #append>g/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="心肌酶谱：CK" label-width="130">
              <el-input v-model="model.CK">
                <template #append>U/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="CK-MB">
              <el-input v-model="model['CK-MB']">
                <template #append>U/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="肌钙蛋白">
              <el-input v-model="model.肌钙蛋白">
                <template #append>ng/ml</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血糖：" label-width="130">
              <el-input v-model="model.生化血糖">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="血氨：">
              <el-input v-model="model.血氨">
                <template #append>umol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血气分析：PH" label-width="130">
              <el-input v-model="model.PH">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="HCO3">
              <el-input v-model="model.HCO3">
                <template #append>mmo/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="BE">
              <el-input v-model="model.BE">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Na">
              <el-input v-model="model.Na">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="K" label-width="130">
              <el-input v-model="model.K">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Ca">
              <el-input v-model="model.Ca">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="乳酸">
              <el-input v-model="model.乳酸">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="血脂：甘油三脂" label-width="130">
              <el-input v-model="model.甘油三脂">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="总胆固醇">
              <el-input v-model="model.总胆固醇">
                <template #append>mmol/L</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="凝血四项：APTT" label-width="130">
              <el-input v-model="model.APTT">
                <template #append>s</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="PT">
              <el-input v-model="model.PT">
                <template #append>s</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Fib">
              <el-input v-model="model.Fib">
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
              <el-input v-model="model.C0">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="C3">
              <el-input v-model="model.C3">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="C3/C2">
              <el-input v-model="model[' C3/C2']">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Met">
              <el-input v-model="model.Met">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="6">
            <el-form-item label="Met/C3">
              <el-input v-model="model['Met/C3']">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="其他">
              <el-input v-model="model.其他">
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
              <el-input v-model="model.MMA">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="甲基枸橼酸">
              <el-input v-model="model.甲基枸橼酸">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="其他 ">
              <el-input v-model="model.尿气相色谱质谱其他">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="同型半胱氨酸">
              <el-input v-model="model.同型半胱氨酸">
                <template #append />
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider />
        <el-row :gutter="10">
          <el-col><h3>辅助检查</h3></el-col>
          <el-divider border-style="dashed" />
          <el-col><h4>超声</h4></el-col>
          <el-col :span="24">
            <el-form-item label="肝脾：">
              <el-input
                v-model="model.肝脾"
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
            <el-form-item label="心脏：">
              <el-input
                v-model="model.辅助检查心脏"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-divider border-style="dotted" />
          <el-col><h4>影像</h4></el-col>
          <el-col :span="12">
            <el-form-item label="头颅：MRI">
              <el-input
                v-model="model.头颅MRI"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="头颅CT：">
              <el-input
                v-model="model.头颅CT"
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
            <el-form-item label="胸片：">
              <el-input
                v-model="model.胸片"
                placeholder="Please input"
                type="textarea"
                :autosize="{
                  minRows: 1,
                  maxRows: 3
                }"
              />
            </el-form-item>
          </el-col>
          <el-divider border-style="dotted" />
          <el-col :span="24">
            <el-form-item label="心电图：">
              <el-input
                v-model="model.心电图"
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
            <el-form-item label="脑电图：">
              <el-input
                v-model="model.脑电图"
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
            <el-form-item label="智力评估：">
              <el-input
                v-model="model.智力评估"
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
                v-model="model.异常表现"
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
            <el-form-item label="听觉、视觉诱发电位：正常：" label-width="200">
              <el-switch
                v-model="model['听觉、视觉诱发电位：正常']"
                inline-prompt
                active-text="是"
                inactive-text="否"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="其他补充：">
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
            <el-form-item label="住院：" label-width="60">
              <el-date-picker
                v-model="model.住院日期"
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
                :active-value="1"
                :inactive-value="0"
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
                :active-value="1"
                :inactive-value="0"
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
                :active-value="1"
                :inactive-value="0"
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
                :active-value="1"
                :inactive-value="0"
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
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="治疗调整：">
              <el-input
                v-model="model.治疗调整"
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

        <el-row justify="center">
          <el-col :xs="8" :md="4" :lg="3" :xl="2">
            <el-form-item label-width="0">
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!-- <pre>
    {{ JSON.stringify(model, null, 2) }}
  </pre
    > -->
  </div>
</template>

<script setup lang="ts" name="">
import { onMounted, ref } from "vue";
import { ElMessage, dayjs } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import // addFemaleReferralInfo,
// getHistoryReferralList,
// getNewlyDiagnosedDetail
"@/api/doctor";

import Details from "./details.vue";
import type { TabsPaneContext } from "element-plus";

const route = useRoute();

const showDrag = ref(false);
const isNoData = ref(true);
const activeName = ref("1");
const tabList = ref([]);
// const tabList1 = [];
// const getDetail = () => {
//   const { sex, caseNum } = route.query;
//   let listLength = 0;
//   getNewlyDiagnosedDetail({ sex, caseNum }).then(res => {
//     const strObj = Object.entries(res.data.assistantExamination)
//       .map(item => {
//         return `${item[0]}:${item[1]}`;
//       })
//       .join(",");
//     res.data.assistantExamination = strObj;
//     if (res.code == 200) {
//       tabList.value.unshift({
//         title: "初诊结果",
//         name: 0,
//         data: res.data
//       });
//     }
//   });
//   getHistoryReferralList({
//     sex,
//     caseNum
//   })
//     .then(res => {
//       if (res.code == 200) {
//         listLength = res.data.length;
//         for (let i = 0; i < listLength; i++) {
//           tabList1.push({
//             title: `第${i + 1}次复诊结果`,
//             name: String(i + 1),
//             data: res.data[i]
//           });
//         }
//       }
//     })
//     .catch(err => {
//       console.log(err);
//     })
//     .finally(() => {
//       if (listLength == 0) {
//         isNoData.value = true;
//       } else {
//         isNoData.value = false;
//         tabList.value.push(...tabList1);
//         activeName.value = tabList1[tabList1.length - 1].name;
//         showDrag.value = !showDrag.value;
//       }
//     });
// };
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const handleShowDrag = () => {
  if (!isNoData.value) {
    showDrag.value = !showDrag.value;
  } else {
    ElMessage.warning("没有历史数据");
  }
};
// const onSubmit = () => {
//   addFemaleReferralInfo(model.value)
//     .then(res => {
//       if (res.code === 200) {
//         ElMessage.success("提交成功！");
//         router.go(-1);
//       } else {
//         ElMessage.warning(res.message);
//       }
//     })
//     .catch(err => {
//       ElMessage.error("提交失败！" + err.message);
//     });
// };
const formRef = ref();
const router = useRouter();
const model = ref({
  记录日期: "",
  年龄岁: "",
  年龄月: "",
  急性发作: 0,

  mInfo: {
    身高: "",
    体重: "",
    头维: "",
    血压: ""
  },

  意识障碍: "",
  抽搐: "",
  代谢性酸中毒: "",
  血糖: "",
  呕吐: 0,
  腹泻: 0,
  发热: 0,
  气促: 0,
  肝脾肿大: 0,
  体重不增: 0,
  运动发育落后: 0,
  便秘: 0,
  精神症状: 0,
  呼吸衰竭: 0,
  心功能衰竭: 0,
  心律失常: 0,
  肝功能异常: 0,
  肾功能异常: 0,
  贫血: 0,
  血小板减少: 0,
  高血氨: 0,
  乳酸升高: 0,
  电解质紊乱: 0,
  黄疸: 0,
  出凝血异常: 0,
  视力异常: 0,
  听力异常: 0,
  意识: "",
  呼吸: "",
  心脏: "",
  肝脏: "",
  脾脏: "",
  WBC: "",
  Hgb: "",
  MCV: "",
  PLT: "",
  ALT: "",
  AST: "",
  TBIL: "",
  DBIL: "",
  BUN: "",
  Cr: "",
  尿酸: "",
  ALB: "",
  CK: "",
  "CK-MB": "",
  肌钙蛋白: "",
  生化血糖: "",
  血氨: "",
  PH: "",
  HCO3: "",
  BE: "",
  Na: "",
  K: "",
  Ca: "",
  乳酸: "",
  甘油三脂: "",
  总胆固醇: "",
  APTT: "",
  PT: "",
  Fib: "",
  C0: "",
  C3: "",
  " C3/C2": "",
  Met: "",
  "Met/C3": "",
  其他: "",
  MMA: "",
  甲基枸橼酸: "",
  尿气相色谱质谱其他: "",
  同型半胱氨酸: "",
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
  住院日期: "",
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
  肝脏移植: "",
  治疗调整: ""
});

onMounted(() => {
  // getDetail();
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

function goBack() {
  router.go(-1);
}
// function handleValidateButtonClick(e: MouseEvent) {
//   e.preventDefault();
//   formRef.value?.validate(errors => {
//     if (!errors) {
//       ElMessage.success("验证成功");
//     } else {
//       console.log(errors);
//       ElMessage.error("验证失败");
//     }
//   });
// }
</script>
<style lang="scss" scoped>
.draggable_box {
  overflow: auto;
  background-color: #f6f6f6;
  padding: 1px 20px;
  bottom: 0;
  right: 0;

  .demo-tabs {
    .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
  }
}

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
