<template>
  <div>
    <el-card shadow="never">
      <el-form :model="form" label-width="auto" :inline="true">
        <!-- 1组织学和病理分级 -->
        <el-row>
          <span class="subtitle">组织学和病理分级</span>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="乳腺癌组织学类型">
              <el-cascader
                v-model="form.type"
                :options="options"
                :props="props"
                :show-all-levels="false"
                style="width: 240px"
                @change="handleChange"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="乳腺癌组织学分级">
              <el-select v-model="form.classification" style="width: 100px">
                <el-option label="1级" value="1" />
                <el-option label="2级" value="2" />
                <el-option label="3级" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <!-- 2肿瘤大小及淋巴结转移 -->
        <el-row>
          <span class="subtitle">肿瘤大小及淋巴结转移</span>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="肿瘤大小" style="width: 450px">
              <el-select v-model="form.T">
                <el-option label="T1:肿瘤的最大直径≤2cm" value="T1" />
                <el-option label="T2:2cm＜肿瘤的最大直径≤5cm" value="T2" />
                <el-option label="T3:肿瘤的最大直径＞5cm" value="T3" />
                <el-option
                  label="T4:无论肿瘤大小、直径侵犯胸壁以及皮肤"
                  value="T4"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="2">
            <el-form-item label="淋巴结转移的个数">
              <el-input v-model="form.X" style="width: 240px" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="送总清扫淋巴结个数">
              <el-input v-model="form.Y" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="是否远处转移">
              <el-select v-model="form.distantMetastasis" style="width: 100px">
                <el-option label="M" value="M" />
                <el-option label="M（0）" value="M0" />
                <el-option label="M(1)" value="M1" />
                <el-option label="M（x）" value="Mx" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <!-- 其他 -->
        <el-row>
          <el-col :span="6">
            <el-form-item label="原位癌">
              <el-select
                v-model="form.preinvasiveCarcinoma"
                style="width: 240px"
              >
                <el-option label="导管原位癌" value="导管原位癌" />
                <el-option label="XXX" value="XXX" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="核级">
              <el-select v-model="form.nuclearGrade" style="width: 240px">
                <el-option label="高" value="高" />
                <el-option label="低" value="低" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="坏死">
              <el-select v-model="form.necrosis" style="width: 240px">
                <el-option label="有" value="有" />
                <el-option label="无" value="无" />
              </el-select>
            </el-form-item> </el-col
          ><el-col :span="6">
            <el-form-item label="组织构型">
              <el-select
                v-model="form.histologicalSections"
                style="width: 240px"
              >
                <el-option label="粉刺型" value="粉刺型" />
                <el-option label="筛状型" value="筛状型" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <!-- 3切缘及脉管内癌栓情况 -->
        <el-row>
          <span class="subtitle">切缘及脉管内癌栓情况</span>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="手术切缘">
              <el-select v-model="form.surgicalMargin" style="width: 255px">
                <el-option label="阴性" value="阴性" />
                <el-option label="阳性" value="阳性" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />
        <!-- 4免疫组化分子分型 -->
        <el-row>
          <span class="subtitle">免疫组化分子分型</span>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="浸润癌ER">
              <el-cascader
                v-model="form.ER"
                :options="ERoptions"
                :props="ERprops"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="PR">
              <el-cascader
                v-model="form.PR"
                :options="PRoptions"
                :props="PRprops"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Her-2">
              <el-cascader
                v-model="form.Her2"
                :options="Her2options"
                :props="Her2props"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="CK5/6">
              <el-select v-model="form.CK56" style="width: 100px">
                <el-option label="+" value="1" />
                <el-option label="-" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <el-form-item label="P63">
              <el-select v-model="form.P63" style="width: 100px">
                <el-option label="+" value="1" />
                <el-option label="-" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="E-C">
              <el-select v-model="form.EC" style="width: 100px">
                <el-option label="+" value="1" />
                <el-option label="-" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="P120">
              <el-select v-model="form.P120" style="width: 100px">
                <el-option label="+" value="1" />
                <el-option label="-" value="0" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Ki-67阳性率">
              <el-select v-model="form.Ki67" style="width: 100px">
                <el-option label="约30%" value="约30%" />
                <el-option label="约40%" value="约40%" />
                <el-option label="约50%" value="约50%" />
                <el-option label="约60%" value="约60%" />
                <el-option label="约70%" value="约70%" />
                <el-option label="约80%" value="约80%" />
                <el-option label="约90%" value="约90%" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />

        <el-row>
          <el-col :offset="22" :span="2">
            <el-form-item>
              <el-button type="primary" @click="addPathology">提交</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  // name 作为一种规范最好必须写上并且和路由的name保持一致
  name: "PathologicalReport"
});

