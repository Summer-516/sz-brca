<script setup lang="ts">
import { ref, reactive } from "vue";
import Motion from "../utils/motion";
import { updateRules } from "../utils/rule";
import { message } from "@/utils/message";
import type { FormInstance } from "element-plus";
// import { useVerifyCode } from "../utils/verifyCode";
import { useUserStoreHook } from "@/store/modules/user";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { getRegister } from "@/api/user";
import Lock from "@iconify-icons/ri/lock-fill";
import Iphone from "@iconify-icons/ep/iphone";
import User from "@iconify-icons/ri/user-3-fill";
import Name from "@iconify-icons/ri/contacts-fill";

const loading = ref(false);
const ruleForm = reactive({
  // email: "test@test.com",
  // username: "test",
  // phone: "18271953886",
  // password: "12345",
  // repeatPassword: "12345"
  name: "",
  account: "",
  phone: "",
  password: "",
  repeatPassword: ""
});
const ruleFormRef = ref<FormInstance>();
// const { isDisabled, text } = useVerifyCode();
const repeatPasswordRule = [
  {
    validator: (rule, value, callback) => {
      if (value === "") {
        callback("请输入确认密码");
      } else if (ruleForm.password !== value) {
        callback("两次密码不一致!");
      } else {
        callback();
      }
    },
    trigger: "blur"
  }
];

// const onUpdate = async (formEl: FormInstance | undefined) => {
//   loading.value = true;
//   if (!formEl) return;
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       getRegister(ruleForm)
//         .then(res => {
//           if (res.code === 201) {
//             message("注册成功", { type: "success" });
//             onBack();
//           }
//         })
//         .catch(err => {
//           const res = err.response.data.data;
//           message(res.email || res.phone || "注册失败，请稍后再试", {
//             type: "warning"
//           });
//         })
//         .finally(() => {
//           loading.value = false;
//         });
//       // if (checked.value) {
//       //   // 模拟请求，需根据实际开发进行修改
//       //   setTimeout(() => {
//       //     message("注册成功", { type: "success" });
//       //     loading.value = false;
//       //   }, 2000);
//       // } else {
//       //   loading.value = false;
//       //   message("请勾选隐私政策", { type: "warning" });
//       // }
//     } else {
//       loading.value = false;
//       return fields;
//     }
//   });
// };
const onUpdate = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;

  try {
    const valid = await formEl.validate();
    if (valid) {
      try {
        const res = await getRegister(ruleForm);
        console.log("注册成功的res", res);
        if (res.code === 1) {
          message("注册成功", { type: "success" });
          onBack();
        }
      } catch (err) {
        const res = err.response.data.data;
        message(res.email || res.phone || "注册失败，请稍后再试", {
          type: "warning"
        });
      }
    }
  } catch (fields) {
    // 如果需要，在这里处理验证错误
    console.error("验证失败:", fields);
  } finally {
    loading.value = false;
  }
};

function onBack() {
  // useVerifyCode().end();
  useUserStoreHook().SET_CURRENTPAGE(0);
}
</script>

<template>
  <el-form
    ref="ruleFormRef"
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
      >
        <el-input
          clearable
          v-model="ruleForm.name"
          placeholder="姓名"
          :prefix-icon="useRenderIcon(Name)"
        />
      </el-form-item>
    </Motion>
    <Motion>
      <el-form-item
        :rules="[
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          }
        ]"
        prop="account"
      >
        <el-input
          clearable
          v-model="ruleForm.account"
          placeholder="账号"
          :prefix-icon="useRenderIcon(User)"
        />
      </el-form-item>
    </Motion>
    <Motion :delay="100">
      <el-form-item prop="phone">
        <el-input
          clearable
          v-model="ruleForm.phone"
          placeholder="手机号码"
          :prefix-icon="useRenderIcon(Iphone)"
        />
      </el-form-item>
    </Motion>
    <Motion :delay="200">
      <el-form-item prop="password">
        <el-input
          clearable
          show-password
          v-model="ruleForm.password"
          placeholder="密码"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>
    </Motion>
    <Motion :delay="250">
      <el-form-item :rules="repeatPasswordRule" prop="repeatPassword">
        <el-input
          clearable
          show-password
          v-model="ruleForm.repeatPassword"
          placeholder="确认密码"
          :prefix-icon="useRenderIcon(Lock)"
        />
      </el-form-item>
    </Motion>

    <!-- <Motion :delay="150">
      <el-form-item prop="verifyCode">
        <div class="w-full flex justify-between">
          <el-input
            clearable
            v-model="ruleForm.verifyCode"
            placeholder="短信验证码"
            :prefix-icon="useRenderIcon('ri:shield-keyhole-line')"
          />
          <el-button
            :disabled="isDisabled"
            class="ml-2"
            @click="useVerifyCode().start(ruleFormRef, 'phone')"
          >
            {{ text.length > 0 ? text + "秒后重新获取" : "获取验证码" }}
          </el-button>
        </div>
      </el-form-item>
    </Motion> -->

    <!-- <Motion :delay="300">
      <el-form-item>
        <el-checkbox v-model="checked"> 我已仔细阅读并接受 </el-checkbox>
        <el-button link type="primary"> 《隐私政策》 </el-button>
      </el-form-item>
    </Motion> -->

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

    <Motion :delay="400">
      <el-form-item>
        <el-button class="w-full" size="default" @click="onBack">
          返回
        </el-button>
      </el-form-item>
    </Motion>
  </el-form>
</template>
