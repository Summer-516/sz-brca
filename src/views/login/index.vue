<script setup lang="ts" name="Login">
import Motion from "./utils/motion";
import { useRouter } from "vue-router";
import { message } from "@/utils/message";
import { loginRules } from "./utils/rule";
import { useNav } from "@/layout/hooks/useNav";
import type { FormInstance } from "element-plus";
import { useLayout } from "@/layout/hooks/useLayout";
// import { bg, avatar, illustration } from "./utils/static";
import { bg } from "./utils/static";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import {
  ref,
  reactive,
  // toRaw,
  onMounted,
  onBeforeUnmount,
  computed
} from "vue";
import { useDataThemeChange } from "@/layout/hooks/useDataThemeChange";

import dayIcon from "@/assets/svg/day.svg?component";
import darkIcon from "@/assets/svg/dark.svg?component";
import Lock from "@iconify-icons/ri/lock-fill";
import User from "@iconify-icons/ri/user-3-fill";
import { getLogin } from "@/api/user";
import LoginRegist from "./components/regist.vue";
//动态路由
// import { initRouter } from "@/router/utils";
import { useUserStoreHook } from "@/store/modules/user";
//静态路由
import { addPathMatch } from "@/router/utils";
import { setToken } from "@/utils/auth";
import { usePermissionStoreHook } from "@/store/modules/permission";

const router = useRouter();
const loading = ref(false);
const ruleFormRef = ref<FormInstance>();
const currentPage = computed(() => {
  return useUserStoreHook().currentPage;
});
const { initStorage } = useLayout();
initStorage();

const { dataTheme, dataThemeChange } = useDataThemeChange();
dataThemeChange();
const { title, abbreviation } = useNav();
const ruleForm = reactive({
  // username: "",
  // password: ""
  account: "admin",
  password: "xiaodong123"
});

// const onLogin = async (formEl: FormInstance | undefined) => {
//   loading.value = true;
//   if (!formEl) return;
//   await formEl.validate((valid, fields) => {
//     if (valid) {
//       getLogin(ruleForm)
//         .then(res => {
//           if (res.code === 1) {
//             const { accessToken, userId, roles, name } = res.data;
//             setToken({
//               accessToken: accessToken,
//               userId: userId,
//               roles: roles,
//               username: name
//             } as any);
//             usePermissionStoreHook().handleWholeMenus([]);
//             addPathMatch();
//             router.push("/");
//             message("登录成功", { type: "success" });
//           } else {
//             message(res.message || "登录失败,请联系管理员", {
//               type: "warning"
//             });
//             loading.value = false;
//             return fields;
//           }
//         })
//         .catch(err => {
//           console.log("err", err);
//           message(
//             err.message ||
//               err.response?.data.message ||
//               "登录失败,请联系管理员",
//             { type: "warning" }
//           );
//           loading.value = false;
//           return fields;
//         });
//     } else {
//       loading.value = false;
//       return fields;
//     }
//   });
// };
const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;

  try {
    const valid = await formEl.validate();
    if (valid) {
      try {
        const res = await getLogin(ruleForm);
        if (res.code === 1) {
          const { accessToken, userId, roles, name } = res.data;
          setToken({
            accessToken: accessToken,
            userId: userId,
            roles: roles,
            username: name
          } as any);
          usePermissionStoreHook().handleWholeMenus([]);
          addPathMatch();
          router.push("/");
          message("登录成功", { type: "success" });
        } else {
          message(res.message || "登录失败,请联系管理员", {
            type: "warning"
          });
        }
      } catch (err) {
        console.log("err", err);
        message(
          err.message || err.response?.data.message || "登录失败,请联系管理员",
          { type: "warning" }
        );
      }
    }
  } catch (fields) {
    console.log("验证失败:", fields);
  } finally {
    loading.value = false;
  }
};
/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (code === "Enter") {
    onLogin(ruleFormRef.value);
  }
}

onMounted(() => {
  window.document.addEventListener("keypress", onkeypress);
});

onBeforeUnmount(() => {
  window.document.removeEventListener("keypress", onkeypress);
});
</script>

<template>
  <div class="select-none">
    <img :src="bg" class="wave" />
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <el-switch
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <div class="img">
        <!-- <component :is="toRaw(illustration)" /> -->
      </div>
      <div class="login-box">
        <div class="login-form">
          <!-- <avatar class="avatar" /> -->
          <Motion>
            <h2 class="outline-none">{{ abbreviation }}</h2>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion>

          <el-form
            v-if="currentPage === 0"
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
          >
            <Motion :delay="100">
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
                  placeholder="请输入账号"
                  :prefix-icon="useRenderIcon(User)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
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
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
            <Motion :delay="250">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                @click="useUserStoreHook().SET_CURRENTPAGE(3)"
              >
                注册
              </el-button>
            </Motion>
          </el-form>
          <!-- 注册 -->
          <LoginRegist v-if="currentPage === 3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
