<template>
  <div id="account" v-title data-title="我的账号">
    <div class="self-box">
      <img class="fl" src="../assets/admin.jpeg" alt="picture" width="100" height="100">
      <div class="fl self">
        <p class="name">{{userName}}</p>
        <p class="phone">{{userPhone}}</p>
      </div>
    </div>
    <router-link tag="div" to="/purse" class="purse">
      <p class="fl">钱包</p>
      <p class="fr">余额{{money}}元</p>
    </router-link>
    <div class="gif-box">
      <router-link tag="div" to="/gifmanage" class="gif-manage">
        礼品管理
      </router-link>
      <div class="gif-notify">
        <p class="fl">礼品库存通知</p>
        <div class="fr weui-cell weui-cell_switch">
          <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox" checked="checked">
          </div>
        </div>
      </div>
      <p class="tit">
        <span>每台设备库存少于10推送消息，</span>
        <a href="#">修改数量</a>
      </p>
    </div>
    <router-link tag="div" to="/delivery" class="addr">投放地址</router-link>
    <router-link tag="div" to="/customnum" class="custom">
      <p class="fl">客服</p>
      <p class="fr">{{customerService}}</p>
    </router-link>
    <router-link tag="div" to="/sellername" class="seller">
      <p class="fl">商户名称</p>
      <p class="fr">{{shopName==''?"未设置":shopName}}</p>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

  export default {

    components: {},
    data() {
      return {
        userName:"test",
        userPhone:"13849563211",
        money:"0.50",
        customerService:'小明',
        shopName:""
      }
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="less" >
  @import '../less/account.less';
</style>
