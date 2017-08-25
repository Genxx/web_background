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
            <span class="edit" @click="edit(index)"><img src="../assets/icon/edit.png" alt="">编辑</span>
            <span class="del" @click="delAddr(index)"><img src="../assets/icon/delect.png" alt="">删除</span>
          </div>
        </div>
      </div>
    </div>

    <div @click="goAdd()" class="smit">
      添加投放地址
    </div>
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
      },
      edit(i){
        let obj = {
          shopName: this.deviceInfo[i].shopName,
          detailedAddress: this.deviceInfo[i].detailedAddress,
          type: this.deviceInfo[i].type,
          address: this.deviceInfo[i].address,
          diviceNum: this.deviceInfo[i].diviceNum,
          index: i
        }
        console.log(obj)
        this.$store.commit('EDIT_DELIVERY', obj)
        this.$router.push('/addaddr')
      },
      goAdd(){
        this.$store.commit('EDIT_DELIVERY', {})
        this.$router.push('/addaddr')
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
