<template>
  <div id="addaddr" v-title data-title="添加投放地址">
    <ul class="place">
      <li class="place-name">
        <p class="fl">商店名称</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.shopName"/>
      </li>
      <li class="place-area">
        <p class="fl">地区</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.address"/>
      </li>
      <li class="place-detail">
        <p class="fl">详细地址</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.detailedAddress"/>
      </li>
      <li class="place-sty" >
        <p class="fl">地址类型</p>
        <input class="fr" placeholder="选填"  id="type" @click="_change"/>
      </li>
      <li class="place-defu">
        <div class="fl">
          <p>设为默认投放地址</p>
          <p class="col">每次注册设备时使用该地址</p>
        </div>
        <div class="fr weui-cell weui-cell_switch">
          <div class="weui-cell__ft">
            <input class="weui-switch" type="checkbox" checked="checked">
          </div>
        </div>
      </li>
    </ul>
    <div class="smit" @click="save()">
      保存
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'
//  import {deviceInfos} from "../store/getters";

  export default {

    components: {},
    data() {
      return {
        deviceInfo:
          {
            shopName: '',
            detailedAddress: '',
            type: 'qweqweq',
            address: '',
            diviceNum:'1'
          }
      }
    },
    methods: {
      save(){
        this.deviceInfo.type=$("#type")[0].value
        console.log(this.deviceInfo.type);
        this.$store.commit('SET_DElIVERY_ADDRESS',this.deviceInfo)
        this.$router.push('/delivery')
      },
      _change(){
        $("#type").picker({
          title: "请选择地区类型",
          cols: [
            {
              textAlign: 'center',
              values: ['电影院', 'KTV', '游戏厅', '商城','其他']
            }
          ],
          onChange: function () {
          },
          onClose: function (p, v, d) {
          }
        });
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less">
  @import '../less/addaddr.less';
</style>
