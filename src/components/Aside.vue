<template>
  <el-aside width="200px" class="aside">
    <el-scrollbar style="background-color: #eef1f6">
      <el-menu
        active-text-color="#409eff"
        background-color="#eef1f6"
        :default-active="path"
        :default-openeds="['1']"
        :router="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="home">Home</el-menu-item>
            <el-menu-item index="page">Page</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2" disabled>
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4" disabled>
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script lang="ts" setup>
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const path = ref('');

const route = useRoute();
watch(route, (newValue) => {
  path.value = newValue.path.substring(1, newValue.path.length);
});

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

onMounted(() => {
  if (route.path) path.value = route.path.substring(1, route.path.length);
  else path.value = 'home';
});
</script>

<style scoped>
.aside {
  width: 240px;
  color: var(--el-text-color-primary);
  background: #fff !important;
  border-right: solid 1px #e6e6e6;
  box-sizing: border-box;
}
.el-menu {
  border-right: none;
}
</style>
