<template>
  <div id="addaddr" v-title data-title="添加投放地址">
    <ul class="place">
      <li class="place-name">
        <p class="fl">商店名称</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.shopName"/>
      </li>
      <li class="place-area">
        <p class="fl">地区</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.address" id="_addr" @click="_checkAddr()"/>
      </li>
      <li class="place-detail">
        <p class="fl">详细地址</p>
        <input class="fr" placeholder="请填写" v-model="deviceInfo.detailedAddress"/>
      </li>
      <li class="place-sty">
        <p class="fl">地址类型</p>
        <input class="fr" placeholder="选填" v-model="deviceInfo.type" id="type" @click="_change()"/>
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
    <div class="smit" @click="save()" v-show="saveStatus">
      保存
    </div>
    <div class="smit" @click="edit()" v-show="!saveStatus">
      保存
    </div>
    <weui-distpicker v-if="show" :province="message.province" :city="message.city" :area="message.area" @confirm="onConfirm" @cancel="onCancel"></weui-distpicker>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {mapGetters} from 'vuex'
  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui'
  import WeuiDistpicker from 'weui-distpicker'

  function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
      if (src.hasOwnProperty(prop)) {
        dst[prop] = src[prop];
      }
    }
    return dst;
  }

  export default {
    computed: {
      ...mapGetters({
        editDelivery: 'editDelivery'
      })
    },
    components: {
      WeuiDistpicker
    },
    data() {
      return {
        deviceInfo:
          {
            shopName: '',
            detailedAddress: '',
            type: 'qweqweq',
            address: '',
            diviceNum: '1'
          },
        saveStatus: false,
        distpickerStatus: false,
        message: {
          province: "广东省",
          city: '广州市',
          area: '天河区'
        },
        show:false,
      }
    },
    methods: {
      save() {
        this.deviceInfo.type = $("#type")[0].value
        console.log(this.deviceInfo.type);
        this.$store.commit('SET_DElIVERY_ADDRESS', this.deviceInfo)
        this.$router.push('/delivery')
      },
      edit() {
        let obj = {
          detailedAddress: this.deviceInfo.detailedAddress,
          shopName: this.deviceInfo.shopName,
          type: this.deviceInfo.type,
          diviceNum: this.deviceInfo.diviceNum,
          address: this.deviceInfo.address,
          index: this.editDelivery.index
        }
        console.log(obj)
        this.$store.commit('SET_CHANGEGIFINFO', obj)
        this.$router.push('/delivery')
      },
      _change() {
        var self = this;
        $("#type").picker({
          title: "请选择地区类型",
          cols: [
            {
              textAlign: 'center',
              values: ['电影院', 'KTV', '游戏厅', '商城', '其他']
            }
          ],
          onChange: function (v) {
            self.deviceInfo.type = v.displayValue[0];
            console.log(self.deviceInfo.type)
          },
          onClose: function (p, v, d) {
          }
        });
      },
      _checkAddr(e) {
        this.show = true
      },
      onConfirm(obj,city) {
        this.deviceInfo.address = obj[0].label+"/"+obj[1].label+'/'+obj[2].label
        this.show=false;
      },
      onCancel(){
        this.show=false;
      }

    },
    mounted() {
      console.log(this.editDelivery)
      if (this.editDelivery == '') {
        this.editStatus = true;
      } else {
        this.editStatus = false;
      }
      this.deviceInfo = shallowCopy(this.editDelivery);
    }

  }
</script>

<style lang="less">
  @import '../less/addaddr.less';
</style>
