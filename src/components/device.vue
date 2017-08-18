<template>
  <div id="device" v-title data-title="设备管理">
    <div class="status">
      <span class="tit">状态</span>
      <span class="all active" v-on:class="">全部{{numSum}}</span>
      <span class="on-line">在线{{numActive}}</span>
      <span class="off-line">离线{{numSum - numActive}}</span>
    </div>
    <div class="place">
      <span>场地</span>
      <input class="weui-input tag" type="text" v-model="addr" id="show-place"></input>
    </div>
    <div class="inst">
      <span class="fl">离线说明</span>
      <span class="fr">如信号值未显示，请点击刷新图标</span>
    </div>
    <div class="space-info" v-for="(item,index) in deviceInfo">
      <div class="space-info-t">
        <span class="fl">{{item.addr}}</span>
        <p class="fr">
          <span>共{{item.machine.length}}台/</span>
          <span class="col">离线{{item.machine[0].offLineNum}}台</span>
        </p>
      </div>
      <ul class="list" v-for="item2 in deviceInfo[index].machine">
        <li class="clearfix">
          <div class="fl">
            <router-link tag="span" to="/deviceDetail">{{item2.numbmer}}号机-{{item2.shopName}}{{item2.deviceId}}</router-link>
            <span class="font">({{item2.icon}}币/次)</span>
            <span class="col" v-if="item2.status">离线</span>
            <span class="col_flase" v-else>在线</span>
          </div>
          <div class="fr">
            <span>信号值</span>
            <span><img v-bind:src="'./static/icon/signal'+item2.signalValue+'.png'" alt=""></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

  export default {

    components: {},
    data() {
      return {
        numSum: 1,
        numActive: 1,
        addrList: ['全部', 'test', 'ddd', '考拉3'],
        addr: "全部",
        deviceInfo: [
          {
            addr: "丽影广场",
            machine: [
              {
                offLineNum:2,
                numbmer: 1,
                shopName: '娃娃机',
                deviceId: "117782",
                icon: '1',
//              设置是否在线
                status: false,
                signalValue: 0
              },
              {
                offLineNum:2,
                numbmer: 2,
                shopName: '娃娃机',
                deviceId: "117783",
                icon: '1',
//              设置是否在线
                status: true,
                signalValue: 2
              },
            ],
          },
          {
            addr: "考拉",
            machine: [
              {
                offLineNum:3,
                numbmer: 3,
                shopName: '娃娃机',
                deviceId: "117782",
                icon: '1',
//              设置是否在线
                status: false,
                signalValue: 3
              },
              {
                offLineNum:4,
                numbmer: 4,
                shopName: '娃娃机',
                deviceId: "117783",
                icon: '1',
//              设置是否在线
                status: true,
                signalValue: 4
              },
            ],
          }
        ]
      }
    },
    methods: {
//        _goDeviceDetail () {
//            window.location.href = './device_detail.html'
//        }

    },
    mounted() {
      $("#show-place").picker({
        title: "请选择区域",
        cols: [
          {
            textAlign: 'center',
            values: this.addrList
          }
        ],
        onChange: function (input) {
          this.addr = input.displayValue[0];
          console.log(this.addr)
        },
        onClose: function () {
//            console.log("close");
        }
      });
    }
  }
</script>

<style lang="less">
  @import '../less/device.less';
</style>
