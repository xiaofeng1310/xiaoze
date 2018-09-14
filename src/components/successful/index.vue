<template>
  <el-container class="container">
    <el-header class="header">
      <div class="sidebar-wrap">
        <div class="left-area">
          <img src="../../assets/logo.png" alt="">
          <span class="el-header__title">
            VUE
            <span class="subtitle">EDEN</span>
            <span class="version-wrap">Alpha 1.0</span>
          </span>
        </div>
        <div class="middle-area">
          <div class="Collapse">
            <i class="el-icon-tickets" @click="isCollapseTap"></i>
          </div>
          <div class="middle-area__msglist">
            <el-breadcrumb separator="/" class="eden-breadcrumb">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
              <el-breadcrumb-item>活动列表</el-breadcrumb-item>
              <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="right-area">
          登录状态
        </div>
      </div>
    </el-header>
    <el-container>
      <el-aside :width="asideWidth+'px'" class="aside">
        <Ztree :isCollapse="isCollapse"></Ztree>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Ztree from './ztree'
export default {
  name: 'success',
  data () {
    return {
      isCollapse: false,
      asideWidth: 240
    }
  },
  methods: {
    isCollapseTap () {
      this.isCollapse = !this.isCollapse
      if (this.isCollapse) {
        this.asideWidth = 60
      } else {
        this.asideWidth = 240
      }
    }
  },
  components: {
    Ztree
  },
  route: {
    beforeRouteUpdate (to, from, next) {
      next((vm) => {
        // vm.routeList = to.meta.routeList
        console.log(to.meta.routeList)
      })
    }
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .header {
    line-height: 60px;
  }
  .sidebar-wrap {
    display: flex;
    height: 100%;
  }
  .left-area {
    min-width: 240px;
  }
  .left-area img{
    vertical-align: middle;
    width: 37px;
    height: 37px;
  }
  .el-header__title {
    color: #41b883;
    font-size: 20px;
    font-weight: 700;
  }
  .subtitle {
    color: #2e5753;
  }
  .version-wrap {
    margin-left: 8px;
    padding: 3px 8px;
    background: #eaeaea;
    border-radius: 3px;
    font-size: 12px;
  }
  .middle-area {
    flex: 1 1 0%;
  }
  .middle-area:after {
    display: block;
    content: '';
    height: 0;
    clear: both;
  }
  .middle-area .Collapse {
    float: left;
    width: 60px;
    height: 100%;
  }
  .middle-area i {
    padding: 0 15px;
    font-size: 24px;
    cursor: pointer;
    vertical-align: middle;
  }
  .middle-area .middle-area__msglist {
    float: left;
    width: calc(100% - 70px);
    height: 100%;
    padding-left: 10px;
    color: #606266;
    font-size: 14px;
    font-weight: 400;
  }
  .eden-breadcrumb {
    display: inline-block;
    line-height: 60px;
    min-width: 50px;
  }
  .right-area {
    min-width: 250px;
  }
  .aside {
    background: #545c64;
    transition: width .3s;
  }
</style>
