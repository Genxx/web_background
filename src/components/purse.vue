<template>
  <div id="purse" v-title data-title="钱包">
    <div class="balance ">
      <div class="fl">
        <p>账号余额</p>
        <p class="sty">
          <span class="num">{{balance2}}</span>
          <span>元</span>
        </p>
      </div>
      <router-link tag="p" to="/balance" class="fr" >提现&gt;</router-link>
    </div>
    <div class="gains">
      <p class="tit">当天广告收益</p>
      <div class="oth">
        <span class="fl">{{advertisingRevenue2}}元</span>
        <span class="fr">昨日广告收益已到账</span>
      </div>
    </div>
    <p class="intr" @click="test">当天广告收益于次日审核到账后即可提现</p>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {mapGetters} from 'vuex'
  import {toDecimal2} from '../assets/js/until'

  export default {
    computed:{
      ...mapGetters({
        accountInfo:'accountInfo',
        advertisingRevenue:'advertisingRevenue'
      })
    },
    components: {},
    data() {
      return {
        balance2:0,
        advertisingRevenue2:0
      }
    },
    methods: {
      test(){
        var temp = 1.5;
      }
    },
    mounted() {
      this.balance2 = toDecimal2(this.accountInfo.balance);
      this.advertisingRevenue2 = toDecimal2(this.advertisingRevenue);
    }
  }
</script>

<style lang="less">
  @import '../less/purse.less';
</style>
