<template>
  <div id="app" v-title data-title="设备管理系统">
    <div class="header">
      <div class="header-t">
        <p>今日收益 (元)</p>
        <h3>{{income.total}}</h3>
      </div>
      <ul class="header-m">
        <li class="online">
          <p>在线支付</p>
          <p>{{income.pay}}元</p>
        </li>
        <li class="ad">
          <p>广告收益</p>
          <p>{{income.ads}}元</p>
        </li>
        <li class="cash">
          <p>现金收益</p>
          <p>{{income.cash}}元</p>
        </li>
      </ul>
      <ul class="header-b">
        <li>
          <p>礼品消耗</p>
          <p>0个</p>
        </li>
        <li>
          <p>线下投币</p>
          <p>7个</p>
        </li>
      </ul>
    </div>
    <router-link tag="div" to="/device" class="device clearfix">
      <div class="fl">
        <img src="../assets/icon/device.png" alt="" width="100%">
      </div>
      <div class="fl">
        <p>设备管理</p>
        <p class="num">共{{device.total}}台，在线{{device.online}}台</p>
      </div>
    </router-link>
    <ul class="regist">
      <li @click="_scan()" class="clearfix">
        <div class="fl">
          <img src="../assets/icon/deviceRegister.png" alt="">
        </div>
        <div class="fl">
          <p> 设备注册</p>
          <p>扫描设备二维码</p>
        </div>
      </li>
      <router-link tag="li" to="/gains" class="clearfix">
        <div class="fl">
          <img src="../assets/icon/statistics.png" alt="">
        </div>
        <div class="fl">
          <p>经营统计</p>
          <p>经营数据监控</p>
        </div>
      </router-link>
    </ul>
    <router-link tag="div" to="/account" class="person clearfix">
      <div class="fl">
        <img src="../assets/icon/user.png" alt="">
      </div>
      <div class="fl">
        <span>我的账号</span>
        <span class="radius">可设置商户名称</span>
        <p>钱包、投放地址、消息设置</p>
      </div>
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {mapGetters} from 'vuex'
  import {toDecimal2} from '../assets/js/until'

  export default {
    computed: {
      ...mapGetters({
//        money: 'money',
        deviceInfo: 'deviceInfo'
      })
    },
    components: {},
    data() {
      return {
        income: {},
        device: {},
      }
    },
    methods: {
      _scan() {
        var that = this
        const url = encodeURIComponent(window.location.href)
        this.$http.get('/api/wxpay/get_jssdk_signature?url='+url)
        .then((res)=>{
          wx.config({
            appId: 'wxe269be5d7e65716d',
            timestamp: res.data.timestamp,
            nonceStr: res.data.noncestr,
            signature: res.data.signature,
            jsApiList: ['scanQRCode']
          })
          wx.scanQRCode({
            needResult:1,
            scanType:['qrCode'],
            success:function(res){
              var result = res.resultStr
              that.$http.get('/api/v1/device/scan_to_regis?eid='+result)
              .then((res)=>{
                if(res.data.code == '0'){
                  that.$router.push({path: '/regisDevice',query:{eid:result}})
                }else if(res.data.code == '-1'){
                  alert('设备唯一码错误')
                }else if(res.data.code == '1'){
                  alert('该设备已注册')
                }
              })
            }
          })
        }).catch((err)=>{
          console.error(err)
        })
      }
    },
    created() {
      var account = localStorage.getItem("account")
      console.log(account)
      this.$http.get('/api/v1/income/get_index_info_income?account='+account)
        .then(function (res) {
          this.income.total = toDecimal2(res.data.income.total);
          this.income.pay = toDecimal2(res.data.income.pay);
          this.income.ads = toDecimal2(res.data.income.ads);
          this.income.cash = toDecimal2(res.data.income.cash);
          this.device = res.data.device;
          this.$store.commit('SET_ADDRESS',res.data.address);
          console.log(res.data)
        }, function (err) {
          console.log(err)
        })
    },
    mounted() {
//    console.log(this.money)
//      console.log(this.deviceInfo[0].shopName)
//      console.log(this.$store.getters.money)

    }
  }
</script>

<style lang="less">
  @import '../less/index.less';
</style>
