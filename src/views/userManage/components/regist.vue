<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import Motion from "@/views/login/utils/motion";
import { updateRules } from "@/views/login/utils/rule";
import { message } from "@/utils/message";
import type { FormInstance } from "element-plus";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { addUser, updateUserInfo } from "@/api/user";

const loading = ref(false);
const ruleFormRef = ref<FormInstance>();

const emit = defineEmits(["close", "search"]);
const props = defineProps({
  id: String,
  isDetail: { type: Boolean, default: false },
  detailsForm: { type: Object, default: () => {} }
});
const { isDetail, detailsForm, id } = toRefs(props);

const ruleForm = ref({
  name: "",
  phone: "",
  account: "",
  password: "",
  repeatPassword: ""
});
watch(
  detailsForm,
  () => {
    if (isDetail.value) {
      //防止 resetFields 接收错误的初始数据
      setTimeout(() => {
        ruleForm.value = { ...ruleForm.value, ...detailsForm.value };
      }, 0);
    } else {
      ruleFormRef.value?.resetFields();
    }
  },
  {
    immediate: true
  }
);
const repeatPasswordRule = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback("请输入确认密码");
      } else if (ruleForm.value.password !== value) {
        callback("两次密码不一致!");
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
];

const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      const fn = isDetail.value ? updateUserInfo : addUser;
      const successMessage = isDetail.value ? "修改成功" : "新增成功";
      const failMessage = isDetail.value ? "修改失败" : "新增失败";
      fn({ ...ruleForm.value }, id.value)
        .then(res => {
          if (res.code === 200) {
            message(successMessage, { type: "success" });
            emit("close");
            emit("search");
          } else {
            message(res.message || `${failMessage},请联系管理员`, {
              type: "warning"
            });
          }
        })
        .catch(err => {
          message(err.response?.data.message || err.message, {
            type: "warning"
          });
        })
        .finally(() => {
          loading.value = false;
        });
    } else {
      loading.value = false;
      return fields;
    }
  });
};
</script>

<template>
  <el-form
    ref="ruleFormRef"
    label-width="80px"
    :model="ruleForm"
    :rules="updateRules"
    size="large"
  >
    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }
        ]"
        prop="name"
        label="姓名"
      >
        <el-input
          autocomplete="no"
          clearable
          v-model="ruleForm.name"
          placeholder="姓名"
          :prefix-icon="useRenderIcon('user')"
        />
      </el-form-item>
    </Motion>
    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: '请输入医生id',
            trigger: 'blur'
          }
        ]"
        prop="account"
        label="医生id"
      >
        <el-input
          clearable
          :disabled="isDetail"
          v-model="ruleForm.account"
          placeholder="账号"
          :prefix-icon="useRenderIcon('user')"
        />
      </el-form-item>
    </Motion>
    <Motion :delay="100">
      <el-form-item prop="phone" label="手机号码" required>
        <el-input
          clearable
          v-model="ruleForm.phone"
          placeholder="手机号码"
          :prefix-icon="useRenderIcon('iphone')"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="200" v-if="!isDetail">
      <el-form-item prop="password" label="密码" required>
        <el-input
          clearable
          show-password
          v-model="ruleForm.password"
          placeholder="密码"
          :prefix-icon="useRenderIcon('lock')"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="250" v-if="!isDetail">
      <el-form-item
        :rules="repeatPasswordRule"
        prop="repeatPassword"
        label="确认密码"
        required
      >
        <el-input
          clearable
          show-password
          v-model="ruleForm.repeatPassword"
          placeholder="确认密码"
          :prefix-icon="useRenderIcon('lock')"
        />
      </el-form-item>
    </Motion>

    <Motion :delay="350">
      <el-form-item>
        <el-button
          class="w-full"
          size="default"
          type="primary"
          :loading="loading"
          @click="onUpdate(ruleFormRef)"
        >
          确定
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
