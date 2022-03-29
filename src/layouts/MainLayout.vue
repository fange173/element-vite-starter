<template>
  <el-container class="layout-container">
    <el-header class="header">
      <div class="container">
        <div class="title">Element Vite Starter</div>
        <div class="content">
          <el-button-group class="ml-4">
            <el-button type="primary" :icon="Edit" />
            <el-button type="primary" :icon="Share" />
            <el-button type="primary" :icon="Delete" />
          </el-button-group>
        </div>
      </div>
    </el-header>
    <el-container class="main-container">
      <Aside />
      <el-main>
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Delete, Edit, Share } from '@element-plus/icons-vue';
</script>

<style scoped>
.layout-container {
  position: relative;
  width: 100%;
}
.layout-container .header {
  height: 60px;
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: right;
  font-size: 12px;
  height: 60px;
  line-height: 60px;
}
.layout-container .header .container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.layout-container .header .title {
  display: flex;
  align-items: center;
  font-size: var(--el-font-size-extra-large);
}
.layout-container .header .content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.layout-container .main-container {
  height: calc(100vh - 60px);
}
.layout-container .el-main {
  padding: 0;
}
</style>
