<template>
  <div id="deviceDetail">
    <ul class="device">
      <li class="device-sty">
        <p class="fl">设备类型</p>
        <p class="fr">娃娃机</p>
      </li>
      <li class="device-id">
        <p class="fl">设备唯一码</p>
        <p class="fr">117782</p>
      </li>
      <router-link tag="li" to="/deviceNum" class="device-num">
        <p class="fl">编号</p>
        <p class="fr">1 &gt;</p>
      </router-link>
      <li class="device-status">
        <p class="fl">状态</p>
        <p class="fr">离线</p>
      </li>
      <li class="device-name">
        <p class="fl">店名</p>
        <p class="fr">考拉</p>
      </li>
      <li class="device-addr">
        <p class="fl">地址</p>
        <p class="fr">布衣港电商产业园</p>
      </li>
    </ul>
    <router-link tag="div" to="/price" class="price">
      <p class="fl">单价</p>
      <p class="fr">1币/次&gt;</p>
    </router-link>
    <div class="gif">
      <router-link tag="div" to="/gif" class="tit">
        <p class="fl">礼品</p>
        <p class="fr">已设置&gt;</p>
      </router-link>
      <ul class="gif-list">
        <li>
          <div class="fl">
            <p class="gif-tit">纸巾</p>
            <p class="gif-num">0.30元/个</p>
          </div>
          <p class="fr">剩余20个</p>
        </li>
      </ul>
    </div>
    <div class="oth">
      <p class="fl">备注</p>
      <p class="fr">未填写&gt;</p>
    </div>
    <div class="quit">
      解除绑定
    </div>
  </div>
  <!--<dialog v-show="dialogControl" type="confirm" title="标题"-->
          <!--@weui-dialog-confirm="handleDialogAction('确定')"-->
          <!--@weui-dialog-cancel="handleDialogAction('取消')">-->
    <!--<p>自定义弹窗内容</p>-->
    <!--<p>hahahaha，快点确定</p>-->
  <!--</dialog>-->

</template>

<script>
  import Vue from 'vue'

  import jw from '../../node_modules/jquery-weui/dist/js/jquery-weui.min.js'

//  import Dialog from 'vue-weui';
  // 只引用需要的文件，减少文件大小
//  import dialog from '../../node_modules/vue-weui/components/dialog/dialog.vue';

  export default {
    component: {
//      dialog
    },
    data() {
      return {
//        dialogControl: true
      }
    },
    methods: {
//      handleDialogAction(action) {
//        this.dialogControl = false;
//      }
    },
    mounted() {
//      $.modal({
//          title: "Hello",
//          text: "我是自定义的modal",
//          buttons: [
//            { text: "支付宝", onClick: function(){ console.log(1)} },
//            { text: "微信支付", onClick: function(){ console.log(2)} },
//            { text: "取消", className: "default", onClick: function(){ console.log(3)} },
//          ]
//        });
//      }
    }
  }
</script>

<style lang="less" >
  @import '../less/device_detail.less';
</style>
