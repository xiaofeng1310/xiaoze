<template>
   <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :collapse-transition="false"
      class="el-menu-vertical-demo"
      :router="true"
      :default-active="$route.path">
      <el-menu-item index="/success/dashboard/index">
        <i class="el-icon-view"></i>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/success/widget/index">
        <i class="el-icon-location"></i>
        <span slot="title">控件</span>
      </el-menu-item>
      <el-menu-item index="/success/panels/index">
        <i class="el-icon-menu"></i>
        <span slot="title">卡片展示</span>
      </el-menu-item>
      <el-menu-item index="/success/permission/index">
        <i class="el-icon-menu"></i>
        <span slot="title">权限控制</span>
      </el-menu-item>
   </el-menu>
</template>

<script>
export default {
  name: 'ztree',
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
