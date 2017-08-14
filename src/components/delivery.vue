<template>
  <div id="delivery" v-title data-title="投放地址">
    <div v-for="(item,index) in deviceInfo">
      <div class="list">
        <div class="addr">
          <div class="box">
            <span class="addr-tit">{{item.shopName}}</span>
            <span class="addr-col">{{item.type}}</span>
            <span class="addr-col">{{item.diviceNum}}台</span>
          </div>
          <p class="col">{{item.address}}</p>
        </div>
        <div class="menu">
          <div class="fl weui-cells weui-cells_checkbox">
            <label class="weui-cell weui-check__label" for="s11">
              <div class="weui-cell__hd">
                <input type="checkbox" class="weui-check" name="checkbox1" id="s11" checked="checked">
                <i class="weui-icon-checked"></i>
              </div>
              <div class="weui-cell__bd">
                <p>设为默认</p>
              </div>
            </label>
          </div>
          <div class="fr">
            <span class="edit">编辑</span>
            <span class="del" @click="delAddr(index)">删除</span>
          </div>
        </div>
      </div>
    </div>

    <router-link tag="div" to="/addaddr" class="smit">
      添加投放地址
    </router-link>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
  import {mapGetters} from 'vuex'
  import {deviceInfo} from "../store/getters";

  export default {
    computed:{
      ...mapGetters({
        deviceInfo:'deviceInfo'
      })
    },
    components: {},
    data() {
      return {
      }
    },
    methods: {
      delAddr(i){
        this.$store.dispatch('delectAddrList', i)
      }
    },
    mounted() {
      console.log(this.deviceInfo)

    }
  }
</script>

<style lang="less">
  @import '../less/delivery.less';
</style>