import { ref, reactive, onMounted, computed } from "vue";
import { message } from "@/utils/message";
import { addPathologyApi, getPathologyApi } from "@/api/patient";
// import { useRoute } from "vue-router";
// const route = useRoute();
import { useOutpatientStore } from "@/store/modules/outpatient";
const outpatientStore = useOutpatientStore();
const selectedPatient = computed(() => outpatientStore.getSelectedPatient);
const patientId = ref(null);
const form = reactive({
  type: [],
  classification: "",
  T: "",
  X: "",
  Y: "",
  distantMetastasis: "",
  preinvasiveCarcinoma: "",
  nuclearGrade: "",
  necrosis: "",
  histologicalSections: "",

  surgicalMargin: "",
  ER: [],
  PR: [],
  Her2: [],
  CK56: "",
  P63: "",
  EC: "",
  P120: "",
  Ki67: ""
});
// 联级选择器
const props = {
  expandTrigger: "hover" as const
};
const options = [
  {
    value: "非浸润性乳腺癌",
    label: "非浸润性乳腺癌",
    children: [
      {
        value: "导管原位癌",
        label: "导管原位癌"
      },
      {
        value: "多形型、旺炽型小叶原 位 癌",
        label: "多形型、旺炽型小叶原 位 癌"
      }
    ]
  },
  {
    value: "浸润性乳腺癌",
    label: "浸润性乳腺癌",
    children: [
      {
        value: "非特殊型浸润性癌",
        label: "非特殊型浸润性癌"
      },
      {
        value: "特殊型浸润性癌",
        label: "特殊型浸润性癌"
      }
    ]
  }
];
const ERprops = {
  checkStrictly: true
};
const ERoptions = [
  {
    value: "1",
    label: "+",
    children: [
      {
        value: "强",
        label: "强",
        children: [
          {
            value: "约10%",
            label: "约10%"
          },
          {
            value: "约20%",
            label: "约20%"
          },
          {
            value: "约30%",
            label: "约30%"
          },
          {
            value: "约40%",
            label: "约40%"
          },

          {
            value: "约50%",
            label: "约50%"
          },
          {
            value: "约60%",
            label: "约60%"
          },
          {
            value: "约70%",
            label: "约70%"
          },
          {
            value: "约80%",
            label: "约80%"
          },

          {
            value: "约90%",
            label: "约90%"
          }
        ]
      },
      {
        value: "强-中",
        label: "强-中",
        children: [
          {
            value: "约10%",
            label: "约10%"
          },
          {
            value: "约20%",
            label: "约20%"
          },
          {
            value: "约30%",
            label: "约30%"
          },
          {
            value: "约40%",
            label: "约40%"
          },

          {
            value: "约50%",
            label: "约50%"
          },
          {
            value: "约60%",
            label: "约60%"
          },
          {
            value: "约70%",
            label: "约70%"
          },
          {
            value: "约80%",
            label: "约80%"
          },

          {
            value: "约90%",
            label: "约90%"
          }
        ]
      },
      {
        value: "中",
        label: "中"
      }
    ]
  },
  {
    value: "0",
    label: "-"
  }
];
const PRprops = {
  checkStrictly: true
};
const PRoptions = [
  {
    value: "1",
    label: "+",
    children: [
      {
        value: "强",
        label: "强",
        children: [
          {
            value: "约10%",
            label: "约10%"
          },
          {
            value: "约20%",
            label: "约20%"
          },
          {
            value: "约30%",
            label: "约30%"
          },
          {
            value: "约40%",
            label: "约40%"
          },

          {
            value: "约50%",
            label: "约50%"
          },
          {
            value: "约60%",
            label: "约60%"
          },
          {
            value: "约70%",
            label: "约70%"
          },
          {
            value: "约80%",
            label: "约80%"
          },

          {
            value: "约90%",
            label: "约90%"
          }
        ]
      },
      {
        value: "强-中",
        label: "强-中",
        children: [
          {
            value: "约10%",
            label: "约10%"
          },
          {
            value: "约20%",
            label: "约20%"
          },
          {
            value: "约30%",
            label: "约30%"
          },
          {
            value: "约40%",
            label: "约40%"
          },

          {
            value: "约50%",
            label: "约50%"
          },
          {
            value: "约60%",
            label: "约60%"
          },
          {
            value: "约70%",
            label: "约70%"
          },
          {
            value: "约80%",
            label: "约80%"
          },

          {
            value: "约90%",
            label: "约90%"
          }
        ]
      },
      {
        value: "中",
        label: "中"
      }
    ]
  },
  {
    value: "0",
    label: "-"
  }
];
const Her2props = {
  checkStrictly: true
};
const Her2options = [
  {
    value: "0",
    label: "0",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  },
  {
    value: "1",
    label: "1",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  },
  {
    value: "2",
    label: "2",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  },
  {
    value: "2+",
    label: "2+",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  },
  {
    value: "3",
    label: "3",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  },
  {
    value: "3+",
    label: "3+",
    children: [
      {
        value: "建议行FISH检测",
        label: "建议行FISH检测"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      },
      {
        value: "建议行XXXX",
        label: "建议行XXXX"
      }
    ]
  }
];

const handleChange = value => {
  console.log(value);
};
// const onSubmit = () => {
//   console.log("submit!");
// };
// 请求添加病理报告
const addPathology = async () => {
  try {
    const data = await addPathologyApi(patientId.value, form);
    console.log("data", data);
    message("添加病理报告成功", { type: "success" });
  } catch (error) {
    message(`添加病理报告失败: ${error.message || "未知错误"}`, {
      type: "warning"
    });
  }
};
// 请求获取病理报告
const getPathology = async () => {
  try {
    const response = await getPathologyApi(patientId.value);
    const data = response.data.records[0].病理诊断;
    Object.assign(form, data);
    console.log("请求获取data", data);
    message("获取病理报告成功", { type: "success" });
  } catch (error) {
    message(`获取病理报告失败: ${error.message || "未知错误"}`, {
      type: "warning"
    });
  }
};
onMounted(() => {
  // const id = route.query.id;
  // if (id) {
  //   console.log("id", id);
  // }
  const patient = selectedPatient.value;
  if (patient) {
    patientId.value = patient._id;
    getPathology();
    // addPathology();
  } else {
    message("请先选择病人", { type: "warning" });
  }
});
</script>

<style lang="scss" scoped>
.subtitle {
  margin-bottom: 15px;
}
</style>
