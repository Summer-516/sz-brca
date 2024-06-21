<template>
  <div>
    <el-card shadow="always" class="rounded-16px shadow-sm">
      <template #header>
        <div class="card-header">
          <span>病人信息</span>
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
        <el-row>
          <el-col><h3>基本信息</h3></el-col>
          <el-divider border-style="dashed" />
          <el-col :span="6">
            <el-form-item label="姓名：">
              <el-input v-model="model.name" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="性别：">
              <el-input v-model="model.gender" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="年龄：">
              <el-input v-model="model.age" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="民族：">
              <el-input v-model="model.nation" placeholder="Please input" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="出生日期：">
              <el-date-picker
                v-model="model.birthday"
                format="YYYY-MM-DD"
                value-format="YYYY-MM-DD"
                type="date"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="住院号：">
              <el-input
                v-model="model.hospital_number"
                placeholder="Please input"
              />
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item label="父亲祖籍：">
              <el-input v-model="model.f_ancestral" placeholder="Please input">
                <template #append>省</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="母亲祖籍：">
              <el-input v-model="model.m_ancestral" placeholder="Please input">
                <template #append>省</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="联系地址：">
              <el-input v-model="model.address" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="父亲姓名：">
              <el-input v-model="model.f_name" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系电话：">
              <el-input v-model="model.f_phone" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="母亲姓名：">
              <el-input v-model="model.m_name" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="联系电话：">
              <el-input v-model="model.m_phone" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="胎次：">
              <el-row :gutter="5">
                <el-col :span="12">
                  <el-input v-model="model.parity.pregnancy">
                    <template #append>孕</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input v-model="model.parity.parity">
                    <template #append>产</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="孕周：">
              <el-input
                v-model="model.parity.gestational_age"
                placeholder="Please input"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="生产方式：">
              <el-select v-model="model.parity.delivery" placeholder="Select">
                <el-option
                  v-for="item in deliveryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="原因：">
              <el-input v-model="model.parity.reason" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="窒息抢救史：">
              <el-switch
                v-model="model.suffocate_history"
                inline-prompt
                active-text="是"
                inactive-text="否"
                active-value="是"
                inactive-value="否"
              />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Apgar评分：">
              <el-input v-model="model.apgar" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生体重：">
              <el-input v-model="model.weight" placeholder="Please input" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="出生身长：">
              <el-input v-model="model.height">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>生长发育史</h3></el-col>
          <el-divider border-style="dashed" />

          <el-col :span="4">
            <el-form-item label-width="0">
              <el-input v-model="model.grow.rise">
                <template #append>月抬头</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="0">
              <el-input v-model="model.grow.sit">
                <template #append>月独坐</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="0">
              <el-input v-model="model.grow.walk">
                <template #append>月独走</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="0">
              <el-input v-model="model.grow.call">
                <template #append>月会叫人</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label-width="0">
              <el-input v-model="model.grow.speak">
                <template #append>月会说话</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>既往史</h3></el-col>
          <el-divider border-style="dashed" />
          <el-input
            v-model="model.past_history"
            placeholder="Please input"
            type="textarea"
            :autosize="{
              minRows: 2,
              maxRows: 3
            }"
          />
        </el-row>
        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>家族史</h3></el-col>
          <el-divider border-style="dashed" />
          <el-col :span="4">
            <el-form-item label="父亲： 年龄">
              <el-input v-model="model.family.f_age">
                <template #append>岁</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="身高">
              <el-input v-model="model.family.f_height">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="体重">
              <el-input v-model="model.family.f_weight">
                <template #append>kg</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="健康情况：">
              <el-select v-model="model.family.f_health" placeholder="Select">
                <el-option
                  v-for="item in 健康情况Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="疾病：">
              <el-input v-model="model.family.f_disease" />
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="母亲： 年龄">
              <el-input v-model="model.family.m_age">
                <template #append>岁</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="身高">
              <el-input v-model="model.family.m_height">
                <template #append>cm</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="体重">
              <el-input v-model="model.family.m_weight">
                <template #append>kg</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="健康情况：">
              <el-select v-model="model.family.m_health" placeholder="Select">
                <el-option
                  v-for="item in 健康情况Options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="疾病：">
              <el-input v-model="model.family.m_disease" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="自然流产">
              <el-input v-model="model.family.abortion_number">
                <template #append>次</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="死胎">
              <el-input v-model="model.family.stillbirth_number">
                <template #append>次</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider />

        <el-row :gutter="10">
          <el-col><h3>其他成员特殊疾病史</h3></el-col>
          <el-divider border-style="dashed" />
          <el-input
            v-model="model.family.other"
            placeholder="Please input"
            type="textarea"
            :autosize="{
              minRows: 2,
              maxRows: 3
            }"
          />
        </el-row>
        <el-divider />
        <el-row :gutter="10">
          <el-col><h3>家系图</h3></el-col>
          <el-divider border-style="dashed" />
          <template v-if="!id">
            <el-upload
              ref="uploadRef"
              v-model:file-list="model.family.family_diagram"
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
            <img :src="model.family.family_diagram[0]" alt="Uploaded Image" />
          </template>
        </el-row>

        <el-divider />

        <el-row justify="center">
          <el-col :xs="8" :md="4" :lg="3" :xl="2">
            <el-form-item label-width="0">
              <el-button v-if="!id" type="primary" @click="onSubmit">
                提交
              </el-button>
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

