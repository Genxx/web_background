<template>
  <div id="balance" v-title data-title="提现">
    <div class="cash">
      <div class="sty">
        <p class="fl wd100">提现方式</p>
        <p class="fl">微信支付</p>
      </div>
      <div class="cash-num">
        <p class="fl wd100">提现</p>
        <div class="fl">
          <div class="num">
            <span>&yen;</span>
            <input type="text" v-model="cash" placeholder="提现金额"
                   v-on:keyup="restrictInput" maxLength="10" v-on:blur="restrictNum">
          </div>
          <p class="fcol">余额&yen;{{balance2}}</p>
        </div>
      </div>
      <div class="poundage">
        <p class="fl wd100">手续费</p>
        <span class="fl num fcol">&yen;{{serviceCharge}}</span>
        <p class="fr fcol">微信收取0.6%手续费</p>
      </div>
      <div class="money">
        <p class="fl wd100">实际到账</p>
        <p class="fl fcol">&yen;{{realIncome}}</p>
      </div>
    </div>
    <div class="smit">提现</div>
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
        accountInfo:'accountInfo',
      })
    },
    components: {},
    data() {
      return {
        balance2: 0,
        cash: '',
        serviceCharge:0,
        realIncome:0
      }
    },
    methods: {
      restrictInput(){
        this.cash=this.cash.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')
      },
      restrictNum(){
        if(this.cash ==/[^\d{1,}\.\d{1,}|\d{1,}]/g,''){
          this.cash = ''
        }else if(this.cash!=''){
          let te= parseInt(this.cash);
          let te2 = parseInt(this.balance2);
          let temp =0;
          if(te>te2){
            console.log(222222)
            this.cash=this.balance2
          }
          temp = this.cash*0.006
          if(temp<0.01){
            temp = 0.01
          }
          this.cash =  toDecimal2(this.cash);
          this.serviceCharge =  toDecimal2(temp);
          this.realIncome =  this.cash - this.serviceCharge;
        }
      }
    },
    mounted() {
      this.balance2 = toDecimal2(this.accountInfo.balance);
      this.serviceCharge = toDecimal2(this.serviceCharge);
      this.realIncome = toDecimal2(this.realIncome);
    }
  }
</script>

<style lang="less">
  @import '../less/balance.less';
</style>
