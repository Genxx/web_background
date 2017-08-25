<template>
  <div id="account" v-title data-title="我的账号">
    <div class="self-box">
      <img class="fl" src="../assets/admin.png" alt="picture" width="100" height="100">
      <div class="fl self">
        <p class="name">{{userName}}</p>
        <p class="phone">{{userPhone}}</p>
      </div>
    </div>
    <router-link tag="div" to="/purse" class="purse">
      <p class="fl"><img src="../assets/icon/wallet.png" alt="">钱包</p>
      <p class="fr">余额{{balance2}}元</p>
    </router-link>
    <div class="gif-box">
      <router-link tag="div" to="/gifmanage" class="gif-manage">
        <img src="../assets/icon/gifManage.png" alt="">礼品管理
      </router-link>
      <!--<div class="gif-notify">-->
        <!--<p class="fl"><img src="../assets/icon/stock.png" alt="">礼品库存通知</p>-->
        <!--<div class="fr weui-cell weui-cell_switch">-->
          <!--<div class="weui-cell__ft">-->
            <!--<input class="weui-switch" type="checkbox" checked="checked">-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<p class="tit">-->
        <!--<span>每台设备库存少于10推送消息，</span>-->
        <!--<a href="#">修改数量</a>-->
      <!--</p>-->
    </div>
    <router-link tag="div" to="/delivery" class="addr"><img src="../assets/icon/addr.png" alt="">投放地址</router-link>
    <router-link tag="div" to="/customnum" class="custom">
      <p class="fl"><img src="../assets/icon/customerService.png" alt="">客服</p>
      <p class="fr">{{accountInfo.customerService}}</p>
    </router-link>
    <router-link tag="div" to="/sellername" class="seller">
      <p class="fl"><img src="../assets/icon/shopName.png" alt="">商户名称</p>
      <p class="fr">{{accountInfo.shopName==''?"未设置":accountInfo.shopName}}</p>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {toDecimal2} from '../assets/js/until'

  export default {
    computed:{
      ...mapGetters({
        accountInfo:'accountInfo',
      })
    },
    components: {},
    data() {
      return {
        userName:"test",
        userPhone:"13849563211",
        balance2: 0
      }
    },
    methods: {},
    mounted() {
      this.balance2 = toDecimal2(this.accountInfo.balance);
//      const account = localStorage.getItem("account")
//      this.$http.get('/api/v1/account?account=', account)
//        .then(function (res) {
//          this.userName= res.data.userName;
//          this.userPhone = res.data.userPhone;
//          let obj = [res.data.
//          this.$store.commit('SET_ADDRESS',);
//          console.log(res.data)
//        }, function (err) {
//          console.log(err)
//        })
    }
  }
</script>

<style lang="less" >
  @import '../less/account.less';
</style>