<script setup lang="ts" name="Dossier">
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { addPatientsInfo, getPatientDetail } from "@/api/doctor";
import { Delete, Download, Plus, ZoomIn } from "@element-plus/icons-vue";
import type { UploadFile } from "element-plus";
// import { createFormData } from "@pureadmin/utils";
const route = useRoute();
const id = route.query.id;
const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

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

const onSubmit = () => {
  const fd = new FormData();
  Object.keys(model.value).forEach(key => {
    if (model.value[key] instanceof Object) {
      Object.keys(model.value[key]).forEach(item => {
        fd.append(`${key}.${item}`, model.value[key][item]);
      });
    } else {
      fd.append(key, model.value[key]);
    }
  });
  fd.set("family.family_diagram", model.value.family.family_diagram[0].raw);
  addPatientsInfo(fd)
    .then(res => {
      if (res.code === 201) {
        ElMessage.success(res.message || "提交成功！");
        router.go(-1);
      } else {
        ElMessage.warning(res.message);
      }
    })
    .catch(err => {
      ElMessage.error("提交失败！" + err.message);
    });
};
const getDetail = () => {
  if (id) {
    getPatientDetail(id)
      .then(res => {
        if (res.code === 200 && res.data) {
          model.value = Object.assign(model.value, res.data);
          console.log("  model.value", model.value);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
onMounted(() => {
  getDetail();
});
const formRef = ref();
const router = useRouter();

const model = ref({
  name: "test",
  gender: "男",
  age: "",
  nation: "",
  birthday: "",
  hospital_number: "",
  f_ancestral: "",
  m_ancestral: "",
  address: "",
  f_name: "",
  f_phone: "",
  m_name: "",
  m_phone: "",
  parity: {
    pregnancy: "",
    parity: "",
    gestational_age: "",
    delivery: "",
    reason: ""
  },
  suffocate_history: "否",
  apgar: "",
  weight: "",
  height: "",
  grow: { rise: "", sit: "", walk: "", call: "", speak: "" },
  past_history: "",
  family: {
    f_age: "",
    f_height: "",
    f_weight: "",
    f_health: "良",
    f_disease: "",
    m_age: "",
    m_height: "",
    m_weight: "",
    m_health: "良",
    m_disease: "",
    abortion_number: "",
    stillbirth_number: "",
    other: "",
    family_diagram: []
  }
});

const 健康情况Options = ["良", "疾病"].map(v => ({
  label: v,
  value: v
}));

const deliveryOptions = ["顺产", "剖腹产", "难产"].map(v => ({
  label: v,
  value: v
}));

function goBack() {
  router.go(-1);
}
</script>
<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
