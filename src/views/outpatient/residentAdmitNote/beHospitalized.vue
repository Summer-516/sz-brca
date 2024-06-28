<template>
  <div>
    <el-card shadow="never">
      <template #header>
        <div class="card-header">
          <el-form :model="infoForm" label-width="auto" :inline="true">
            <el-row>
              <el-col :span="6">
                <el-form-item label="姓名">
                  <el-input v-model="infoForm.name" style="width: 240px" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别">
                  <el-select v-model="infoForm.sex" style="width: 240px">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                    <el-option label="其他" value="其他" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="年龄">
                  <el-input v-model="infoForm.age" style="width: 240px" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="婚姻状况">
                  <el-select
                    v-model="infoForm.maritalStatus"
                    style="width: 240px"
                  >
                    <el-option label="已婚" value="已婚" />
                    <el-option label="未婚" value="未婚" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="民族">
                  <el-input v-model="infoForm.nation" style="width: 240px" />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="职业">
                  <el-select v-model="infoForm.occupation" style="width: 240px">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                    <el-option label="其他" value="其他" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="入院时间">
                  <el-input
                    v-model="infoForm.admissionTime"
                    style="width: 240px"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="记录时间">
                  <el-select v-model="infoForm.writeTime" style="width: 240px">
                    <el-option label="已婚" value="已婚" />
                    <el-option label="未婚" value="未婚" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <el-form-item label="出生地">
                  <el-select v-model="infoForm.birthplace" style="width: 240px">
                    <el-option label="深圳南山区" value="深圳南山区" />
                    <el-option label="深圳龙华区" value="深圳龙华区" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="住址">
                  <el-select v-model="infoForm.address" style="width: 240px">
                    <el-option label="已婚" value="已婚" />
                    <el-option label="未婚" value="未婚" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </template>
      <el-form :model="caseForm" label-width="auto" :inline="true">
        <el-row>
          <el-col :span="24">
            <el-form-item label="主诉：">
              <el-input
                v-model="caseForm.mainSuit"
                style="width: 240px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="现病史：">
              <el-input
                v-model="caseForm.hpi"
                style="width: 240px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 既往史 -->
        <el-row>
          <el-col :span="24">
            <el-form-item label="既往史：">
              <el-input v-show="false" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="平素健康状况：">
              <el-select
                v-model="caseForm.condition"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in conditionOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>
                &nbsp;。否认“慢性支气管炎、高血压、冠心病、糖尿病、肾病”等病史，否认“病毒性肝炎、结核”等传染史。
              </p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="手术外伤史：" class="bold-label">
              <el-select
                v-model="caseForm.haveOperation"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;手术史，&nbsp;&nbsp;</p>
              <el-select
                v-model="caseForm.haveHurt"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;外伤史。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="输血史：">
              <el-select
                v-model="caseForm.haveTransfusion"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;输血史。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="食物/药物过敏史：">
              <el-select
                v-model="caseForm.haveAllergy"
                filterable
                style="width: 120px"
              >
                <el-option
                  v-for="item in haveAllergyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
            <el-form-item>
              <el-input
                v-if="caseForm.haveAllergy === '有过敏史'"
                v-model="caseForm.allergyHistory"
                style="width: 240px"
                autosize
                type="textarea"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="预防接种史：">
              <el-select
                v-model="caseForm.haveVaccination"
                multiple
                filterable
                placeholder="Select"
                style="width: 240px"
              >
                <el-option
                  v-for="item in haveVaccinationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 个人史 -->
        <el-row>
          <el-col>
            <el-form-item label="个人史：" class="bold-label">
              <p>出生地{{ infoForm.birthplace }}，</p>
              <el-select v-model="caseForm.livingHistory" style="width: 180px">
                <el-option label="无外地久居史" value="无外地久居史" />
                <el-option label="有外地久居史" value="有外地久居史" />
              </el-select>
              <p>&nbsp;，</p>
              <el-select
                v-model="caseForm.epidemicHistory"
                style="width: 180px"
              >
                <el-option label="无疫区疫水接触史" value="无疫区疫水接触史" />
                <el-option label="有疫区疫水接触史" value="有疫区疫水接触史" />
              </el-select>
              <p>&nbsp;，</p>
              <el-select
                v-model="caseForm.radioactiveRays"
                style="width: 200px"
              >
                <el-option
                  label="无放射线及毒物接触史"
                  value="无放射线及毒物接触史"
                />
                <el-option
                  label="有放射线及毒物接触史"
                  value="有放射线及毒物接触史"
                />
              </el-select>
              <p>&nbsp;，</p>
              <el-select v-model="caseForm.smokingHistory" style="width: 200px">
                <el-option label="否认吸烟史" value="否认吸烟史" />
                <el-option label="有吸烟史" value="有吸烟史" />
                <el-option label="已戒烟" value="已戒烟" />
              </el-select>
              <p>&nbsp;，</p>
              <el-select
                v-model="caseForm.drinkingHistory"
                style="width: 200px"
              >
                <el-option label="否认饮酒史" value="否认饮酒史" />
                <el-option label="有饮酒史" value="有饮酒史" />
                <el-option label="少量饮酒" value="少量饮酒" />
                <el-option label="偶饮酒" value="偶饮酒" />
                <el-option label="酗酒" value="酗酒" />
                <el-option label="已戒酒" value="已戒酒" />
              </el-select>
              <p>&nbsp;，</p>
              <el-select v-model="caseForm.drugAddiction" style="width: 90px">
                <el-option label="否认" value="否认" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;药物、毒物嗜好。</p>
              <el-select v-model="caseForm.venerealHistory" style="width: 90px">
                <el-option label="否认" value="否认" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;性病和冶游史。</p>
            </el-form-item>
          </el-col>
        </el-row>

        <!-- 婚育史 -->
        <el-row>
          <el-col>
            <el-form-item label="婚育史：" class="bold-label">
              <el-select
                v-model="caseForm.maritalStatus"
                placeholder="婚姻状况"
                style="width: 130px"
              >
                <el-option label="未婚未育" value="未婚未育" />
                <el-option label="已婚未育" value="已婚未育" />
                <el-option label="已婚已育" value="已婚已育" />
                <el-option label="离异" value="离异" />
                <el-option label="丧偶" value="丧偶" />
              </el-select>
              <p>&nbsp;配偶健康状况，&nbsp;</p>
              <el-select
                v-model="caseForm.partnerHealth"
                placeholder="配偶健康状况"
                style="width: 130px"
              >
                <el-option label="良好" value="良好" />
                <el-option label="一般" value="一般" />
                <el-option label="差" value="差" />
              </el-select>
              <p>&nbsp;。育有&nbsp;</p>
              <el-input
                v-model="caseForm.sonNum"
                style="width: 80px"
                placeholder="儿子数量"
              />
              <p>&nbsp;子&nbsp;</p>
              <el-input
                v-model="caseForm.daughterNum"
                style="width: 80px"
                placeholder="女儿数量"
              />
              <p>&nbsp;女，身体健康。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="月经史：" class="bold-label">
              <p>初潮年龄&nbsp;</p>
              <el-input v-model="caseForm.menarcheAge" style="width: 80px" />
              <p>&nbsp;岁&nbsp;</p>
              <div class="fraction-input">
                <el-input v-model="caseForm.duration" style="width: 60px" />
                <span>———————</span>
                <el-input v-model="caseForm.interval" style="width: 60px" />
              </div>
              <el-select v-model="caseForm.MenstrualType" style="width: 140px">
                <el-option label="绝经年龄：" value="绝经年龄" />
                <el-option label="末次月经：" value="末次月经" />
              </el-select>
              <el-input
                v-if="caseForm.MenstrualType === '绝经年龄'"
                v-model="caseForm.menopauseAge"
                style="width: 80px"
              />
              <div v-if="caseForm.MenstrualType === '末次月经'">
                <el-form-item>
                  <el-date-picker
                    v-model="caseForm.lastMenstrualPeriod"
                    type="date"
                    placeholder="末次月经日期"
                  />
                  <p>&nbsp;既往月经周期规则，月经量正常，无痛经。</p>
                </el-form-item>
              </div>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- 家族史 -->
        <el-row>
          <el-col>
            <el-form-item label="家族史：" class="bold-label">
              <p>父亲&nbsp;</p>
              <el-select v-model="caseForm.fatherStatus" style="width: 200px">
                <el-option label="健在" value="健在" />
                <el-option label="身体状况不详" value="身体状况不详" />
                <el-option label="已故" value="已故" />
                <el-option label="已故，死因：" value="已故死因" />
                <el-option label="患有：" value="患有" />
              </el-select>
              <el-input
                v-if="caseForm.fatherStatus === '已故死因'"
                v-model="caseForm.fatherDeathCause"
                style="width: 240px"
                autosize
                type="textarea"
              />
              <!-- <div v-if="caseForm.fatherStatus === '患有'">
                <el-form-item>
                  <el-input
                    v-model="caseForm.fatherIllness"
                    style="width: 240px"
                    autosize
                    type="textarea"
                  />
                  <p>&nbsp;，家中&nbsp;</p>
                  <el-select
                    v-model="caseForm.fatherSimilar"
                    style="width: 60px"
                  >
                    <el-option label="有" value="有" />
                    <el-option label="无" value="无" />
                  </el-select>
                  <p>&nbsp;类似患者</p>
                </el-form-item>
              </div> -->
              <el-input
                v-if="caseForm.fatherStatus === '患有'"
                v-model="caseForm.fatherIllness"
                style="width: 240px"
                autosize
                type="textarea"
              />
              <p v-if="caseForm.fatherStatus === '患有'">&nbsp;，家中&nbsp;</p>
              <el-select
                v-if="caseForm.fatherStatus === '患有'"
                v-model="caseForm.fatherSimilar"
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p v-if="caseForm.fatherStatus === '患有'">&nbsp;类似患者</p>
              <p>&nbsp;；母亲&nbsp;</p>
              <el-select v-model="caseForm.motherStatus" style="width: 200px">
                <el-option label="健在" value="健在" />
                <el-option label="身体状况不详" value="身体状况不详" />
                <el-option label="已故" value="已故" />
                <el-option label="已故，死因：" value="已故死因" />
                <el-option label="患有：" value="患有" />
              </el-select>
              <el-input
                v-if="caseForm.motherStatus === '已故死因'"
                v-model="caseForm.motherDeathCause"
                style="width: 240px"
                autosize
                type="textarea"
              />
              <el-input
                v-if="caseForm.motherStatus === '患有'"
                v-model="caseForm.motherIllness"
                style="width: 240px"
                autosize
                type="textarea"
              />
              <p v-if="caseForm.motherStatus === '患有'">&nbsp;，家中&nbsp;</p>
              <el-select
                v-if="caseForm.motherStatus === '患有'"
                v-model="caseForm.motherSimilar"
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p v-if="caseForm.motherStatus === '患有'">
                &nbsp;类似患者。&nbsp;
              </p>
              <el-select v-model="caseForm.heredofamilial" style="width: 80px">
                <el-option label="否认" value="否认" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;家族遗传性病史。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="患者须知：">
              <p>病史陈述者：&nbsp;</p>
              <el-select v-model="caseForm.representor" style="width: 120px">
                <el-option label="患者本人" value="患者本人" />
                <el-option label="患者及家属" value="患者及家属" />
                <el-option label="患者家属" value="患者家属" />
                <el-option label="患者同事" value="患者同事" />
                <el-option label="其他" value="其他" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item>
              <p>病历可靠性：&nbsp;</p>
              <el-select v-model="caseForm.reliability" style="width: 120px">
                <el-option label="可靠" value="可靠" />
                <el-option label="基本可靠" value="基本可靠" />
                <el-option label="不可靠" value="不可靠" />
                <el-option label="仅供参考" value="仅供参考" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-divider />
      <!-- 体格检查 -->
      <el-form :model="checkupForm" label-width="auto" :inline="true">
        <el-row>
          <span> 体格检查 </span>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="T：">
              <el-input
                v-model="checkupForm.T"
                placeholder="体温"
                style="width: 150px"
              >
                <template #append>℃</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="P：">
              <el-input
                v-model="checkupForm.P"
                placeholder="脉搏"
                style="width: 160px"
              >
                <template #append>次/分</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="R：">
              <el-input
                v-model="checkupForm.R"
                placeholder="呼吸"
                style="width: 160px"
              >
                <template #append>次/分</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="BP：">
              <el-input
                v-model="checkupForm.systolic"
                placeholder="收缩压"
                style="width: 110px"
              />
              <p>&nbsp;/&nbsp;</p>
              <el-input
                v-model="checkupForm.diastolic"
                placeholder="舒张压"
                style="width: 190px"
              >
                <template #append>mmHg</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-form-item label="身高：">
              <el-input
                v-model="checkupForm.height"
                placeholder="身高"
                style="width: 160px"
              >
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="体重：">
              <el-input
                v-model="checkupForm.weight"
                placeholder="体重"
                style="width: 160px"
              >
                <template #append>kg</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="一般状况：" class="bold-label">
              <p>发育&nbsp;</p>
              <el-select
                v-model="checkupForm.development"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;，营养&nbsp;</p>
              <el-select
                v-model="checkupForm.nutrition"
                filterable
                style="width: 80px"
              >
                <el-option label="良好" value="良好" />
                <el-option label="中等" value="中等" />
                <el-option label="不良" value="不良" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.body"
                filterable
                style="width: 100px"
              >
                <el-option label="正力体型" value="正力体型" />
                <el-option label="无力体型" value="无力体型" />
                <el-option label="超力体型" value="超力体型" />
                <el-option label="瘦长型" value="瘦长型" />
                <el-option label="匀称型" value="匀称型" />
                <el-option label="矮胖型" value="矮胖型" />
                <el-option label="恶病质" value="恶病质" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.position"
                filterable
                style="width: 160px"
              >
                <el-option label="自主体位" value="自主体位" />
                <el-option label="被动体位" value="被动体位" />
                <el-option label="强迫体位" value="强迫体位" />
                <el-option label="强迫仰卧位" value="强迫仰卧位" />
                <el-option label="强迫俯卧位" value="强迫俯卧位" />
                <el-option label="强迫侧卧位" value="强迫侧卧位" />
                <el-option label="强迫坐位" value="强迫坐位" />
                <el-option label="端坐呼吸" value="端坐呼吸" />
                <el-option
                  label="强迫坐位/端坐呼吸"
                  value="强迫坐位/端坐呼吸"
                />
                <el-option label="强迫蹲位" value="强迫蹲位" />
                <el-option label="强迫停立位" value="强迫停立位" />
                <el-option label="辗转体位" value="辗转体位" />
                <el-option label="角弓反张位" value="角弓反张位" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.state"
                filterable
                style="width: 100px"
              >
                <el-option label="神志清楚" value="神志清楚" />
                <el-option label="神志模糊" value="神志模糊" />
                <el-option label="神志淡漠" value="神志淡漠" />
                <el-option label="嗜睡" value="嗜睡" />
                <el-option label="谵妄" value="谵妄" />
                <el-option label="昏睡" value="昏睡" />
                <el-option label="昏迷" value="昏迷" />
                <el-option label="轻度昏迷" value="轻度昏迷" />
                <el-option label="中度昏迷" value="中度昏迷" />
                <el-option label="深度昏迷" value="深度昏迷" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.intonation"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="语调与语态正常" value="语调与语态正常" />
                <el-option label="失音" value="失音" />
                <el-option label="失语" value="失语" />
                <el-option label="口吃" value="口吃" />
                <el-option label="语言不畅" value="语言不畅" />
                <el-option label="快慢不均" value="快慢不均" />
                <el-option label="音节不清" value="音节不清" />
                <el-option label="流利" value="流利" />
                <el-option label="呈吟诗样" value="呈吟诗样" />
                <el-option label="呈失语状" value="呈失语状" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.features"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="正常面容与表情" value="正常面容与表情" />
                <el-option label="急性病容" value="急性病容" />
                <el-option label="慢性病容" value="慢性病容" />
                <el-option label="贫血面容" value="贫血面容" />
                <el-option label="轻度贫血貌" value="轻度贫血貌" />
                <el-option label="中度贫血貌" value="中度贫血貌" />
                <el-option label="重度贫血貌" value="重度贫血貌" />
                <el-option label="肝病面容" value="肝病面容" />
                <el-option label="肾病面容" value="肾病面容" />
                <el-option
                  label="甲状腺功能亢进面容"
                  value="甲状腺功能亢进面容"
                />
                <el-option label="粘液性水肿面容" value="粘液性水肿面容" />
                <el-option label="二尖瓣面容" value="二尖瓣面容" />
                <el-option label="指端肥大症面容" value="指端肥大症面容" />
                <el-option label="伤寒面容" value="伤寒面容" />
                <el-option label="苦笑面容" value="苦笑面容" />
                <el-option label="满月面容" value="满月面容" />
                <el-option label="面具面容" value="面具面容" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.posturalGait"
                filterable
                style="width: 130px"
              >
                <el-option label="姿势步态正常" value="姿势步态正常" />
                <el-option label="蹒跚步态" value="蹒跚步态" />
                <el-option label="酒醉步态" value="酒醉步态" />
                <el-option label="共济失调步态" value="共济失调步态" />
                <el-option label="慌张步态" value="慌张步态" />
                <el-option label="跨阈步态" value="跨阈步态" />
                <el-option label="剪刀步态" value="剪刀步态" />
                <el-option label="间歇性跛行" value="间歇性跛行" />
              </el-select>
              <p>&nbsp;，精神状态&nbsp;</p>
              <el-select
                v-model="checkupForm.mentalState"
                filterable
                style="width: 80px"
              >
                <el-option label="好" value="好" />
                <el-option label="一般" value="一般" />
                <el-option label="差" value="差" />
                <el-option label="欠佳" value="欠佳" />
              </el-select>
              <p>&nbsp;，查体&nbsp;</p>
              <el-select
                v-model="checkupForm.adaptability"
                filterable
                style="width: 100px"
              >
                <el-option label="合作" value="合作" />
                <el-option label="不合作" value="不合作" />
                <el-option label="部分合作" value="部分合作" />
              </el-select>
              <p>&nbsp;，对答&nbsp;</p>
              <el-select
                v-model="checkupForm.reply"
                filterable
                style="width: 80px"
              >
                <el-option label="切题" value="切题" />
                <el-option label="离题" value="离题" />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="全身皮肤、粘膜：" class="bold-label">
              <p>色泽&nbsp;</p>
              <el-select
                v-model="checkupForm.colourAndLustre"
                filterable
                style="width: 100px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="苍白" value="苍白" />
                <el-option label="发红" value="发红" />
                <el-option label="发绀" value="发绀" />
                <el-option label="黄染" value="黄染" />
                <el-option label="色素沉着" value="色素沉着" />
                <el-option label="色素脱落" value="色素脱落" />
                <el-option label="白癜" value="白癜" />
                <el-option label="白斑" value="白斑" />
                <el-option label="白化症" value="白化症" />
              </el-select>
              <p>&nbsp;，皮温&nbsp;</p>
              <el-select
                v-model="checkupForm.temperature"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="高" value="苍白" />
                <el-option label="低" value="发红" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.moisture"
                filterable
                style="width: 130px"
              >
                <el-option label="皮肤湿度正常" value="皮肤湿度正常" />
                <el-option label="皮肤潮湿" value="皮肤潮湿" />
                <el-option label="皮肤干燥" value="皮肤干燥" />
              </el-select>
              <p>&nbsp;，弹性&nbsp;</p>
              <el-select
                v-model="checkupForm.elasticity"
                filterable
                style="width: 80px"
              >
                <el-option label="良好" value="良好" />
                <el-option label="中等" value="中等" />
                <el-option label="松弛" value="松弛" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.isScar"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;手术疤痕，&nbsp;</p>
              <el-input
                v-if="checkupForm.isScar === '有'"
                v-model="checkupForm.scar"
                style="width: 240px"
                autosize
                placeholder="疤痕位置"
                type="textarea"
              />
              <p v-if="checkupForm.isScar === '有'">&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.isDehydration"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;脱水，&nbsp;</p>
              <el-select
                v-model="checkupForm.isStainedYellow"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;黄染、皮疹、皮下出血，&nbsp;</p>
              <el-input
                v-model="checkupForm.ulcerSite"
                style="width: 240px"
                autosize
                placeholder="溃疡部位"
              />
              <el-select
                v-model="checkupForm.isUlcer"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;粘膜溃疡，&nbsp;</p>
              <el-select
                v-model="checkupForm.isSubcutaneous"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;皮下结节或肿块，&nbsp;</p>
              <el-select
                v-model="checkupForm.isLiverPalms"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;肝掌及蜘蛛痣。&nbsp;</p>
              <p>体毛&nbsp;</p>
              <el-select
                v-model="checkupForm.bodyHair"
                filterable
                style="width: 100px"
              >
                <el-option label="分布正常" value="分布正常" />
                <el-option label="异常" value="异常" />
                <el-option label="多毛" value="多毛" />
                <el-option label="稀疏" value="稀疏" />
                <el-option label="脱落" value="脱落" />
              </el-select>
              <p>&nbsp;。皮肤划痕反应&nbsp;</p>
              <el-select
                v-model="checkupForm.skinNickReaction"
                filterable
                style="width: 100px"
              >
                <el-option label="(+)" value="(+)" />
                <el-option label="(-)" value="(-)" />
                <el-option label="（±）" value="(±)" />
                <el-option label="阳性" value="阳性" />
                <el-option label="阴性" value="阴性" />
                <el-option label="可疑阳性" value="可疑阳性" />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="全身淋巴结：">
              <el-select
                v-model="checkupForm.lymphNode"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;肿大。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="头颅：">
              <el-select
                v-model="checkupForm.skull"
                filterable
                style="width: 120px"
              >
                <el-option label="外形正常" value="外形正常" />
                <el-option label="外形不正常" value="外形不正常" />
                <el-option label="无畸形" value="无畸形" />
                <el-option label="大小正常" value="大小正常" />
                <el-option label="大小不正常" value="大小不正常" />
                <el-option label="呈小颅状" value="呈小颅状" />
                <el-option label="呈尖颅状" value="呈尖颅状" />
                <el-option label="呈方颅状" value="呈方颅状" />
                <el-option label="呈巨颅状" value="呈巨颅状" />
                <el-option label="呈长颅状" value="呈长颅状" />
                <el-option label="呈变形颅状" value="呈变形颅状" />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="眼：">
              <p>眼眉&nbsp;</p>
              <el-select
                v-model="checkupForm.eye"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="脱落" value="脱落" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.trichiasis"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;倒睫，眼睑&nbsp;</p>
              <el-select
                v-model="checkupForm.eyelid"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="水肿" value="水肿" />
                <el-option label="下垂" value="下垂" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;，结膜&nbsp;</p>
              <el-select
                v-model="checkupForm.conjunctiva"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="无黄染" value="无黄染" />
                <el-option label="黄染" value="黄染" />
                <el-option label="充血" value="充血" />
                <el-option label="无充血" value="无充血" />
                <el-option label="水肿" value="水肿" />
                <el-option label="无水肿" value="无水肿" />
                <el-option label="苍白" value="苍白" />
                <el-option label="出血" value="出血" />
                <el-option label="无出血" value="无出血" />
                <el-option label="滤泡" value="滤泡" />
                <el-option label="溃疡" value="溃疡" />
                <el-option label="无溃疡" value="无溃疡" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.eyeball"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="眼球无突出" value="眼球无突出" />
                <el-option label="眼球突出" value="眼球突出" />
                <el-option label="左侧眼球突出" value="左侧眼球突出" />
                <el-option label="右侧眼球突出" value="右侧眼球突出" />
                <el-option label="Stellwag征(+)" value="Stellwag征(+)" />
                <el-option label="Stellwag征(-)" value="Stellwag征(-)" />
                <el-option label="Stellwag征(±)" value="Stellwag征(±" />
                <el-option label="Graefe征(+)" value="Graefe征(+)" />
                <el-option label="Graefe征(-)" value="Graefe征(-)" />
                <el-option label="Graefe征(±)" value="Graefe征(±)" />
                <el-option label="Joffroy征(+)" value="Joffroy征(+)" />
                <el-option label="Joffroy征(-)" value="Joffroy征(-)" />
                <el-option label="Joffroy征(±)" value="Joffroy征(±)" />
                <el-option label="Mobius征(+)" value="Mobius征(+)" />
                <el-option label="Mobius征(-)" value="Mobius征(-)" />
                <el-option label="Mobius征(±)" value="Mobius征(±)" />
                <el-option label="眼球下陷" value="眼球下陷" />
                <el-option label="左侧眼球下陷" value="左侧眼球下陷" />
                <el-option label="右侧眼球下陷" value="右侧眼球下陷" />
              </el-select>
              <p>&nbsp;，眼球&nbsp;</p>
              <el-select
                v-model="checkupForm.eyeMovement"
                filterable
                style="width: 160px"
              >
                <el-option label="向各方向活动正常" value="向各方向活动正常" />
                <el-option label="有震颤" value="有震颤" />
                <el-option label="无震颤" value="无震颤" />
                <el-option label="有斜视" value="有斜视" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;，角膜&nbsp;</p>
              <el-select
                v-model="checkupForm.cornea"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="无黄染" value="无黄染" />
                <el-option label="黄染" value="黄染" />
                <el-option label="充血" value="充血" />
                <el-option label="无充血" value="无充血" />
                <el-option label="水肿" value="水肿" />
                <el-option label="无水肿" value="无水肿" />
                <el-option label="苍白" value="苍白" />
                <el-option label="出血" value="出血" />
                <el-option label="无出血" value="无出血" />
                <el-option label="滤泡" value="滤泡" />
                <el-option label="溃疡" value="溃疡" />
                <el-option label="无溃疡" value="无溃疡" />
                <el-option label="云翳" value="云翳" />
                <el-option label="白斑" value="白斑" />
                <el-option label="软化" value="软化" />
              </el-select>
              <p>&nbsp;，角膜反射&nbsp;</p>
              <el-select
                v-model="checkupForm.corneaReflex"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="减弱" value="减弱" />
                <el-option label="消失" value="消失" />
              </el-select>
              <p>&nbsp;，巩膜无黄染。双侧瞳孔&nbsp;</p>
              <el-select
                v-model="checkupForm.pupil"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="等圆等大" value="等圆等大" />
                <el-option label="不等大" value="不等大" />
                <el-option label="缩小" value="缩小" />
                <el-option label="散大" value="散大" />
                <el-option label="针尖样瞳孔" value="针尖样瞳孔" />
              </el-select>
              <p>&nbsp;，直径约&nbsp;</p>
              <el-input v-model="checkupForm.diameter" style="width: 110px">
                <template #append>mm</template>
              </el-input>
              <p>&nbsp;，对光反射&nbsp;</p>
              <el-select
                v-model="checkupForm.lightReflex"
                filterable
                style="width: 80px"
              >
                <el-option label="灵敏" value="灵敏" />
                <el-option label="迟缓" value="迟缓" />
                <el-option label="消失" value="消失" />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="耳：">
              <el-select
                v-model="checkupForm.ear"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="无畸形" value="无畸形" />
                <el-option label="异常" value="异常" />
                <el-option label="左侧畸形" value="左侧畸形" />
                <el-option label="右侧畸形" value="右侧畸形" />
                <el-option label="左耳周瘘管" value="左耳周瘘管" />
                <el-option label="右耳周瘘管" value="右耳周瘘管" />
              </el-select>
              <p>&nbsp;，外耳道&nbsp;</p>
              <el-select
                v-model="checkupForm.externalAuditoryCanal"
                filterable
                style="width: 150px"
              >
                <el-option label="未见异常分泌物" value="未见异常分泌物" />
                <el-option label="有分泌物" value="有分泌物" />
                <el-option label="有脓性分泌物" value="有脓性分泌物" />
                <el-option label="有黄色分泌物" value="有黄色分泌物" />
              </el-select>
              <p>&nbsp;，乳突&nbsp;</p>
              <el-select
                v-model="checkupForm.mastoidProcess"
                filterable
                style="width: 60px"
              >
                <el-option label="无" value="无" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;压痛。粗测听力&nbsp;</p>
              <el-select
                v-model="checkupForm.hearing"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="减退" value="减退" />
                <el-option label="消失" value="消失" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="鼻：">
              <p>鼻腔&nbsp;</p>
              <el-select
                v-model="checkupForm.nasalCavity"
                filterable
                style="width: 90px"
              >
                <el-option label="畅通" value="畅通" />
                <el-option label="不畅通" value="不畅通" />
              </el-select>
              <p>&nbsp;，鼻&nbsp;</p>
              <el-select
                v-model="checkupForm.nose"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;畸形，&nbsp;</p>
              <el-select
                v-model="checkupForm.naresFlaring"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;鼻翼煽动。&nbsp;</p>
              <el-select
                v-model="checkupForm.sinusParts"
                filterable
                style="width: 90px"
              >
                <el-option label="鼻窦" value="鼻窦" />
                <el-option label="上颌窦" value="上颌窦" />
                <el-option label="额窦" value="额窦" />
                <el-option label="筛窦" value="筛窦" />
              </el-select>
              <el-select
                v-model="checkupForm.pressingPain"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;压痛。嗅觉&nbsp;</p>
              <el-select
                v-model="checkupForm.smell"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="减退" value="减退" />
                <el-option label="消失" value="消失" />
                <el-option label="异常" value="异常" />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="口腔：" class="bold-label">
              <p>口腔&nbsp;</p>
              <el-select
                v-model="checkupForm.mouthOdor"
                filterable
                style="width: 120px"
              >
                <el-option label="无特殊气味" value="无特殊气味" />
                <el-option label="腥臭味" value="腥臭味" />
                <el-option label="血腥味" value="血腥味" />
                <el-option label="烂苹果味" value="烂苹果味" />
                <el-option label="尿味" value="尿味" />
                <el-option label="肝臭味" value="肝臭味" />
                <el-option label="大蒜味" value="大蒜味" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.mouthBreathing"
                filterable
                style="width: 60px"
              >
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
              <p>&nbsp;张口呼吸，口唇&nbsp;</p>
              <el-select
                v-model="checkupForm.lips"
                filterable
                multiple
                style="width: 150px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="无紫绀" value="无紫绀" />
                <el-option label="红润" value="红润" />
                <el-option label="无疱疹" value="无疱疹" />
                <el-option label="有疱疹" value="有疱疹" />
                <el-option label="无皲裂" value="无皲裂" />
                <el-option label="有皲裂" value="有皲裂" />
                <el-option label="有溃疡" value="有溃疡" />
                <el-option label="无溃疡" value="无溃疡" />
                <el-option label="无色素沉着" value="无色素沉着" />
                <el-option label="无畸形" value="无畸形" />
                <el-option label="口角糜烂" value="口角糜烂" />
                <el-option label="上唇唇裂" value="上唇唇裂" />
              </el-select>
              <p>&nbsp;。舌&nbsp;</p>
              <el-select
                v-model="checkupForm.tongue"
                filterable
                multiple
                style="width: 150px"
              >
                <el-option label="形态正常" value="形态正常" />
                <el-option label="运动正常" value="运动正常" />
                <el-option label="有震颤" value="有震颤" />
                <el-option label="向左侧偏斜" value="向左侧偏斜" />
                <el-option label="向右侧偏斜" value="向右侧偏斜" />
                <el-option label="质绛红" value="质绛红" />
                <el-option label="干燥" value="干燥" />
                <el-option label="体增大" value="体增大" />
                <el-option label="呈地图舌状" value="呈地图舌状" />
                <el-option label="有横向裂纹" value="有横向裂纹" />
                <el-option label="有纵向裂纹" value="有纵向裂纹" />
                <el-option label="呈草莓舌状" value="呈草莓舌状" />
                <el-option label="呈生牛肉状" value="呈生牛肉状" />
                <el-option label="呈光滑舌状" value="呈光滑舌状" />
                <el-option label="有黑色毛苔" value="有黑色毛苔" />
              </el-select>
              <p>&nbsp;。咽&nbsp;</p>
              <el-select
                v-model="checkupForm.pharynx"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="无充血" value="无充血" />
                <el-option label="充血" value="充血" />
                <el-option label="无分泌物" value="无分泌物" />
                <el-option label="有脓性分泌物" value="有脓性分泌物" />
                <el-option label="有腺样体增生" value="有腺样体增生" />
                <el-option label="无腺样体增生" value="无腺样体增生" />
                <el-option
                  label="有淋巴滤泡簇状增殖"
                  value="有淋巴滤泡簇状增殖"
                />
                <el-option label="无淋巴滤泡样增殖" value="无淋巴滤泡样增殖" />
              </el-select>
              <p>&nbsp;，悬雍垂&nbsp;</p>
              <el-select
                v-model="checkupForm.uvula"
                filterable
                style="width: 80px"
              >
                <el-option label="居中" value="居中" />
                <el-option label="左偏" value="左偏" />
                <el-option label="右偏" value="右偏" />
              </el-select>
              <p>&nbsp;，吞咽&nbsp;</p>
              <el-select
                v-model="checkupForm.swallow"
                filterable
                style="width: 60px"
              >
                <el-option label="无" value="无" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;呛咳。双侧扁桃体&nbsp;</p>
              <el-select
                v-model="checkupForm.amygdala"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="无肿大" value="无肿大" />
                <el-option label="I度肿大" value="I度肿大" />
                <el-option label="Ⅱ度肿大" value="Ⅱ度肿大" />
                <el-option label="Ⅲ度肿大" value="Ⅲ度肿大" />
                <el-option label="无分泌物" value="无分泌物" />
                <el-option label="有脓性分泌物" value="有脓性分泌物" />
                <el-option label="无假膜" value="无假膜" />
                <el-option label="有假膜" value="有假膜" />
                <el-option
                  label="有淋巴滤泡簇状增殖"
                  value="有淋巴滤泡簇状增殖"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="颈部：" class="bold-label">
              <el-select
                v-model="checkupForm.neck"
                filterable
                multiple
                style="width: 140px"
              >
                <el-option label="对称" value="对称" />
                <el-option label="不对称" value="不对称" />
                <el-option label="无抵抗" value="无抵抗" />
                <el-option label="有抵抗" value="有抵抗" />
                <el-option label="强直" value="强直" />
                <el-option label="无压痛" value="无压痛" />
                <el-option label="无肿块" value="无肿块" />
                <el-option label="活动正常" value="活动正常" />
                <el-option label="活动受限" value="活动受限" />
              </el-select>
              <p>&nbsp;，颈动脉&nbsp;</p>
              <el-select
                v-model="checkupForm.carotidArtery"
                filterable
                multiple
                style="width: 170px"
              >
                <el-option label="搏动正常" value="搏动正常" />
                <el-option label="左侧明显搏动" value="左侧明显搏动" />
                <el-option label="右侧明显搏动" value="右侧明显搏动" />
                <el-option label="无异常杂音" value="无异常杂音" />
                <el-option label="吹风样杂音" value="吹风样杂音" />
              </el-select>
              <p>&nbsp;，颈静脉&nbsp;</p>
              <el-select
                v-model="checkupForm.jugularVein"
                filterable
                multiple
                style="width: 190px"
              >
                <el-option label="无明显搏动" value="无明显搏动" />
                <el-option label="无怒张" value="无怒张" />
                <el-option label="怒张" value="怒张" />
                <el-option label="左侧明显搏动" value="左侧明显搏动" />
                <el-option label="右侧明显搏动" value="右侧明显搏动" />
                <el-option label="无异常杂音" value="无异常杂音" />
                <el-option label="吹风样杂音" value="吹风样杂音" />
                <el-option
                  label="肝颈静脉回流征(+)"
                  value="肝颈静脉回流征(+)"
                />
                <el-option
                  label="肝颈静脉回流征(-)"
                  value="肝颈静脉回流征(-)"
                />
              </el-select>
              <p>&nbsp;，气管&nbsp;</p>
              <el-select
                v-model="checkupForm.airTube"
                filterable
                style="width: 80px"
              >
                <el-option label="居中" value="居中" />
                <el-option label="左偏" value="左偏" />
                <el-option label="右偏" value="右偏" />
              </el-select>
              <p>&nbsp;，双侧甲状腺&nbsp;</p>
              <el-select
                v-model="checkupForm.thyroid"
                filterable
                multiple
                style="width: 500px"
              >
                <el-option label="无肿大" value="无肿大" />
                <el-option label="质软" value="质软" />
                <el-option label="质中等" value="质中等" />
                <el-option label="质韧" value="质韧" />
                <el-option label="质硬" value="质硬" />
                <el-option label="无压痛" value="无压痛" />
                <el-option label="有压痛" value="有压痛" />
                <el-option label="无结节" value="无结节" />
                <el-option label="左侧有结节" value="左侧有结节" />
                <el-option label="右侧有结节" value="右侧有结节" />
                <el-option label="无震颤" value="无震颤" />
                <el-option label="有震颤" value="有震颤" />
                <el-option label="I度肿大" value="I度肿大" />
                <el-option label="Ⅱ度肿大" value="Ⅱ度肿大" />
                <el-option label="Ⅲ度肿大" value="Ⅲ度肿大" />
                <el-option label="可闻及血管杂音" value="可闻及血管杂音" />
                <el-option label="未闻及血管杂音" value="未闻及血管杂音" />
                <el-option
                  label="可闻及收缩期血管杂音"
                  value="可闻及收缩期血管杂音"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="胸部：" class="bold-label">
              <p>胸廓&nbsp;</p>
              <el-select
                v-model="checkupForm.thorax"
                filterable
                multiple
                style="width: 190px"
              >
                <el-option label="对称" value="对称" />
                <el-option label="无畸形" value="无畸形" />
                <el-option label="有凹陷" value="有凹陷" />
                <el-option label="有异常搏动" value="有异常搏动" />
                <el-option label="有压痛" value="有压痛" />
                <el-option label="有水肿" value="有水肿" />
                <el-option label="有皮下水肿" value="有皮下水肿" />
                <el-option label="有肿块" value="有肿块" />
                <el-option label="有静脉曲张" value="有静脉曲张" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.thoracicDeformityCategory"
                filterable
                multiple
                placeholder="胸廓畸形类别"
                style="width: 190px"
              >
                <el-option label="扁平胸" value="扁平胸" />
                <el-option label="桶状胸" value="桶状胸" />
                <el-option label="佝偻病胸" value="佝偻病胸" />
                <el-option label="左侧胸廓下陷" value="左侧胸廓下陷" />
                <el-option label="右侧胸廓下陷" value="右侧胸廓下陷" />
                <el-option label="左侧胸廓局部隆起" value="左侧胸廓局部隆起" />
                <el-option label="右侧胸廓局部隆起" value="右侧胸廓局部隆起" />
              </el-select>
              <p>&nbsp;肋间隙&nbsp;</p>
              <el-select
                v-model="checkupForm.intercostalSpace"
                filterable
                multiple
                style="width: 130px"
              >
                <el-option label="无增宽" value="无增宽" />
                <el-option label="无变窄" value="无变窄" />
                <el-option label="无隆起" value="无隆起" />
                <el-option label="无凹陷" value="无凹陷" />
              </el-select>
              <p>&nbsp;。双侧乳房&nbsp;</p>
              <el-select
                v-model="checkupForm.breast"
                filterable
                multiple
                style="width: 400px"
              >
                <el-option label="正常对称" value="正常对称" />
                <el-option label="无红肿" value="无红肿" />
                <el-option label="无桔皮样外观" value="无桔皮样外观" />
                <el-option label="乳头无分泌物" value="乳头无分泌物" />
                <el-option label="无压痛" value="无压痛" />
                <el-option label="未触及包块" value="未触及包块" />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="肺部：" class="bold-label" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="视诊：" class="bold-label">
              <el-select
                v-model="checkupForm.breathingMovement"
                filterable
                multiple
                style="width: 190px"
              >
                <el-option label="呼吸运动两侧相等" value="呼吸运动两侧相等" />
                <el-option label="双肺呼吸运动对称" value="双肺呼吸运动对称" />
                <el-option label="呼吸困难" value="呼吸困难" />
                <el-option label="吸气性呼吸困难" value="吸气性呼吸困难" />
                <el-option label="可见“三凹征”" value="可见“三凹征”" />
                <el-option label="呼气性呼吸困难" value="呼气性呼吸困难" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.respiratoryRate"
                filterable
                multiple
                style="width: 170px"
              >
                <el-option label="呼吸稍促" value="呼吸稍促" />
                <el-option label="呼吸促" value="呼吸促" />
                <el-option label="呼吸平顺" value="呼吸平顺" />
                <el-option label="呼吸过速" value="呼吸过速" />
                <el-option label="呼吸过缓" value="呼吸过缓" />
                <el-option label="呼吸浅快" value="呼吸浅快" />
                <el-option label="呼吸深快" value="呼吸深快" />
                <el-option label="呼吸深慢" value="呼吸深慢" />
                <el-option label="Kussmaul呼吸" value="Kussmaul呼吸" />
                <el-option label="潮式呼吸" value="潮式呼吸" />

                <el-option label="间停呼吸" value="间停呼吸" />
                <el-option label="抑制性呼吸" value="抑制性呼吸" />
                <el-option label="叹气样呼吸" value="叹气样呼吸" />
              </el-select>
              <p>&nbsp;，两侧呼吸动度均等。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="触诊：" class="bold-label">
              <p>双肺语音震颤&nbsp;</p>
              <el-select
                v-model="checkupForm.vocalFremitus"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="增强" value="增强" />
                <el-option label="减弱" value="减弱" />
                <el-option label="消失" value="消失" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.senseOfPleuralFriction"
                filterable
                style="width: 60px"
              >
                <el-option label="无" value="无" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;胸膜摩擦感，&nbsp;</p>
              <el-select
                v-model="checkupForm.pneumoderm"
                filterable
                style="width: 60px"
              >
                <el-option label="无" value="无" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;皮下气肿。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="叩诊：" class="bold-label">
              <el-select
                v-model="checkupForm.lungsPart"
                filterable
                style="width: 150px"
              >
                <el-option label="肺底" value="肺底" />
                <el-option label="右肺" value="右肺" />
                <el-option label="右肺底" value="右肺底" />
                <el-option label="右上肺" value="右上肺" />
                <el-option label="石肺上叶尖段" value="石肺上叶尖段" />
                <el-option label="右肺上叶后段" value="右肺上叶后段" />
                <el-option label="右肺上叶前段" value="右肺上叶前段" />
                <el-option label="右中肺" value="右中肺" />
                <el-option label="右肺中叶外侧段" value="右肺中叶外侧段" />
                <el-option label="右肺中叶内侧段" value="右肺中叶内侧段" />
                <el-option label="右下肺" value="右下肺" />
                <el-option label="右肺下叶尖段" value="右肺下叶尖段" />
                <el-option label="右肺下叶上段" value="右肺下叶上段" />
                <el-option label="右肺下叶内底段" value="右肺下叶内底段" />
                <el-option label="右肺下叶前底段" value="右肺下叶前底段" />
                <el-option label="右肺下叶外底段" value="右肺下叶外底段" />
                <el-option label="右肺下叶后底段" value="右肺下叶后底段" />
                <el-option label="右肺下叶尖下段" value="右肺下叶尖下段" />
                <el-option label="左肺" value="左肺" />
                <el-option label="左肺底" value="左肺底" />
                <el-option label="左上肺" value="左上肺" />
                <el-option
                  label="左肺上叶上部分尖后段"
                  value="左肺上叶上部分尖后段"
                />
                <el-option
                  label="左肺上叶上部分前段"
                  value="左肺上叶上部分前段"
                />
                <el-option label="左肺上叶上舌段" value="左肺上叶上舌段" />
                <el-option
                  label="左肺上叶下部分上段"
                  value="左肺上叶下部分上段"
                />
                <el-option label="左肺上叶舌下断" value="左肺上叶舌下断" />
                <el-option
                  label="左肺上叶下部分下段"
                  value="左肺上叶下部分下段"
                />
                <el-option label="左肺下叶" value="左肺下叶" />
                <el-option label="左肺下叶上段" value="左肺下叶上段" />
                <el-option label="左肺下叶前底段" value="左肺下叶前底段" />
                <el-option label="左肺下叶外底段" value="左肺下叶外底段" />
                <el-option label="左肺下叶后底段" value="左肺下叶后底段" />
                <el-option label="左肺下叶内底段" value="左肺下叶内底段" />
                <el-option label="左肺下叶下尖段" value="左肺下叶下尖段" />
                <el-option label="双肺" value="双肺" />
              </el-select>
              <p>&nbsp;呈&nbsp;</p>
              <el-select
                v-model="checkupForm.percussion"
                filterable
                multiple
                style="width: 200px"
              >
                <el-option label="清音" value="清音" />
                <el-option label="过清音" value="过清音" />
                <el-option label="实音" value="实音" />
                <el-option label="浊音" value="浊音" />
                <el-option label="鼓音" value="鼓音" />
                <el-option label="肺下界正常" value="肺下界正常" />
                <el-option
                  label="呼吸时肺活动度正常"
                  value="呼吸时肺活动度正常"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="听诊：" class="bold-label">
              <p>双肺呼吸音&nbsp;</p>
              <el-select
                v-model="checkupForm.breathSounds"
                filterable
                style="width: 80px"
              >
                <el-option label="清" value="清" />
                <el-option label="粗" value="粗" />
                <el-option label="稍粗" value="稍粗" />
                <el-option label="低" value="低" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.lungAuscultationParts"
                filterable
                style="width: 90px"
              >
                <el-option label="双肺" value="双肺" />
                <el-option label="双下肺" value="双下肺" />
                <el-option label="双上肺" value="双上肺" />
                <el-option label="左肺" value="左肺" />
                <el-option label="左上肺" value="左上肺" />
                <el-option label="左下肺" value="左下肺" />
                <el-option label="右肺" value="右肺" />
                <el-option label="右上肺" value="右上肺" />
                <el-option label="右下肺" value="右下肺" />
              </el-select>
              <el-select
                v-model="checkupForm.rale"
                filterable
                multiple
                style="width: 230px"
              >
                <el-option label="未闻及干湿性罗音" value="未闻及干湿性罗音" />
                <el-option label="可闻及干湿性罗音" value="可闻及干湿性罗音" />
                <el-option
                  label="可闻及散在干湿性罗音"
                  value="可闻及散在干湿性罗音"
                />
                <el-option
                  label="可闻及少许干湿性罗音"
                  value="可闻及少许干湿性罗音"
                />
                <el-option label="未闻及湿性罗音" value="未闻及湿性罗音" />
                <el-option
                  label="可闻及散在湿性罗音"
                  value="可闻及散在湿性罗音"
                />
                <el-option
                  label="可闻及散在细湿性罗音"
                  value="可闻及散在细湿性罗音"
                />
                <el-option
                  label="可闻及少许湿性罗音"
                  value="可闻及少许湿性罗音"
                />
                <el-option
                  label="可闻及少许细湿性罗音"
                  value="可闻及少许细湿性罗音"
                />
                <el-option label="未闻及干罗音" value="未闻及干罗音" />
                <el-option label="满布呼气相干罗音" value="满布呼气相干罗音" />
                <el-option label="满布呼气相哮鸣音" value="满布呼气相哮鸣音" />
                <el-option label="满布吸气相干鸣音" value="满布吸气相干鸣音" />
                <el-option label="满布吸气相哮鸣音" value="满布吸气相哮鸣音" />
                <el-option
                  label="可闻及散在呼气相干罗音"
                  value="可闻及散在呼气相干罗音"
                />
                <el-option
                  label="可闻及少许呼气相干罗音"
                  value="可闻及少许呼气相干罗音"
                />
                <el-option
                  label="可闻及散在呼气相哮鸣音"
                  value="可闻及散在呼气相哮鸣音"
                />
                <el-option
                  label="可闻及少许呼气相哮鸣音"
                  value="可闻及少许呼气相哮鸣音"
                />
              </el-select>
              <p>&nbsp;，语音共振&nbsp;</p>
              <el-select
                v-model="checkupForm.voiceTransmission"
                filterable
                style="width: 80px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="增强" value="增强" />
                <el-option label="减弱" value="减弱" />
                <el-option label="消失" value="消失" />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.rubVoice"
                filterable
                style="width: 60px"
              >
                <el-option label="无" value="无" />
                <el-option label="有" value="有" />
              </el-select>
              <p>&nbsp;胸膜摩擦音。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="心脏：" class="bold-label" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="视诊：">
              <el-select
                v-model="checkupForm.heartUplift"
                filterable
                style="width: 130px"
              >
                <el-option label="心前区无隆起" value="心前区无隆起" />
                <el-option label="心前区隆起" value="心前区隆起" />
              </el-select>
              <p>
                &nbsp;，心尖搏动位于第五肋间左锁骨中线内侧0.5cm，搏动范围直径约0.2cm。
              </p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="触诊：">
              <el-select
                v-model="checkupForm.heartPalpation"
                filterable
                multiple
                style="width: 290px"
              >
                <el-option
                  v-for="item in heartPalpationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="叩诊：">
              <el-select
                v-model="checkupForm.heartPercussion"
                filterable
                style="width: 150px"
              >
                <el-option
                  v-for="item in heartPercussionOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="听诊：" class="bold-label">
              <p>心率&nbsp;</p>
              <el-input
                v-model="checkupForm.heartRate"
                style="width: 120px"
                autosize
                placeholder="心率数值"
              />
              <p>&nbsp;次/分，&nbsp;</p>
              <el-select
                v-model="checkupForm.heartRhythm"
                filterable
                style="width: 270px"
              >
                <el-option
                  v-for="item in heartRhythmOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.heartSounds"
                filterable
                style="width: 100px"
              >
                <el-option
                  v-for="item in heartSoundsOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，A2&nbsp;</p>
              <el-select
                v-model="checkupForm.A2P2"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in A2P2Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;P2，&nbsp;</p>
              <el-select
                v-model="checkupForm.auscultationArea"
                filterable
                style="width: 170px"
              >
                <el-option
                  v-for="item in areaOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;未闻及&nbsp;</p>
              <el-select
                v-model="checkupForm.noisePeriod"
                filterable
                multiple
                placeholder="杂音时期"
                style="width: 140px"
              >
                <el-option
                  v-for="item in noisePeriodOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-model="checkupForm.noiseProperties"
                filterable
                multiple
                placeholder="杂音性质"
                style="width: 130px"
              >
                <el-option
                  v-for="item in noisePropertiesOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p style="word-wrap: break-word; overflow-wrap: break-word">
                &nbsp;杂音，未闻及心包摩擦音。
              </p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="周围血管征：" class="bold-label">
              <el-select
                v-model="checkupForm.vascularSign"
                filterable
                multiple
                style="width: 210px"
              >
                <el-option
                  v-for="item in vascularSignOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.pulse"
                filterable
                style="width: 130px"
              >
                <el-option
                  v-for="item in pulseSignOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="腹部：" class="bold-label" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="视诊：" class="bold-label">
              <el-select
                v-model="checkupForm.pulse"
                filterable
                style="width: 230px"
              >
                <el-option
                  v-for="item in abdomenOutlineOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.varicosity"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in visibleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;腹壁静脉曲张，&nbsp;</p>
              <el-select
                v-model="checkupForm.peristalticWave"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in visibleOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;肠胃型及蠕动波。&nbsp;</p>
              <el-input
                v-model="checkupForm.rash"
                style="width: 360px"
                autosize
                type="textarea"
                placeholder="腹部皮疹、瘢痕、疝等情况"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="触诊：" class="bold-label">
              <el-select
                v-model="checkupForm.tensity"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in tensityOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.abdomenPart"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in abdomenPartOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;腹&nbsp;</p>
              <el-select
                v-model="checkupForm.ache"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-model="checkupForm.achePart"
                filterable
                multiple
                style="width: 170px"
              >
                <el-option
                  v-for="item in achePartOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.reboundTenderness"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;反跳痛。麦氏点压痛&nbsp;</p>
              <el-select
                v-model="checkupForm.mcburneyPoint"
                filterable
                style="width: 100px"
              >
                <el-option
                  v-for="item in mcburneyPointOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;未触及包块，&nbsp;</p>
              <el-select
                v-model="checkupForm.fluidThrill"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;液波震颤，&nbsp;</p>
              <el-select
                v-model="checkupForm.succussionSplash"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;振水音。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="肝脏：">
              <p>肝脏&nbsp;</p>
              <el-select
                v-model="checkupForm.liver"
                filterable
                multiple
                style="width: 180px"
              >
                <el-option
                  v-for="item in liverOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="脾脏：">
              <p>脾脏&nbsp;</p>
              <el-select
                v-model="checkupForm.spleen"
                filterable
                multiple
                style="width: 250px"
              >
                <el-option
                  v-for="item in spleenOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="胆囊：">
              <p>墨菲征&nbsp;</p>
              <el-select
                v-model="checkupForm.cholecyst"
                filterable
                style="width: 100px"
              >
                <el-option
                  v-for="item in cholecystOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="肾脏：" class="bold-label">
              <p>肾脏未触及。&nbsp;</p>
              <el-select
                v-model="checkupForm.kidneyPart"
                filterable
                placeholder="肾脏触诊部位"
                style="width: 130px"
              >
                <el-option
                  v-for="item in kidneyPartOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <el-select
                v-model="checkupForm.kidneyPalpation"
                filterable
                multiple
                placeholder="肾脏触诊"
                style="width: 130px"
              >
                <el-option
                  v-for="item in kidneyPalpationOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="叩诊：" class="bold-label">
              <p>腹部叩诊呈鼓音，肝浊音界&nbsp;</p>
              <el-select
                v-model="checkupForm.border"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in borderOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.liverKidney"
                filterable
                multiple
                style="width: 180px"
              >
                <el-option
                  v-for="item in liverKidneyOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-select
                v-model="checkupForm.shiftingDullness"
                filterable
                style="width: 100px"
              >
                <el-option
                  v-for="item in shiftingDullnessOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="听诊：">
              <p>肠鸣音&nbsp;</p>
              <el-select
                v-model="checkupForm.bowelsound"
                filterable
                style="width: 90px"
              >
                <el-option label="正常" value="正常" />
                <el-option label="不正常" value="不正常" />
              </el-select>
              <p>&nbsp;，无血管杂音。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="肛门及外生殖器：" class="bold-label">
              <p>生殖器&nbsp;</p>
              <el-select
                v-model="checkupForm.genitals"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in genitalsOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。肛门直肠&nbsp;</p>
              <el-select
                v-model="checkupForm.anorectum"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in anorectumOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="脊柱及四肢：" class="bold-label" />
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="脊柱：">
              <el-select
                v-model="checkupForm.spine"
                filterable
                multiple
                style="width: 230px"
              >
                <el-option
                  v-for="item in spineOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="2" :span="22">
            <el-form-item label="四肢：" class="bold-label">
              <p>四肢&nbsp;</p>
              <el-select
                v-model="checkupForm.allFours"
                filterable
                multiple
                style="width: 250px"
              >
                <el-option
                  v-for="item in allFoursOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，双下肢&nbsp;</p>
              <el-select
                v-model="checkupForm.edema"
                filterable
                style="width: 150px"
              >
                <el-option
                  v-for="item in edemaOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，双侧足背动脉搏动正常对称。&nbsp;</p>
              <el-select
                v-model="checkupForm.sweeny"
                filterable
                style="width: 60px"
              >
                <el-option
                  v-for="item in haveOrNotOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;肌肉萎缩。四肢肌力肌张力正常。&nbsp;</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-form-item label="神经反射：" class="bold-label">
              <el-input
                v-model="checkupForm.physiologicalSite"
                style="width: 140px"
                autosize
                placeholder="填入生理反射部位"
              />
              <p>&nbsp;生理反射&nbsp;</p>
              <el-select
                v-model="checkupForm.physiologicalReflex"
                filterable
                style="width: 80px"
              >
                <el-option
                  v-for="item in physiologicalReflexOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;，&nbsp;</p>
              <el-input
                v-model="checkupForm.pathologySite"
                style="width: 140px"
                autosize
                placeholder="填入病理反射部位"
              />
              <p>&nbsp;病理反射&nbsp;</p>
              <el-select
                v-model="checkupForm.pathologyReflex"
                filterable
                style="width: 100px"
              >
                <el-option
                  v-for="item in pathologyReflexOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <p>&nbsp;。</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <!-- 辅助检查 -->
        <el-form :model="auxiliaryForm" label-width="auto" :inline="true">
          <el-row>
            <span> 辅助检查 </span>
          </el-row>
          <el-row>
            <el-form-item>
              <el-date-picker
                v-model="auxiliaryForm.time"
                type="datetime"
                placeholder="辅助检查时间"
              />
              <el-input
                v-model="auxiliaryForm.place"
                placeholder="辅助检查地点"
                style="width: 150px"
              />
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item>
              <p>VTE评分：&nbsp;</p>
              <el-input
                v-model="auxiliaryForm.VTE"
                placeholder="VTE评分"
                style="width: 150px"
              />
              <p>&nbsp;，营养筛查评分：&nbsp;</p>
              <el-input
                v-model="auxiliaryForm.nutritionScore"
                placeholder="营养筛查评分"
                style="width: 150px"
              />
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item lable="初步诊断：">
              <el-input
                v-model="auxiliaryForm.tentativeDiagnosis"
                placeholder="初步诊断"
                style="width: 150px"
              />
            </el-form-item>
          </el-row>
        </el-form>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "ResidentAdmitNote"
});
// import { reactive, computed } from "vue";
import { reactive } from "vue";
import {
  haveOrNotOptions,
  conditionOptions,
  haveAllergyOptions,
  haveVaccinationOptions,
  heartPalpationOptions,
  heartPercussionOptions,
  heartRhythmOptions,
  heartSoundsOptions,
  A2P2Options,
  areaOptions,
  noisePeriodOptions,
  noisePropertiesOptions,
  vascularSignOptions,
  pulseSignOptions,
  abdomenOutlineOptions,
  visibleOptions,
  tensityOptions,
  abdomenPartOptions,
  achePartOptions,
  mcburneyPointOptions,
  liverOptions,
  spleenOptions,
  cholecystOptions,
  kidneyPartOptions,
  kidneyPalpationOptions,
  borderOptions,
  liverKidneyOptions,
  shiftingDullnessOptions,
  genitalsOptions,
  anorectumOptions,
  spineOptions,
  allFoursOptions,
  edemaOptions,
  physiologicalReflexOptions,
  pathologyReflexOptions
} from "./selectOptions.js";
const infoForm = reactive({
  name: "",
  sex: "",
  age: "",
  maritalStatus: "",
  nation: "",
  occupation: "",
  admissionTime: "",
  writeTime: "",
  birthplace: "",
  address: ""
});
const caseForm = reactive({
  mainSuit: "",
  hpi: "",
  pastMedicalHistory: "", //既往史
  condition: "良好",
  haveOperation: "无",
  haveHurt: "无",
  haveTransfusion: "无",
  haveAllergy: "否认过敏史",
  allergyHistory: "",
  haveVaccination: ["按时按序接种"],
  livingHistory: "无外地久居史",
  epidemicHistory: "无疫区疫水接触史",
  radioactiveRays: "无放射线及毒物接触史",
  smokingHistory: "否认吸烟史",
  drinkingHistory: "否认饮酒史",
  drugAddiction: "",
  venerealHistory: "",
  maritalStatus: "",
  partnerHealth: "",
  sonNum: "",
  daughterNum: "",
  menarcheAge: "",
  duration: "",
  interval: "",
  MenstrualType: "",
  menopauseAge: "",
  lastMenstrualPeriod: "",
  fatherStatus: "健在",
  fatherDeathCause: "",
  fatherIllness: "",
  fatherSimilar: "无",
  motherStatus: "健在",
  motherDeathCause: "",
  motherIllness: "",
  motherSimilar: "无",
  heredofamilial: "否认",
  representor: "",
  reliability: ""
});
const checkupForm = reactive({
  T: "",
  P: "",
  R: "",
  BP: "",
  systolic: "",
  diastolic: "",
  height: "",
  weight: "",
  development: "正常",
  nutrition: "中等",
  body: "正力体型",
  position: "自主体位",
  state: "神志清楚",
  intonation: ["语调与语态正常"],
  features: ["正常面容与表情"],
  complexion: "正常",
  posturalGait: "姿势步态正常",
  mentalState: "一般",
  adaptability: "合作",
  reply: "切题",
  colourAndLustre: "正常",
  temperature: "正常",
  moisture: "皮肤湿度正常",
  elasticity: "良好",
  isScar: "无",
  scar: "",
  isDehydration: "无",
  isStainedYellow: "无",
  ulcerSite: "",
  isUlcer: "无",
  isSubcutaneous: "无",
  isLiverPalms: "无",
  bodyHair: "分布正常",
  skinNickReaction: "(-)",
  lymphNode: "无",
  skull: "外形正常",
  eye: "正常",
  trichiasis: "无",
  eyelid: "正常",
  conjunctiva: ["无充血"],
  eyeball: ["眼球无突出"],
  eyeMovement: "向各方向活动正常",
  cornea: ["无溃疡"],
  corneaReflex: "正常",
  pupil: ["等圆等大"],
  diameter: "2.5",
  lightReflex: "灵敏",
  ear: ["正常", "无畸形"],
  externalAuditoryCanal: "未见异常分泌物",
  mastoidProcess: "无",
  hearing: "正常",
  nasalCavity: "畅通",
  nose: "无",
  naresFlaring: "无",
  sinusParts: "鼻窦",
  pressingPain: "无",
  smell: "正常",
  mouthOdor: "无特殊气味",
  mouthBreathing: "无",
  lips: ["无紫绀"],
  tongue: ["形态正常"],
  pharynx: ["无充血"],
  uvula: "居中",
  swallow: "无",
  amygdala: ["无肿大"],
  neck: ["无抵抗"],
  carotidArtery: ["搏动正常"],
  jugularVein: ["无怒张"],
  airTube: "居中",
  thyroid: ["无肿大", "无压痛", "无震颤", "未闻及血管杂音"],
  thorax: ["对称", "无畸形"],
  thoracicDeformityCategory: "",
  intercostalSpace: ["无增宽"],
  breast: ["正常对称", "无红肿", "无压痛", "未触及包块"],
  breathingMovement: ["双肺呼吸运动对称"],
  respiratoryRate: ["呼吸平顺"],
  vocalFremitus: "正常",
  senseOfPleuralFriction: "无",
  pneumoderm: "无",
  lungsPart: "双肺",
  percussion: ["清音"],
  breathSounds: "清",
  lungAuscultationParts: "双肺",
  rale: ["未闻及干湿性罗音"],
  voiceTransmission: "正常",
  rubVoice: "无",
  heartUplift: "心前区无隆起",
  heartPalpation: ["心尖部无震颤、摩擦感、抬举样搏动"],
  heartPercussion: "心界不大",
  heartRate: "",
  heartRhythm: "心律齐",
  heartSounds: "心音有力",
  A2P2: "＝",
  auscultationArea: "各瓣膜听诊区",
  noisePeriod: "",
  noiseProperties: "",
  vascularSign: ["周围血管征阴性"],
  pulse: "脉搏正常",
  abdomenOutline: "腹部平坦",
  varicosity: "未见",
  peristalticWave: "未见",
  rash: "",
  tensity: "腹软",
  abdomenPart: "全",
  ache: "无",
  achePart: ["压痛"],
  reboundTenderness: "无",
  mcburneyPoint: "(-)",
  fluidThrill: "无",
  succussionSplash: "无",
  liver: ["肋下未触及"],
  spleen: ["肋下未触及"],
  cholecyst: "(-)",
  kidneyPart: "",
  kidneyPalpation: [],
  border: "存在",
  liverKidney: ["肝肾区无叩击痛"],
  shiftingDullness: "(-)",
  bowelsound: "正常",
  genitals: "未查",
  anorectum: "未查",
  spine: ["无畸形", "运动度正常"],
  allFours: ["关节无红肿、畸形及异常活动"],
  edema: "无水肿",
  sweeny: "无",
  physiologicalSite: "",
  physiologicalReflex: "存在",
  pathologySite: "",
  pathologyReflex: "未引出"
});
const auxiliaryForm = reactive({
  time: "",
  place: "",
  VTE: "",
  nutritionScore: "",
  tentativeDiagnosis: ""
});
</script>
<style lang="scss" scoped>
.fraction-input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

p {
  overflow-wrap: break-word;
}

:deep(.bold-label.el-form-item .el-form-item__label) {
  font-weight: bold !important;
  /* 添加其他需要的样式 */
}
</style>
